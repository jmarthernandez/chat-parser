var between = /\(([^()]+)\)/g;

/**
 * Makes sure something bounded by () isn't a non-word
 * @func
 * @param {str} paren bounded string ie (megusta)
 */
function emoticonsPredicate(str) {
  if ((/[^\w\s]/).test(str.slice(1, str.length - 1))) {
    return false;
  }
  return true;
}

/**
 * Flattens an n-dimensional array
 * @func
 * @param {array} arr - n-dimensional array.
 */
function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

/**
 * Parses tokenized array into emoticon strings
 * @func
 * @param {array} arr - a chat input string split on whitespace
 */
function getEmoticons(arr) {
  var nested = arr.map(function (str) {
    return str.match(between);
  });
  
  return flatten(nested)
    .filter(function (el) {
      return el;
    })
    .filter(emoticonsPredicate)
    .map(function (str) {
      return str.slice(1, str.length - 1);
    });
}

module.exports = {
  getEmoticons: getEmoticons,
  emoticonsPredicate: emoticonsPredicate,
};
