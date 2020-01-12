const sharp                       = require('sharp') // Order of these includes is sensitive
const { createCanvas, ImageData } = require('canvas')
const path                        = require('path')
const config                      = require('./config.js')

var assetsLoaded = 0

module.exports = {
    canvases: {},

    loadAsset: function(assetName, size) {
        return new Promise( resolve => {
            sharp(path.resolve(config.folderImageAssets + '/' + assetName + '.png'))
            .raw()
            .toBuffer()
            .then(buffer => {
                var canvas = createCanvas(size, size)
                var ctx = canvas.getContext('2d')
                var iData = new ImageData(new Uint8ClampedArray(buffer), size, size);
                ctx.putImageData(iData, 0, 0)
                this.canvases[assetName]=canvas
                assetsLoaded++
                resolve()
            })
            .catch(err => {
                throw err
            })        
    
        })
    },


    loadAssets: async function() {
        await this.loadAsset('deck15-ka-50-button-sqaure-0', 72);
        await this.loadAsset('deck15-ka-50-button-sqaure-1', 72);

        console.log('Loaded assets: ', assetsLoaded)        
    }
}