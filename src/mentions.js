function mentionsPredicate(str) {
  if (!str) {
    return false;
  } else if (str.indexOf('@') < 0) {
    return false;
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