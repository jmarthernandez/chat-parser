var test = require('tape');
var stringifyMessage = require('./testUtils');
var mentionFixtures = require('./mentions.fixtures.js');
var mentions = require('../src/mentions');

test('mentionsPredicate', function (t) {
  mentionFixtures.mentionsPredicate.forEach(function (f) {
    var message = stringifyMessage(f.str, f.expected);
    t.deepEqual(mentions.mentionsPredicate(f.str), f.expected, message);
  })
  t.end();
})

test('getMentions', function (t) {
  mentionFixtures.mentions.forEach(function (f) {
    var message = stringifyMessage(f.arr, f.expected);
    t.deepEqual(mentions.getMentions(f.arr), f.expected, message);
  })
  t.end();
})
