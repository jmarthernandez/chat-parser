var test = require('tape');
var mentionFixtures = require('./mentions.fixtures.js');
var mentions = require('../src/mentions');

test('mentionsPredicate', function (t) {
  mentionFixtures.mentionsPredicate.forEach(function (f) {
    t.deepEqual(mentions.mentionsPredicate(f.str), f.expected);
  })

  t.end();
})

test('get mentions', function (t) {
  mentionFixtures.mentions.forEach(function (f) {
    t.deepEqual(mentions.getMentions(f.arr), f.expected);
  })

  t.end();
})
