(function () {

  var injectParams = ['$http', '$q'];

  var bookService = function ($http, $q) {
    return {
      get: function() {
        var deferred = $q.defer();
        $http.get('assets/generated.json')
          .success(function(data) {
            deferred.resolve(data);
          }).error(function(data) {
            deferred.reject(data);
          });
          return deferred.promise;
        }
      }
    };


  bookService.$inject = injectParams;

  angular.module('myApp').factory('bookService', bookService);
}());


    //var doRequest = function(username, path) {
      //return $http({
        //method: 'JSONP',
        //url: 'https://api.github.com/users/' + username + '/' + path + '?callback=JSON_CALLBACK'
      //});
    //}
    //return {
      //events: function(username) { return doRequest(username, 'events'); },
    //};
