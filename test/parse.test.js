var test = require('tape');
var parseFixtures = require('./parse.fixtures.js');
var mentionFixtures = require('./mentions.fixtures.js');
var parser = require('../src/parse');
var mentions = require('../src/mentions');

test('tokenize test', function (t) {
  parseFixtures.tokenize.forEach(function (f) {
    t.deepEqual(parser.tokenize(f.str), f.expected);
  });
  t.end();
});
