var test = require('tape')
var reverse = require('../')
var reverseInplace = require('../inplace')
var fixtures = require('./fixtures')
var Buffer = require('safe-buffer').Buffer

test('reverse', function (t) {
  fixtures.forEach(function (f) {
    t.test('returns ' + f.expected + ' for ' + f.a, function (t) {
      var a = Buffer.from(f.a, 'hex')
      t.same(reverse(a).toString('hex'), f.expected)
      t.same(a.toString('hex'), f.a) // input unchanged
      t.end()
    })
  })

  t.end()
})

test('reverse/inplace', function (t) {
  fixtures.forEach(function (f) {
    t.test('returns ' + f.expected + ' for ' + f.a, function (t) {
      var a = Buffer.from(f.a, 'hex')
      t.same(reverseInplace(a).toString('hex'), f.expected)
      t.same(a.toString('hex'), f.expected) // input mutated
      t.end()
    })
  })

  t.end()
})
