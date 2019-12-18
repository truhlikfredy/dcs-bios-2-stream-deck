
const path = require('path')

const { openStreamDeck } = require('elgato-stream-deck')
const sharp = require('sharp') // See http://sharp.dimens.io/en/stable/ for full docs on this great library!

const Enum = require('enum')
const { createCanvas, loadImage } = require('canvas')
const fs = require("fs");

const myStreamDeck = openStreamDeck()

const deckImageSize = myStreamDeck.ICON_SIZE

fonts = [ 
    { px: 30, face: '30px Impact'}, 
    { px: 26, face: '26px Impact'}, 
    { px: 24, face: '24px Impact'}, 
    { px: 20, face: '20px Impact'}, 
    { px: 18, face: '18px Impact'}, 
    { px: 16, face: '16px Impact'}, 
    { px: 14, face: '14px Impact'}, 
    { px: 12, face: '12px Impact'}, 
    { px: 10, face: '10px Impact'}
]

function detectFontSize(text) {
    const canvas = createCanvas(deckImageSize, deckImageSize)
    const ctx = canvas.getContext('2d')
    
    for (var i = 0; i < fonts.length; i++) {
        ctx.font = fonts[i].face
        var textMeasurement = ctx.measureText(text)
        if (textMeasurement.width < (deckImageSize * 0.8)) {
            return i
        }
    }

    return fonts.length-1
}

function centerImage(text, fontId) {
    const canvas = createCanvas(deckImageSize, deckImageSize)
    const ctx = canvas.getContext('2d')
    
    const lines = text.split("\n").length
    console.log('lines', lines)
    ctx.font = fonts[fontId].face

    var text = ctx.measureText(text)
    return { 
        centerX: (deckImageSize - text.width) / 2, 
        centerY: (deckImageSize + fonts[fontId].px /2 - (lines -1) * fonts[fontId].px ) / 2
    }
}


var buttonTypes = new Enum(['none', 'textToggle', 'icon', 'textIcon'])
var colorScheme = new Enum({
    'none': () => {},

    'blackButton': (button, ctx) => {
        const fontId = detectFontSize(button.text)
        console.log('fontid', fontId)

        ctx.fillStyle = '#000000'
        ctx.fillRect(0, 0, deckImageSize, deckImageSize)
        
        ctx.fillStyle = '#dddddd'
        ctx.font = fonts[fontId].face

        const {centerX, centerY} = centerImage(button.text, fontId)
        ctx.fillText(button.text, centerX, centerY)        
    },

    'blueButton': (button, ctx) => {
        const fontId = detectFontSize(button.text)
        console.log('fontid', fontId)

        ctx.fillStyle = button.state ? '#20C2EE' : '#086375'
        ctx.fillRect(0, 0, deckImageSize, deckImageSize)
        
        ctx.fillStyle = button.state ? '#ffffff' : '#10B2DE'
        ctx.font = fonts[fontId].face

        const {centerX, centerY} = centerImage(button.text, fontId)
        ctx.fillText(button.text, centerX, centerY)        
    },

    'switch': (button, ctx) => {
        const textJoined = button.text.join('\n')
        const fontId = detectFontSize(textJoined)
        console.log('fontid', fontId)

        ctx.fillStyle = '#000000'
        ctx.fillRect(0, 0, deckImageSize, deckImageSize)
        
        ctx.fillStyle = '#555555'
        ctx.font = fonts[fontId].face

        const {centerX, centerY} = centerImage(textJoined, fontId)
        ctx.fillText(textJoined, centerX, centerY)
        
        ctx.fillStyle = '#ffffff'
        var highligted = button.text.slice(0)
        for (var i = 0; i < highligted.length; i++) {
            if (button.state != i) highligted[i] = " "
        }
        console.log(highligted)
        ctx.fillText(highligted.join("\n"), centerX, centerY)
    }
    
})

