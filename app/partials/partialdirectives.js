(function () {

  var viewSelecter = function () {

    return {
      restrict: 'E',
      scope: false,
      templateUrl: 'partials/viewselecter.html'
    }

  };

  angular.module('myApp').directive('viewSelecter', viewSelecter);
}());

