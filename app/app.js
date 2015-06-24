'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap',
    'myApp.landing'
]).
config(['$routeProvider', function($routeProvider) {
  // Set default view of our app to the landing page


  $routeProvider.otherwise({
    redirectTo: '/landing'
  });

}]);

myApp.value('sitename', 'foundation');
