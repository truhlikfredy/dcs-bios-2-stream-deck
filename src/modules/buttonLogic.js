
const sharp                       = require('sharp') // Order of these includes is sensitive
const { createCanvas, loadImage } = require('canvas')
const Enum                        = require('enum')
const graphics                    = require('../graphics.js')
const globals                     = require('../globals.js')

module.exports = {
    types: new Enum(['textToggle', 'icon', 'textIcon']),
    colorScheme: new Enum({
        'none': () => {},
    
        'green7seg': (button, ctx) => {
            const fontId = graphics.detectFontSize(button, button.state.toString())
    
            ctx.fillStyle = '#000000'
            ctx.fillRect(0, 0, globals.deck.ICON_SIZE, globals.deck.ICON_SIZE)
            
            ctx.fillStyle = '#22ff22'
            ctx.font = fonts[fontId].face
    
            const {centerX, centerY} = graphics.centerImage(button.state.toString(), fontId)
            ctx.fillText(button.state.toString(), centerX, centerY)        
        },

        'gotoButton': (button, ctx) => {
            const fontId = graphics.detectFontSize(button, button.text)
    
            ctx.fillStyle = '#300550'
            ctx.fillRect(0, 0, globals.deck.ICON_SIZE, globals.deck.ICON_SIZE)
            
            ctx.fillStyle = '#dddddd'
            ctx.font = fonts[fontId].face
    
            const {centerX, centerY} = graphics.centerImage(button.text, fontId)
            ctx.fillText(button.text, centerX, centerY)        
        },

        'blackButton': (button, ctx) => {
            const fontId = graphics.detectFontSize(button, button.text)
    
            ctx.fillStyle = '#000000'
            ctx.fillRect(0, 0, globals.deck.ICON_SIZE, globals.deck.ICON_SIZE)
            
            ctx.fillStyle = '#dddddd'
            ctx.font = fonts[fontId].face
    
            const {centerX, centerY} = graphics.centerImage(button.text, fontId)
            ctx.fillText(button.text, centerX, centerY)        
        },

        'grayButton': (button, ctx) => {
            const fontId = graphics.detectFontSize(button, button.text)
    
            ctx.fillStyle = button.state ? '#999999' : '#222222'
            ctx.fillRect(0, 0, globals.deck.ICON_SIZE, globals.deck.ICON_SIZE)
            
            ctx.fillStyle = button.state ? '#ffffff' : '#dddddd'
            if (button.customFontColor !== undefined) {
                ctx.fillStyle = button.customFontColor
            }
            ctx.font = fonts[fontId].face
    
            const {centerX, centerY} = graphics.centerImage(button.text, fontId)
            ctx.fillText(button.text, centerX, centerY)        
        },
        
        'blueButton': (button, ctx) => {
            const fontId = graphics.detectFontSize(button, button.text)
    
            ctx.fillStyle = button.state ? '#20C2EE' : '#006070'
            ctx.fillRect(0, 0, globals.deck.ICON_SIZE, globals.deck.ICON_SIZE)
            
            ctx.fillStyle = button.state ? '#ffffff' : '#10B2DE'
            ctx.font = fonts[fontId].face
    
            const {centerX, centerY} = graphics.centerImage(button.text, fontId)
            ctx.fillText(button.text, centerX, centerY)        
        },

        'greenButton': (button, ctx) => {
            const fontId = graphics.detectFontSize(button, button.text)
    
            ctx.fillStyle = button.state ? '#10de30' : '#008020'
            ctx.fillRect(0, 0, globals.deck.ICON_SIZE, globals.deck.ICON_SIZE)
            
            ctx.fillStyle = button.state ? '#ffffff' : '#50dE52'
            ctx.font = fonts[fontId].face
    
            const {centerX, centerY} = graphics.centerImage(button.text, fontId)
            ctx.fillText(button.text, centerX, centerY)        
        },
        
        'greenStripeButton': (button, ctx) => {
            const fontId = graphics.detectFontSize(button, button.text) + 1

            if (button.state) {
                ctx.fillStyle = '#003322'
                ctx.fillRect(0, 0, globals.deck.ICON_SIZE, globals.deck.ICON_SIZE)    
            } else {
                ctx.fillStyle = '#000000'
                ctx.fillRect(0, 0, globals.deck.ICON_SIZE, globals.deck.ICON_SIZE)                    
            }
            
            ctx.fillStyle = button.state ? '#99ffee' : '#004433'
            ctx.fillRect(0, globals.deck.ICON_SIZE * 0.80, globals.deck.ICON_SIZE, globals.deck.ICON_SIZE)
            
            ctx.fillStyle = button.state ? '#ffffee' : '#777777'
            ctx.font = fonts[fontId].face
    
            const {centerX, centerY} = graphics.centerImage(button.text, fontId)
            ctx.fillText(button.text, centerX, centerY - globals.deck.ICON_SIZE * 0.1)        
        },
        
        'yellowStripeButton': (button, ctx) => {
            const fontId = graphics.detectFontSize(button, button.text)
    
            if (button.state) {
                ctx.fillStyle = '#444400'
                ctx.fillRect(0, 0, globals.deck.ICON_SIZE, globals.deck.ICON_SIZE)    
            } else {
                ctx.fillStyle = '#000000'
                ctx.fillRect(0, 0, globals.deck.ICON_SIZE, globals.deck.ICON_SIZE)                    
            }
            
            ctx.fillStyle = button.state ? '#ffff44' : '#333300'
            ctx.fillRect(0, globals.deck.ICON_SIZE * 0.75, globals.deck.ICON_SIZE, globals.deck.ICON_SIZE)
            
            ctx.fillStyle = button.state ? '#ffffff' : '#777777'
            ctx.font = fonts[fontId].face
    
            const {centerX, centerY} = graphics.centerImage(button.text, fontId)
            ctx.fillText(button.text, centerX, centerY)        
        },
        
        'yellowButton': (button, ctx) => {
            const fontId = graphics.detectFontSize(button, button.text)
    
            ctx.fillStyle = button.state ? '#ffff88' : '#aaaa00'
            ctx.fillRect(0, 0, globals.deck.ICON_SIZE, globals.deck.ICON_SIZE)
            
            ctx.fillStyle = button.state ? '#444444' : '#000000'
            ctx.font = fonts[fontId].face
    
            const {centerX, centerY} = graphics.centerImage(button.text, fontId)
            ctx.fillText(button.text, centerX, centerY)        
        },

        'redButton': (button, ctx) => {
            const fontId = graphics.detectFontSize(button, button.text)
    
            ctx.fillStyle = button.state ? '#ff8888' : '#dd0000'
            ctx.fillRect(0, 0, globals.deck.ICON_SIZE, globals.deck.ICON_SIZE)
            
            ctx.fillStyle = button.state ? '#ffffff' : '#dddddd'
            ctx.font = fonts[fontId].face
    
            const {centerX, centerY} = graphics.centerImage(button.text, fontId)
            ctx.fillText(button.text, centerX, centerY)        
        },

        'switch': (button, ctx) => {
            const textArray = button.inversed ? button.text.slice(0).reverse() : button.text.slice(0)
            const textJoined = textArray.join('\n')
            const fontId = graphics.detectFontSize(button, textJoined)
    
            ctx.fillStyle = '#000000'
            ctx.fillRect(0, 0, globals.deck.ICON_SIZE, globals.deck.ICON_SIZE)
            
            ctx.fillStyle = '#555555'
            ctx.font = fonts[fontId].face
    
            const {centerX, centerY} = graphics.centerImage(textJoined, fontId)
            ctx.fillText(textJoined, centerX, centerY)
            
            ctx.fillStyle = '#ffffff'
            var highligted = textArray.slice(0)
            if (button.inversed) {
                for (var i = 0; i < highligted.length; i++) {
                    if (button.state != (textArray.length-1)-i) highligted[i] = " "
                }
            }
            else {
                for (var i = 0; i < highligted.length; i++) {
                    if (button.state != i) highligted[i] = " "
                }                
            }
            ctx.fillText(highligted.join("\n"), centerX, centerY)
        }
        
    })
}
