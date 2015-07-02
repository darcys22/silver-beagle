(function () {

  var injectParams = ['$scope', '$injector', 'bookService'];

  var parentController = function($scope) {
    //List or Cover variables and functions

    $scope.orderby = 'id';
    $scope.reverse = false;

    $scope.listDisplayModeEnabled = false;
    $scope.DisplayModeEnum = {
      Cover: 0,
      List: 1
     };

    $scope.changeDisplayMode = function (displayMode) {
      switch (displayMode) {
        case $scope.DisplayModeEnum.Cover:
          $scope.listDisplayModeEnabled = false;
          break;
        case $scope.DisplayModeEnum.List:
          $scope.listDisplayModeEnabled = true;
          break;
      }
    };

    $scope.setOrder = function (orderby) {
      if (orderby === $scope.orderby) {
        $scope.reverse = !$scope.reverse;
      }
      $scope.orderby = orderby;
    };

    //Pagination stuff

    $scope.currentPage = 1;
    $scope.pageSize = 20;
    $scope.numberOfPages = function() {
      return Math.ceil($scope.books.length/$scope.pageSize);                
    };
  }

  var HordemindController = function($scope, $injector, bookService) {

    $injector.invoke(parentController, this, {$scope: $scope});


    // The books themselves

    $scope.books = bookService.get();
    $scope.books.then(function (books) {
      $scope.books = books;
    }, function (status) {
      console.log(status);
    });

  };

  HordemindController.$inject = injectParams;

  angular.module('myApp.hordemind', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/hordemind', {
              templateUrl: 'hordemind/hordemind.html',
              controller: 'HordemindController'
            });
    }])

    .controller('HordemindController', HordemindController);

  })
();



//At this point the customeredit controller is just something to copy shit from
  //var CustomerEditController = function ($scope, $location, $routeParams,
      //$timeout, config, dataService, modalService) {
        //var vm = this,
        //customerId = ($routeParams.customerId) ? parseInt($routeParams.customerId) : 0,
        //timer,
        //onRouteChangeOff;
        //vm.customer = {};
        //vm.states = [];
        //vm.title = (customerId > 0) ? 'Edit' : 'Add';
        //vm.buttonText = (customerId > 0) ? 'Update' : 'Add';
        //vm.updateStatus = false;
        //vm.errorMessage = '';
        //vm.isStateSelected = function (customerStateId, stateId) {
          //return customerStateId === stateId;
        //};
        //vm.saveCustomer = function () {
          //if ($scope.editForm.$valid) {
            //if (!vm.customer.id) {
              //dataService.insertCustomer(vm.customer).then(processSuccess, processError);
            //}
            //else {
              //dataService.updateCustomer(vm.customer).then(processSuccess, processError);
            //}
          //}
        //};
      //};
//Ends Here
