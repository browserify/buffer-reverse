var Buffer = require('safe-buffer').Buffer

module.exports = function reverse (src) {
  var buffer = Buffer.allocUnsafe(src.length)

  for (var i = 0, j = src.length - 1; i <= j; ++i, --j) {
    buffer[i] = src[j]
    buffer[j] = src[i]
  }

  return buffer
}
