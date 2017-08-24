var isURL = require('validator').isURL;
var axios = require('axios');
var request = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/',
  headers: {'Origin': 'foobar'}
});


module.exports = function getLinks(arr) {
  var urls = arr
    .filter(function (str) {
      return isURL(str);
    });

  var reqs = urls
    .map(function (url) {
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
