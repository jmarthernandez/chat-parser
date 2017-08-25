var isURL = require('validator').isURL;
var axios = require('axios');
var request = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/'
});

/**
 * Parses tokenized array into links
 * @func
 * @param {array} arr - a chat input string split on whitespace
 */
module.exports = function getLinks(arr) {
  var urls = arr
    .filter(function (str) {
      return isURL(str);
    });

  var reqs = urls
    .map(function (url) {
      var protocol = url.indexOf('://');
      if (protocol) {
        var shortned = url.slice(protocol + 3);
        return request.get(shortned);
      }
      return request.get(url);
    });

  return axios.all(reqs)
    .then(axios.spread(function () {
      return Array.prototype.slice.call(arguments)
        .map(function (r, i) {
          return {
            url: urls[i],
            title: r.data.match(/<title[^>]*>([^<]+)<\/title>/)[1]
          };
        });
    }));
};
