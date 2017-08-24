function mentionsPredicate(str) {
  // null/empty check
  if (!str) {
    return false;
  // has @ symbol
  } else if (str.indexOf('@') < 0) {
    return false;
  // has @ symbol as first char
  } else if (str[0] !== '@') {
    return false;
  // contains non-word chars
  } else if ((/[^\w\s]/).test(str.slice(1))) {
    return false;
  // if ends with @
  } else if (str[str.length - 1] === '@') {
    return false
  }
  return true;
}

function getMentions(arr) {
  return arr
    .filter(mentionsPredicate)
    .map(function (str) {
      return str.slice(1);
    });
}

module.exports = {
  mentionsPredicate: mentionsPredicate,
  getMentions: getMentions,
}