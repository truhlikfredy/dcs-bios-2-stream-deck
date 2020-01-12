const path                        = require('path')
const sharp                       = require('sharp') // Order of these includes is sensitive
const { createCanvas, loadImage } = require('canvas')
const Enum                        = require('enum')
const fs                          = require("fs");

const helper      = require('./helper.js')
const buttonLogic = require('./modules/buttonLogic.js')
const globals     = require('./globals.js')
const config      = require('./config.js')


fonts = [ 
    { px: 31, face: '30px Calibri'}, 
    { px: 27, face: '26px Calibri'}, 
    { px: 25, face: '24px Calibri'}, 
    { px: 23, face: '22px Calibri'}, 
    { px: 21, face: '20px Calibri'}, 
    { px: 19, face: '18px Calibri'}, 
    { px: 16, face: '16px Calibri'}, 
    { px: 14, face: '14px Calibri'}, 
    { px: 12, face: '12px Calibri'}, 
    { px: 10, face: '10px Calibri'},
]


module.exports = {


    estimateHeight: function (lines, fontId) {
        return (lines <= 1) ? fonts[fontId].px : (lines -1) * fonts[fontId].px * 1.2
    },


    detectFontSize: function (button, text) {
        if (button.fontIndex !== undefined) {
            return button.fontIndex
        }

        const canvas = createCanvas(globals.deck.ICON_SIZE, globals.deck.ICON_SIZE)
        const ctx = canvas.getContext('2d')

        for (var i = 0; i < fonts.length; i++) {
            ctx.font = fonts[i].face
            var textMeasurement = ctx.measureText(text)
            if (textMeasurement.width < (globals.deck.ICON_SIZE * 0.85) && 
                this.estimateHeight(text.split("\n").length, i) < (globals.deck.ICON_SIZE * 0.8)) {

                return i
            }
        }
    
        return fonts.length-1
    },


    centerImage: function (text, fontId) {
        const canvas = createCanvas(globals.deck.ICON_SIZE, globals.deck.ICON_SIZE)
        const ctx = canvas.getContext('2d')
        
        const lines = text.split("\n").length
        ctx.font = fonts[fontId].face
    
        var text = ctx.measureText(text)
        return { 
            centerX: (globals.deck.ICON_SIZE - text.width) / 2, 
            centerY: (globals.deck.ICON_SIZE + fonts[fontId].px /2 - this.estimateHeight(lines, fontId) ) / 2
        }
    },


    generateImageFile: function (button) {
        const fileName = helper.buttonName(globals.currentModule, globals.currentPage , button)
    
        const canvas = createCanvas(globals.deck.ICON_SIZE, globals.deck.ICON_SIZE)
        const ctx = canvas.getContext('2d')
    
        button.scheme.value(button, ctx)
           
        var buf = canvas.toBuffer()
        fs.writeFileSync(fileName, buf);    
    },
    

    updateButton: function(buttonId) {   
        const button = globals.currentPage.buttons[buttonId]
        const fileName = helper.buttonName(globals.currentModule, globals.currentPage , button)
    
        if (config.forceImageRecreation || button.dynamicState || !fs.existsSync(fileName)) {
            this.generateImageFile(button)
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
    },
    

}
