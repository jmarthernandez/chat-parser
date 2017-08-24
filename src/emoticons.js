function emoticonsPredicate(str) {
  // null/empty check
  if (!str) {
    return false;
  // has ( or ) symbol
  } if (str.length === 2) {
    return false;
  // has ( or ) symbol
  } else if ((str.indexOf('(') < 0) || (str.indexOf(')') < 0)) {
    return false;
  // has ( symbol as first char
  } else if (str[0] !== '(') {
    return false;
  // contains non-word chars
  } else if ((/[^\w\s]/).test(str.slice(1, str.length - 1))) {
    return false;
  // if ends with )
  } else if (str[str.length - 1] !== ')') {
    return false;
  }
  return true;
}

function getEmoticons(arr) {
  return arr
    .filter(emoticonsPredicate)
    .map(function (str) {
      return str.slice(1, str.length - 1);
    });
}

module.exports = {
  getEmoticons: getEmoticons,
  emoticonsPredicate: emoticonsPredicate,
};
