
const { openStreamDeck } = require('elgato-stream-deck')
const assets             = require('./assets.js')

module.exports = {
    deck: openStreamDeck(),
    assets: assets,
}
