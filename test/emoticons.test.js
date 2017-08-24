var test = require('tape');
var stringifyMessage = require('./testUtils');
var emoticonFixtures = require('./emoticons.fixtures.js');
var emoticons = require('../src/emoticons');

test('emoticonsPredicate', function (t) {
  emoticonFixtures.emoticonsPredicate.forEach(function (f) {
    var message = stringifyMessage(f.str, f.expected);
    t.deepEqual(emoticons.emoticonsPredicate(f.str), f.expected, message);
  });
  t.end();
})

test('getEmoticons', function (t) {
  emoticonFixtures.emoticons.forEach(function (f) {
    var message = stringifyMessage(f.arr, f.expected);
    t.deepEqual(emoticons.getEmoticons(f.arr), f.expected, message);
  });
  t.end();
})
