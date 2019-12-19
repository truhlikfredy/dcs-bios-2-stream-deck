
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

function updateButton(buttonId) {
    if (globals.currentNamespace.buttons[buttonId].type == buttonLogic.types.none) {
        if (globals.displayOnSteamDeck) globals.deck.fillColor(buttonId, 0, 0, 0)
        return
    }

    const button = globals.currentNamespace.buttons[buttonId]
    const fileName = helper.buttonName(globals.currentModule, globals.currentNamespace , button)
    // console.log(fileName)
    // console.log(button)  

    if (config.forceImageRecreation || !fs.existsSync(fileName)) {
        graphics.generateImageFile(button)
    }
       
    if (globals.displayOnSteamDeck) {
        sharp(path.resolve(fileName))
            .flatten() // Eliminate alpha channel, if any.
            .raw() // Give us uncompressed RGB.
            .toBuffer()
            .then(buffer => {
                globals.deck.fillImage(buttonId, buffer)
            })
            .catch(err => {
                console.error(err)
            })        
    }
}


function mapButtons(namespaceName, button, i) {
    button.bindDone = true

    if (button.apiGet !== undefined) {
        // console.log('mapped', i, 'to', button.apiGet)
        api.on(button.apiGet, (value) => {
            console.log('got api ', button.apiGet, 'button', i, 'value', value)
            button.state = value

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

        if (button === undefined) {
            if (globals.displayOnSteamDeck) globals.deck.fillColor(keyIndex, 0, 0, 0)
            break;
        }


        if (button.sendJustTheIncrement === undefined) {
            button.sendJustTheIncrement = false
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
    console.log('key %d down', keyIndex)
    // console.log('namespace',  globals.currentNamespace.name)

    if (!(keyIndex in globals.currentNamespace.buttons) || 
        globals.currentNamespace.buttons[keyIndex].type === buttonLogic.types.none) {
        return
    }

    var button = globals.currentNamespace.buttons[keyIndex]

    if (button.goTo !== undefined) {
        setNamespaceName(button.goTo)
        updateNamespace(globals.currentNamespace)
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
    // console.log('state', button.state)
   
    if (button.sendState) {
        api.sendMessage(button.apiSend + " " + (button.state)).then( error => {
            if (error) console.log(error);
        });
    }
    else {
        api.sendMessage(button.apiSend + " " + button.increment).then( error => {
            if (error) console.log(error);
        });        
    }

    updateButton(keyIndex);
})


globals.deck.on('up', keyIndex => {
    console.log('key %d up', keyIndex)
    

    if (!(keyIndex in globals.currentNamespace.buttons) || 
        globals.currentNamespace.buttons[keyIndex].type === buttonLogic.types.none) {
        return
    }    

    var button = globals.currentNamespace.buttons[keyIndex]
    
    if (!button.sendState) {
        api.sendMessage(button.apiSend + " 0").then( error => {
            if (error) console.log(error);
        });
    }
})


globals.deck.on('error', error => {
	console.error(error)
})


setModuleName(config.firstModuleName)

// Bind all events in namespaces in this module
globals.displayOnSteamDeck = false
globals.currentModule.namespaces.forEach(namespace => {
    setNamespaceName(namespace.name)
    updateNamespace(globals.currentNamespace)    
});

// But in the end display the default namespace
globals.displayOnSteamDeck = true
setNamespaceName(config.firstNamespaceName)
updateNamespace(globals.currentNamespace)


