
const path       = require('path')
const sharp      = require('sharp')
const fs         = require("fs");
const DcsBiosApi = require('dcs-bios-api')

const globals     = require('./globals.js')
const modules     = require('./modules/allModules.js')
const buttonLogic = require('./modules/buttonLogic.js')
const config      = require('./config.js')
const helper      = require('./helper.js')
const graphics    = require('./graphics.js')

var api = new DcsBiosApi({ logLevel: 'INFO' });
api.startListening()

var buttonsUpdated = 0;

function updateButton(buttonId) {
    if (globals.currentNamespace.buttons[buttonId].type == buttonLogic.types.none) {
        if (globals.displayOnSteamDeck) globals.deck.fillColor(buttonId, 0, 0, 0)
        return
    }

    const button = globals.currentNamespace.buttons[buttonId]
    const fileName = helper.buttonName(globals.currentModule, globals.currentNamespace , button)

    if (config.forceImageRecreation || button.dynamicState || !fs.existsSync(fileName)) {
        graphics.generateImageFile(button)
    }
       
    if (globals.displayOnSteamDeck) {
        sharp.cache(false) // Have disable cache or the dynamicState buttons images wouldn't update from the initial content
        sharp(path.resolve(fileName))
            .flatten() // Eliminate alpha channel, if any.
            .raw()     // Give us uncompressed RGB.
            .toBuffer()
            .then(buffer => {
                globals.deck.fillImage(buttonId, buffer)
            })
            .catch(err => {
                throw err
            })        
    }
}


function mapButtons(namespaceName, button, i) {
    button.bindDone = true

    if (button.apiGet !== undefined) {
        api.on(button.apiGet, (value) => {

            button.state = value

            if (button.stateToText !== undefined) {
                button.text = button.stateToText(button.state).toString()
            }

            if (globals.currentNamespaceName == namespaceName) {
                updateButton(i)
            }
        });
    }    
}


function setModuleName(name) {
    globals.currentModuleName = name
    globals.currentModule = modules.find( v => v.name == globals.currentModuleName)    
}


function setNamespaceName(name) {
    globals.currentNamespaceName = name
    globals.currentNamespace = globals.currentModule.namespaces.find( v => v.name == globals.currentNamespaceName)    
}


function updateNamespace(namespace) {
    for (var i = 0; i < namespace.buttons.length; i++) {
        var button = namespace.buttons[i]

        if (button === undefined || !Object.keys(button).length) {
            if (globals.displayOnSteamDeck) globals.deck.fillColor(i, 0, 0, 0)
            break;
        }

        if (button.scheme != buttonLogic.colorScheme.gotoButton) {
            buttonsUpdated++
        }

        if (button.sendJustTheIncrement === undefined) {
            button.sendJustTheIncrement = false
        }

        if (button.text === undefined) {
            button.text = ' '
        }

        if (button.dynamicState === undefined) {
            button.dynamicState = false
        }

        if (button.defaultStatus === undefined) {
            button.defaultStatus = 0
        }

        if (button.apiGet === undefined) {
            if (button.apiSend !== undefined) {
                button.apiGet = button.apiSend
            }
        }

        if (button.increment == undefined) {
            button.increment = 1
        }

        if (button.overflow == undefined) {
            button.overflow = true
        }

        if (button.inversed == undefined) {
            button.inversed = false
        }

        if (button.state === undefined) {
            button.state = button.defaultStatus
        }

        if (button.maxStatus == undefined) {
            button.maxStatus = 1
        }

        if (button.sendState == undefined) {
            button.sendState = true
        }

        if (button.bindDone === undefined) {
            mapButtons(namespace.name, button, i)
        }

        updateButton(i)
    }    

    for (var i = namespace.buttons.length; i < 15; i++) {
        if (globals.displayOnSteamDeck) globals.deck.fillColor(i, 0, 0, 0)
    }

}


globals.deck.on('down', keyIndex => {
    
    if (!(keyIndex in globals.currentNamespace.buttons) || 
        globals.currentNamespace.buttons[keyIndex].type === buttonLogic.types.none ||
        !Object.keys(globals.currentNamespace.buttons[keyIndex]).length
    ) {
        return
    }
    
    var button = globals.currentNamespace.buttons[keyIndex]
    var buttonText = (Array.isArray(button.text)) ? button.text.join(' ') : button.text.split('\n').join(' ')
    console.log('Key #%d "%s"  pressed', keyIndex, buttonText)

    if (button.goTo !== undefined) {
        setNamespaceName(button.goTo)
        updateNamespace(globals.currentNamespace)
        return
    }

    if (button.apiSend === undefined) {
        return        
    }

    if (button.overflow) {
        button.state = (button.state + button.increment) % (button.maxStatus + 1)
    }
    else {
        button.state = button.state + button.increment
        if (button.state > button.maxStatus) button.state = button.maxStatus
    }
    if (button.state < 0) button.state = 0
   
    if (button.sendLiterarly !== undefined)  {
        api.sendMessage(button.apiSend + " " + button.sendLiterarly).then( error => {
            if (error) console.error(error);
        });                
    }
    else {
        if (button.sendState) {
            api.sendMessage(button.apiSend + " " + (button.state)).then( error => {
                if (error) console.error(error);
            });
        }
        else {
            api.sendMessage(button.apiSend + " " + button.increment).then( error => {
                if (error) console.error(error);
            });        
        }    
    }

    updateButton(keyIndex);
})


globals.deck.on('up', keyIndex => {
    
    if (!(keyIndex in globals.currentNamespace.buttons) || 
        globals.currentNamespace.buttons[keyIndex].type === buttonLogic.types.none ||
        !Object.keys(globals.currentNamespace.buttons[keyIndex]).length
    ) {
        return
    }    
    
    var button = globals.currentNamespace.buttons[keyIndex]
    
    if (button.apiSend === undefined) {
        return        
    }
    
    if (!button.sendState) {
        api.sendMessage(button.apiSend + " 0").then( error => {
            if (error) console.error(error);
        });
    }
})


globals.deck.on('error', error => {
    throw error
})


// Make 'img' folder if it doesn't exist already
if (!fs.existsSync('img')){
    fs.mkdirSync('img');
}

setModuleName(config.firstModuleName)

// Bind all events in namespaces in this module
globals.displayOnSteamDeck = false
globals.currentModule.namespaces.forEach(namespace => {
    setNamespaceName(namespace.name)
    updateNamespace(globals.currentNamespace)    
});

console.log('Opened all namespaces and generated %d buttons (excluding the goTo buttons)', buttonsUpdated)

// But in the end display the default namespace
globals.displayOnSteamDeck = true
setNamespaceName(config.firstNamespaceName)
updateNamespace(globals.currentNamespace)


