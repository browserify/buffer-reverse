# buffer-reverse

[![NPM Package](https://img.shields.io/npm/v/buffer-reverse.svg?style=flat-square)](https://www.npmjs.org/package/buffer-reverse)
[![Build Status](https://img.shields.io/travis/crypto-browserify/buffer-reverse.svg?branch=master&style=flat-square)](https://travis-ci.org/crypto-browserify/buffer-reverse)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

A lite module for byte reverse on buffers.


## Examples

``` javascript
var reverse = require('buffer-reverse')
var a = new Buffer('00ff0f', 'hex')

console.log(reverse(a))
// => <Buffer 0f ff 00>
```


Or for those seeking those few extra cycles, perform the operation in place:

``` javascript
var reverseInplace = require('buffer-reverse/inplace')
var a = new Buffer('00ff0f', 'hex')

console.log(reverseInplace(a))
// => <Buffer 0f ff 00>

// See that a has been mutated
console.log(a)
// => <Buffer 0f ff 00>
```


## License [MIT](LICENSE)
