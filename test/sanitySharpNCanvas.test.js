const path                        = require('path')
const sharp                       = require('sharp') // Order of these includes is sensitive
const { createCanvas, loadImage } = require('canvas')
const fs                          = require("fs");

const assert                      = require('chai').assert;
const expect                      = require('chai').expect;
const should                      = require('chai').should();

const actualFilename   = 'test/actual.png'
const expectedFilename = 'test/expected.png'
const resolution = 256

describe('sanityTestsForSharpAndCanvas', function() {

    before( () => {
      fs.unlink(actualFilename, (err) => {})
    })

    it('the "' + actualFilename + '" file to be removed', () => {
        expect(fs.existsSync(actualFilename)).to.be.false
    })

    it('canvas should write image to a file', () => {
        const canvas = createCanvas(resolution, resolution)
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = '#300550'
        ctx.fillRect(0, 0, resolution, resolution)
        
        ctx.fillStyle = '#aaffaa'
        ctx.font = '28px Impact'

        ctx.fillText("The quick brown\nfox jumps over\nthe lazy dog", resolution/16, resolution/8)       

        var buf = canvas.toBuffer()
        fs.writeFileSync(actualFilename, buf);            

        expect(fs.existsSync(actualFilename)).to.be.true
    })
    
    it('sharp being able to read it back', (done) => {
        sharp.cache(false)
        sharp(path.resolve(expectedFilename))
            .flatten() // Eliminate alpha channel, if any.
            .raw() // Give us uncompressed RGB.
            .toBuffer()
            .then( (buf) => {
                assert.equal( buf.length, resolution * resolution * 3)
                done()
            })
            .catch(done)    
    })

    it('and the actual content match with expected', (done) => {
        sharp.cache(false)
        sharp(path.resolve(actualFilename))
            .flatten() // Eliminate alpha channel, if any.
            .raw()     // Give us uncompressed RGB.
            .toBuffer()
            .then( (buf1) => {
                sharp(path.resolve(expectedFilename))
                    .flatten() // Eliminate alpha channel, if any.
                    .raw()     // Give us uncompressed RGB.
                    .toBuffer()
                    .then( (buf2) => {
                        assert.equal(Buffer.compare(buf1, buf2), 0)
                        done()
                    })
                    .catch(done)    
            })
            .catch(done)    
    })

    
  })