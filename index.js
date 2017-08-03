var Buffer = require('safe-buffer').Buffer
module.exports = function reverse (src) {
  if (typeof src.reverse === 'function') {
    return Buffer.from(src).reverse()
  } else {
    var buffer = Buffer.alloc(src.length)

    for (var i = 0, j = src.length - 1; i <= j; ++i, --j) {
      buffer[i] = src[j]
      buffer[j] = src[i]
    }

    return buffer
  }
}
