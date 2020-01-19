
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

var pageReferenced = []
var pageImplemented = []
var buttonsUpdated = 0;

var buttonTimeouts = []

function mapButtons(pageName, button, i) {
    button.bindDone = true

    if (button.apiGet !== undefined) {
        api.on(button.apiGet, (value) => {

            button.state = value

            if (button.stateToText !== undefined) {
                button.text = button.stateToText(button.state).toString()
            }

            if (globals.currentPageName == pageName) {
                graphics.updateButton(i)
            }
        });
    }    
}


function setModuleName(name) {
    globals.currentModuleName = name
    globals.currentModule = modules.find( v => v.name == globals.currentModuleName)    
}


function setPageName(name) {
    globals.currentPageName = name
    globals.currentPage = globals.currentModule.pages.find( v => v.name == globals.currentPageName)    
}


function textToFileId(text) {
    var flatText = (Array.isArray(text)) ? text.join('\n') : text

    var patterns = {
        '<': ' less ',
        '>': ' greater ',
        '\\.': ' dot ',
        '-': ' minus ',
        '\\+': ' plus ',
        '\\/': ' backslash ',
        '\\\\': ' slash ',
        '\\%': ' percent ',
        '\\#': ' hash ',
        '\\*': ' asterisk ',
        '!': ' not '
    }
    
    Object.entries(patterns).forEach( ([k,v]) => flatText = flatText.replace(RegExp(k, "g"), v))

    return flatText.trim().split('\n').map( line => {
        return line.trim().split(' ')
            .map( (item, index) => (index == 0) ? item.toLowerCase() : item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
            .join('');        
    }).join('_')
}


function updatePage(page) {
    for (var i = 0; i < page.buttons.length; i++) {
        var button = page.buttons[i]

        if (button === undefined || !Object.keys(button).length) {
            if (globals.displayOnSteamDeck) globals.deck.fillColor(i, 0, 0, 0)
            continue;
        }

        if (button.goToPage !== undefined) {
            if (button.scheme === undefined) button.scheme = buttonLogic.colorScheme.goToPageButton
            if (button.type === undefined) button.type = buttonLogic.types.textToggle

            if (pageReferenced.indexOf(button.goToPage) == -1) pageReferenced.push(button.goToPage)
        }
        
        if (button.scheme != buttonLogic.colorScheme.goToPageButton) {
            buttonsUpdated++
        }

        if (button.dependsOnButtonIdState === undefined) {
            button.dependsOnButtonIdState = -1
        }

        if (button.scheme == buttonLogic.colorScheme.switch && button.maxStatus === undefined) {
            button.maxStatus = button.text.length - 1         
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
            mapButtons(page.name, button, i)
        }

        if (button.nameId === undefined) {
            button.nameId = textToFileId(button.text)
        }

        if (button.repeatEnabled === undefined) {
            if (button.scheme === undefined || button.scheme != buttonLogic.colorScheme.rotary) {
                button.repeatEnabled = false
            } else {
                button.repeatEnabled = true
            }    
        }

        if (button.repeatDelay === undefined) {
            button.repeatDelay = config.buttonRepeatDelay
        }

        if (button.repeatRate === undefined) {
            button.repeatRate = config.buttonRepeatRate
        }

        if (button.repeatPressedLong === undefined) {
            button.repeatPressedLong = false
        }

        graphics.updateButton(i)
    }    

    for (var i = page.buttons.length; i < 15; i++) {
        if (globals.displayOnSteamDeck) globals.deck.fillColor(i, 0, 0, 0)
    }

}


function setButtonRepeat(keyIndex) {
    if (globals.currentPage.buttons[keyIndex].repeatEnabled == true) {       
        if (globals.currentPage.buttons[keyIndex].repeatPressedLong == false) {
            buttonTimeouts[keyIndex] = setTimeout(buttonDown, globals.currentPage.buttons[keyIndex].repeatDelay, keyIndex)
            globals.currentPage.buttons[keyIndex].repeatPressedLong = true
        } else {
            buttonTimeouts[keyIndex] = setTimeout(buttonDown, globals.currentPage.buttons[keyIndex].repeatRate, keyIndex)        
        }    
    }
}


function clearButtonRepeat(keyIndex) {
    if (globals.currentPage.buttons[keyIndex].repeatEnabled == true) {
        clearTimeout(buttonTimeouts[keyIndex])
        globals.currentPage.buttons[keyIndex].repeatPressedLong = false
    }
}


function buttonDown(keyIndex) {
    if (!(keyIndex in globals.currentPage.buttons) || 
        globals.currentPage.buttons[keyIndex].type === buttonLogic.types.none ||
        !Object.keys(globals.currentPage.buttons[keyIndex]).length
    ) {
        return
    }
    
    var button = globals.currentPage.buttons[keyIndex]
    var buttonText = (Array.isArray(button.text)) ? button.text.join(' ') : button.text.split('\n').join(' ')
    console.log('Key #%d "%s"  pressed', keyIndex, buttonText)

    if (button.goToPage !== undefined) {
        setPageName(button.goToPage)
        updatePage(globals.currentPage)
        return
    }

    if (button.apiSend === undefined) {
        return        
    }

    if (button.dependsOnButtonIdState != -1) {
        // This button is active/usable/enabled only when a specific (different) button state is 1
        if (globals.currentPage.buttons[button.dependsOnButtonIdState].state != 1) {
            return
        }
    }

    setButtonRepeat(keyIndex)
    
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

    graphics.updateButton(keyIndex)    
}


globals.deck.on('down', keyIndex => {
    buttonDown(keyIndex)
})


globals.deck.on('up', keyIndex => {    
    if (!(keyIndex in globals.currentPage.buttons) || 
        globals.currentPage.buttons[keyIndex].type === buttonLogic.types.none ||
        !Object.keys(globals.currentPage.buttons[keyIndex]).length
    ) {
        return
    }    
       
    var button = globals.currentPage.buttons[keyIndex]
    
    if (button.apiSend === undefined) {
        return        
    }

    clearButtonRepeat(keyIndex)
    
    if (!button.sendState) {
        api.sendMessage(button.apiSend + " 0").then( error => {
            if (error) console.error(error);
        });
    }
})


globals.deck.on('error', error => {
    throw error
})


async function startApplication() {
    await globals.assets.loadAssets()
    
    // Make 'imgDynamic' folder if it doesn't exist already
    if (!fs.existsSync(config.folderImagesDynamic)){
        fs.mkdirSync(config.folderImagesDynamic);
    }
    
    // Make 'imgStatic' folder if it doesn't exist already
    if (!fs.existsSync(config.folderImagesStatic)){
        fs.mkdirSync(config.folderImagesStatic);
    }
    
    setModuleName(config.firstModuleName)
    
    // Bind all events in pages in this module
    globals.displayOnSteamDeck = false
    globals.currentModule.pages.forEach(page => {
        setPageName(page.name)
        updatePage(globals.currentPage)  
        if (pageImplemented.indexOf(page.name) != -1) {
            throw('Page ' + page.name + ' was implemented twice')
        }
        pageImplemented.push(page.name)
    });
    
    pageReferenced.forEach( page => {
        if (pageImplemented.indexOf(page) == -1) {
            throw('Page ' + page + ' was referenced, but never implemented')
        }
    })
    
    console.log('Opened all pages and generated %d buttons (excluding the goToPage buttons)', buttonsUpdated)
    
    // But in the end display the default page
    globals.displayOnSteamDeck = true
    setPageName(config.firstPageName)
    updatePage(globals.currentPage)    
}


startApplication()