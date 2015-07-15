(function () {

  var injectParams = ['$scope', 'controllerService', 'bookService'];

  var MybooksController = function($scope, controllerService, bookService) {

    controllerService($scope);

    // The books themselves

    $scope.books = bookService.get();
    $scope.books.then(function (books) {
      $scope.books = books;
    }, function (status) {
      console.log(status);
    });

    $scope.availableSearchParams = [
      { key: "title", name: "Title", placeholder: "Title..." },
      { key: "author", name: "Author", placeholder: "Author..." },
    ];

  };

  MybooksController.$inject = injectParams;

  angular.module('myApp.mybooks', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/mybooks', {
              templateUrl: 'mybooks/mybooks.html',
              controller: 'MybooksController'
            });
    }])

    .controller('MybooksController', MybooksController);

  })
();

