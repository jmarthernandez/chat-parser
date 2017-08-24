module.exports = function stringifyMessage(actual, expected) {
  return JSON.stringify(actual) + ' => ' + JSON.stringify(expected);
};
