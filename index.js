module.exports = function reverse (src) {
  if (typeof src.reverse === 'function') {
    return src.reverse()
  } else {
    var buffer = new Buffer(src.length)

    for (var i = 0, j = src.length - 1; i <= j; ++i, --j) {
      buffer[i] = src[j]
      buffer[j] = src[i]
    }

    return buffer
  }
}
