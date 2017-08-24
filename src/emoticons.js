var between = /\(([^()]+)\)/g

function emoticonsPredicate(str) {
  if ((/[^\w\s]/).test(str.slice(1, str.length - 1))) {
    return false;
  }
  return true;
}

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

function getEmoticons(arr) {
  var nested = arr.map(function (str) {
    return str.match(between)
  })
  return flattenedAndFiltered = flatten(nested)
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