buttons = [
    {   
        type: buttonTypes.textToggle,
        defaultStatus: 0,
        scheme: colorScheme.blackButton,
        nameId: 'back',
        text: '<- Back',
    },
    {   
        type: buttonTypes.textToggle,
        defaultStatus: 0,
        scheme: colorScheme.blueButton,
        sendState: false,
        nameId: 'autoHover',
        text: 'Auto\nHover',
        apiSend: 'AUTO_HOVER',
        apiGet: 'AUTO_HOVER_LED',
    },
    {   
        type: buttonTypes.none,
    },
    {   
        type: buttonTypes.none,
    },
    {   
        type: buttonTypes.none,
    },
    {   
        type: buttonTypes.textToggle,
        defaultStatus: 0,
        scheme: colorScheme.blueButton,
        sendState: false,
        nameId: 'bank',
        text: 'BANK\nHOLD',
        apiSend: 'AP_BANK_HOLD_BTN',
        apiGet: 'AP_BANK_HOLD_LED',
    },
    {   
        type: buttonTypes.textToggle,
        defaultStatus: 0,
        scheme: colorScheme.blueButton,
        sendState: false,
        nameId: 'pitch',
        text: 'PITCH\nHOLD',
        apiSend: 'AP_PITCH_HOLD_BTN',
        apiGet: 'AP_PITCH_HOLD_LED',
    },
    {   
        type: buttonTypes.none,
    },
    {   
        type: buttonTypes.textToggle,
        defaultStatus: 0,
        scheme: colorScheme.blueButton,
        sendState: false,
        nameId: 'fd',
        text: 'FD\nAP',
        apiSend: 'AP_FD_BTN',
        apiGet: 'AP_FD_LED',
    },
    {   
        type: buttonTypes.none,
    },
    {   
        type: buttonTypes.textToggle,
        defaultStatus: 0,
        scheme: colorScheme.blueButton,
        sendState: false,
        nameId: 'hdg',
        text: 'HDG\nHOLD',
        apiSend: 'AP_HDG_HOLD_BTN',
        apiGet: 'AP_HDG_HOLD_LED',
    },
    {   
        type: buttonTypes.textToggle,
        defaultStatus: 0,
        scheme: colorScheme.blueButton,
        sendState: false,
        nameId: 'alt',
        text: 'ALT\nHOLD',
        apiSend: 'AP_ALT_HOLD_BTN',        
        apiGet: 'AP_ALT_HOLD_LED',
    },
    {   
        type: buttonTypes.textToggle,
        defaultStatus: 0,
        maxStatus: 2,
        scheme: colorScheme.switch,
        nameId: 'altMode',
        text: ['Barome', ' ', 'Radio'],
        apiSend: 'AP_BARO_RALT',        
    },
    {   
        type: buttonTypes.textToggle,
        defaultStatus: 0,
        maxStatus: 2,
        scheme: colorScheme.switch,
        nameId: 'hdgMode',
        text: ['Heading', ' ', 'Track'],
        apiSend: 'AP_DH_DT',
    },
    {   
        type: buttonTypes.textToggle,
        defaultStatus: 0,
        maxStatus: 2,
        scheme: colorScheme.switch,
        nameId: 'heat',
        text: ['top', 'both', 'bottom'],
    },

]

var currentNamespace = "autopilot-"

const DcsBiosApi = require('dcs-bios-api');
 
var api = new DcsBiosApi({ logLevel: 'INFO' });
api.startListening()
 
api.on('SC_MASTER_CAUTION_LED', (value) => {
  console.log('Master caution LED is', value ? 'on' : 'off');
});
 
api.on('ML_MASTER_ARM:1', () => {
  console.log('Master arm light is on');
});
 
api.on('ML_MASTER_ARM:0', () => {
  console.log('Master arm light is off');
});

api.on('AIRSPEED_NEEDLE', (speed) => {
      console.log('Speed ' + speed);  
});


