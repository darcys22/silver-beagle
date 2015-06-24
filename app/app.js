'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.landing'
]).
config(['$routeProvider', function($routeProvider) {
  // Set default view of our app to the landing page


  $routeProvider.otherwise({
    redirectTo: '/landing'
  });

}]);
