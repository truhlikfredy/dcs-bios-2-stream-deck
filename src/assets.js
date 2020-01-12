const sharp                       = require('sharp') // Order of these includes is sensitive
const { createCanvas, ImageData } = require('canvas')
const path                        = require('path')
const config                      = require('./config.js')

var assetsLoaded = 0

module.exports = {
    canvases: {},

    loadAsset: function(file, size) {
        return new Promise( resolve => {
            sharp(path.resolve(config.folderImageAssets + '/' + file))
            .raw()
            .toBuffer()
            .then(buffer => {
                var canvas = createCanvas(size, size)
                var ctx = canvas.getContext('2d')
                var iData = new ImageData(new Uint8ClampedArray(buffer), size, size);
                ctx.putImageData(iData, 0, 0)
                this.canvases[file]=canvas
                assetsLoaded++
                resolve()
            })
            .catch(err => {
                throw err
            })        
    
        })
    },


    loadAssets: async function() {
        await this.loadAsset('deck15-ka-50-button-sqaure-0.png', 72);

        console.log('Loaded assets: ', assetsLoaded)        
    }
}