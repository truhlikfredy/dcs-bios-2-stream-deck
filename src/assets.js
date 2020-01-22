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

        await this.loadAsset('deck15-ka-50-rotary-0', 72);
        await this.loadAsset('deck15-ka-50-rotary-1', 72);
        await this.loadAsset('deck15-ka-50-rotary-2', 72);
        await this.loadAsset('deck15-ka-50-rotary-3', 72);

        await this.loadAsset('deck15-switch-1', 72);
        await this.loadAsset('deck15-switch-2', 72);
        await this.loadAsset('deck15-switch-3', 72);
        await this.loadAsset('deck15-switch-4', 72);
        await this.loadAsset('deck15-switch-5', 72);
        await this.loadAsset('deck15-switch-6', 72);
        await this.loadAsset('deck15-switch-7', 72);
        await this.loadAsset('deck15-switch-8', 72);
        await this.loadAsset('deck15-switch-9', 72);
        await this.loadAsset('deck15-switch-selector', 72);
        
        if (config.logButtons)
        console.log('Loaded assets: ', assetsLoaded)        
    }
}