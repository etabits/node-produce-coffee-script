'use strict'
const coffeeScript = require('coffee-script')

module.exports = ()=> ({
  source: '.coffee',
  target: '.js',
  via: [
    (input)=> coffeeScript.compile(input.toString()),
    function(result) {
      this.output.mimeType = 'application/javascript'
      return result
    }
  ]
})
