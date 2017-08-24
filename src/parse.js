var ment

function tokenize(str) {
  return str.match(/\S+/g) || []
}

module.exports = {
  tokenize: tokenize,
}
