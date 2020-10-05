/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

var app = angular.module('Movies', [])

app.factory('Movies', function($http) {
  var cachedData;

  function getData(moviename, callback) {

    var url = 'https://api.themoviedb.org/3/',
      mode = 'search/movie?query=',
      name = '&query=' + encodeURI(moviename),
      key = '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';

    $http.get(url + mode + key + name).success(function(data) {

      console.log(JSON.stringify(data));

      cachedData = data.results;
      callback(data.results);
    });
  }

  return {
    list: getData,
    find: function(name, callback) {
      console.log(name);
      var movie = cachedData.filter(function(entry) {
        return entry.id == name;
      })[0];
      callback(movie);
    }
  };

});