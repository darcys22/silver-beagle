(function () {

  var injectParams = ['$scope', 'controllerService', 'bookService'];

  var MybooksController = function($scope, controllerService, bookService) {

    controllerService($scope);

    // The books themselves

    $scope.books = bookService.getMyBooks();
    $scope.books.then(function (books) {
      $scope.books = books;
    }, function (status) {
      console.log(status);
    });

    $scope.availableSearchParams = [
      { key: "title", name: "Title", placeholder: "Title..." },
      { key: "author", name: "Author", placeholder: "Author..." },
    ];

    $scope.query = {};
    $scope.searchReturn = false;
    $scope.focus = false;

    $scope.$watch('query', function(value) {
      if (value.query || value.title || value.author) {
          $scope.books = bookService.searchBooks(value);
          $scope.books.then(function (books) {
            $scope.books = books;
            $scope.searchReturn = true;
          }, function (status) {
            console.log(status);
          });
          //TODO: Remove but shows how often it searches
          console.log('Search');
      }
    }, true);
      

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

