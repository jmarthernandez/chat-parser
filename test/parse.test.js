var test = require('tape');
var stringifyMessage = require('./testUtils');
var parseFixtures = require('./parse.fixtures.js');
var parser = require('../src/parse');

test('tokenize test', function (t) {
  parseFixtures.tokenize.forEach(function (f) {
    var message = stringifyMessage(f.str, f.expected);
    t.deepEqual(parser.tokenize(f.str), f.expected, message);
  });
  t.end();
});
