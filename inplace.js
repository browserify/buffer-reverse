module.exports = function reverseInplace (a) {
  for (var i = 0, j = a.length - 1; i < j; ++i, --j) {
    var t = a[j]

    a[j] = a[i]
    a[i] = t
  }

  return a
}
