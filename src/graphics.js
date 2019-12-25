const sharp                       = require('sharp') // Order of these includes is sensitive
const { createCanvas, loadImage } = require('canvas')
const Enum                        = require('enum')
const fs                          = require("fs");

const helper      = require('./helper.js')
const buttonLogic = require('./modules/buttonLogic.js')
const globals     = require('./globals.js')


fonts = [ 
    { px: 30, face: '30px Impact'}, 
    { px: 26, face: '26px Impact'}, 
    { px: 24, face: '24px Impact'}, 
    { px: 22, face: '22px Impact'}, 
    { px: 20, face: '20px Impact'}, 
    { px: 18, face: '18px Impact'}, 
    { px: 16, face: '16px Impact'}, 
    { px: 14, face: '14px Impact'}, 
    { px: 12, face: '12px Impact'}, 
    { px: 10, face: '10px Impact'}
]


module.exports = {
    detectFontSize: function (button, text) {
        if (button.fontIndex !== undefined) {
            return button.fontIndex
        }

        const canvas = createCanvas(globals.deck.ICON_SIZE, globals.deck.ICON_SIZE)
        const ctx = canvas.getContext('2d')
        
        for (var i = 0; i < fonts.length; i++) {
            ctx.font = fonts[i].face
            var textMeasurement = ctx.measureText(text)
            if (textMeasurement.width < (globals.deck.ICON_SIZE * 0.8)) {
                return i
            }
        }
    
        return fonts.length-1
    },


    centerImage: function (text, fontId) {
        const canvas = createCanvas(globals.deck.ICON_SIZE, globals.deck.ICON_SIZE)
        const ctx = canvas.getContext('2d')
        
        const lines = text.split("\n").length
        // console.log('lines', lines)
        ctx.font = fonts[fontId].face
    
        var text = ctx.measureText(text)
        return { 
            centerX: (globals.deck.ICON_SIZE - text.width) / 2, 
            centerY: (globals.deck.ICON_SIZE + fonts[fontId].px /2 - (lines -1) * fonts[fontId].px ) / 2
        }
    },


    generateImageFile: function (button) {
        const fileName = helper.buttonName(globals.currentModule, globals.currentNamespace , button)
    
        const canvas = createCanvas(globals.deck.ICON_SIZE, globals.deck.ICON_SIZE)
        const ctx = canvas.getContext('2d')
    
        // console.log("generating " + fileName)
              
        // console.log(button)
        button.scheme.value(button, ctx)
           
        var buf = canvas.toBuffer()
        fs.writeFileSync(fileName, buf);    
    },
    
    

}
