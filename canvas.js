const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(72, 72)
const ctx = canvas.getContext('2d')
var fs = require("fs");

const deckImageSize = 72

ctx.fillStyle = "#086375"
ctx.fillRect(0, 0, deckImageSize, deckImageSize)


ctx.fillStyle = "#10B2DE"
ctx.font = '16px Impact'
var text = ctx.measureText('BANK\nHOLD')
ctx.fillText('BANK\nHOLD', (deckImageSize - text.width) / 2, (deckImageSize - 14) / 2)



var buf = canvas.toBuffer()
fs.writeFileSync("test.png", buf);

