
const path = require('path')
const sharp = require('sharp')
const fs = require("fs");
const DcsBiosApi = require('dcs-bios-api')

const globals = require('./globals.js')
const modules = require('./modules/allModules.js')
const buttonLogic = require('./modules/buttonLogic.js')
const config = require('./config.js')
const helper = require('./helper.js')
const graphics = require('./graphics.js')

var currentNamespaceName = 'default'
globals.currentModule = modules.find( v => v.name == config.currentModuleName)
globals.currentNamespace = globals.currentModule.namespaces.find( v => v.name == currentNamespaceName)

var api = new DcsBiosApi({ logLevel: 'INFO' });
api.startListening()

function updateButton(buttonId) {

    if (globals.currentNamespace.buttons[buttonId].type == buttonLogic.types.none) {
        return
    }
    
    const button = globals.currentNamespace.buttons[buttonId]
    const fileName = helper.buttonName(globals.currentModule, globals.currentNamespace , button)
    console.log(fileName)
    console.log(button)

    if (config.forceImageRecreation || !fs.existsSync(fileName)) {
        graphics.generateImageFile(button)
    }
       
    sharp(path.resolve(fileName))
        .flatten() // Eliminate alpha channel, if any.
        .raw() // Give us uncompressed RGB.
        .toBuffer()
        .then(buffer => {
            console.log("updating image");
            globals.deck.fillImage(buttonId, buffer)
        })
        .catch(err => {
            console.error(err)
        })        
}


function updateNamespace(namespace) {
    for (var i = 0; i < namespace.buttons.length; i++) {
        var button = namespace.buttons[i]

        if (button === undefined) break;

        button.state = button.defaultStatus
        if (button.maxStatus == undefined) {
            button.maxStatus = 1
        }

        if (button.sendState == undefined) {
            button.sendState = true
        }

        mapButtons(button, i)
        
        updateButton(i)
    }    
}

globals.deck.on('down', keyIndex => {
    console.log('key %d down', keyIndex)

    // if (!(keyIndex in buttons) || buttons[keyIndex].type === buttonTypes.none) {
    //     myStreamDeck.fillColor(keyIndex, 0, 0, 0)
    //     return
    // }

    // var button = buttons[keyIndex]

    // // button.state = (button.state + 1) % (button.maxStatus + 1)
    // // console.log('state', button.state)
   
    // if (button.sendState) {
    //     api.sendMessage(button.apiSend + " " + (button.state)).then( error => {
    //         if (error) console.log(error);
    //     });
    // }
    // else {
    //     api.sendMessage(button.apiSend + " 1").then( error => {
    //         if (error) console.log(error);
    //     });        
    // }

    // updateButton(keyIndex);
})

globals.deck.on('up', keyIndex => {
    console.log('key %d up', keyIndex)
    

    // if (!(keyIndex in buttons) || buttons[keyIndex].type === buttonTypes.none) {
    //     myStreamDeck.fillColor(keyIndex, 0, 0, 0)
    //     return
    // }    

    // var button = buttons[keyIndex]
    
    // if (!button.sendState) {
    //     api.sendMessage(button.apiSend + " 0").then( error => {
    //         if (error) console.log(error);
    //     });
    // }
})


globals.deck.on('error', error => {
	console.error(error)
})


function mapButtons(button, i) {
    if (button.apiGet !== undefined) {
        console.log('mapped', i, 'to', button.apiGet)
        api.on(button.apiGet, (value) => {
            console.log('got api button', button.apiGet, i, value)
            button.state = value
            updateButton(i)
        });
    }    
}




updateNamespace(globals.currentNamespace)