api.on('AP_ALT_HOLD_LED:1', () => {
      console.log('ALT on');
    });

    api.on('AP_ALT_HOLD_LED:0', () => {
          console.log('ALT off');
        });
    

// api.sendMessage('WEAPONS_MASTER_ARM 1').then(() => {
//   console.log('Master arm switch turned on');
// });

function buttonName(namespace, buttonId) {
    return "img/" + namespace + "-" + buttons[buttonId].nameId + "-" + buttons[buttonId].state + ".png";
}

function generateImageFile(buttonId) {
    const fileName = buttonName("default", buttonId)

    const canvas = createCanvas(deckImageSize, deckImageSize)
    const ctx = canvas.getContext('2d')

    console.log("generating " + fileName)

    var button = buttons[buttonId]
       
    button.scheme.value(button, ctx)
       
    var buf = canvas.toBuffer()
    fs.writeFileSync(fileName, buf);    
}


function updateButton(buttonId) {
    const fileName = buttonName("default", buttonId)

    if (buttons[buttonId].type == buttonTypes.none) {
        return
    }

    // if (!fs.existsSync(fileName)) {
        generateImageFile(buttonId)
    // }
       
       sharp(path.resolve(fileName))
           .flatten() // Eliminate alpha channel, if any.
           .raw() // Give us uncompressed RGB.
           .toBuffer()
           .then(buffer => {
               console.log("updating image");
               myStreamDeck.fillImage(buttonId, buffer)
           })
           .catch(err => {
               console.error(err)
           })
   
   
    //    sharp(new Buffer(canvas.toBuffer('raw')), {rawWidth: deckImageSize, rawHeight: deckImageSize, rawChannels: 1})
    //        .flatten()
    //        .raw()
    //        .toBuffer()
    //        .then(buffer => {myStreamDeck.fillImage(0, buffer)})
    //        .catch(err => console.log(err))
       
}

// Automatically discovers connected Stream Decks, and attaches to the first one.
// Throws if there are no connected stream decks.
// You also have the option of providing the devicePath yourself as the first argument to the constructor.
// For example: const myStreamDeck = new StreamDeck('\\\\?\\hid#vid_05f3&pid_0405&mi_00#7&56cf813&0&0000#{4d1e55b2-f16f-11cf-88cb-001111000030}')
// On linux the equivalent would be: const myStreamDeck = new StreamDeck('0001:0021:00')
// Available devices can be found with listStreamDecks()

myStreamDeck.on('down', keyIndex => {
    console.log('key %d down', keyIndex)

    if (!(keyIndex in buttons) || buttons[keyIndex].type === buttonTypes.none) {
        myStreamDeck.fillColor(keyIndex, 0, 0, 0)
        return
    }

    var button = buttons[keyIndex]

    // button.state = (button.state + 1) % (button.maxStatus + 1)
    // console.log('state', button.state)
   
    if (button.sendState) {
        api.sendMessage(button.apiSend + " " + (button.state)).then( error => {
            if (error) console.log(error);
        });
    }
    else {
        api.sendMessage(button.apiSend + " 1").then( error => {
            if (error) console.log(error);
        });        
    }

    updateButton(keyIndex);
})

myStreamDeck.on('up', keyIndex => {
    console.log('key %d up', keyIndex)

    if (!(keyIndex in buttons) || buttons[keyIndex].type === buttonTypes.none) {
        myStreamDeck.fillColor(keyIndex, 0, 0, 0)
        return
    }    

    var button = buttons[keyIndex]
    
    if (!button.sendState) {
        api.sendMessage(button.apiSend + " 0").then( error => {
            if (error) console.log(error);
        });
    }
})

// Fired whenever an error is detected by the `node-hid` library.
// Always add a listener for this event! If you don't, errors will be silently dropped.
myStreamDeck.on('error', error => {
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

for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i]

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

