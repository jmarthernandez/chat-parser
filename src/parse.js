var getMentions = require('./mentions').getMentions;
var getEmoticons = require('./emoticons').getEmoticons;
var getLinks = require('./links');

function tokenize (str) {
  return str.match(/\S+/g) || []
}

function parse (str) {
  var tokenized = tokenize(str);
  return getLinks(tokenized)
    .then(function (urls) {
      return {
        mentions: getMentions(tokenized),
        emoticons: getEmoticons(tokenized),
        urls: urls,
      };
    });
}

module.exports = {
  tokenize: tokenize,
  parse: parse,
}
