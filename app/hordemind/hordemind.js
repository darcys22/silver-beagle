(function () {

  var injectParams = ['$scope'];

  var HordemindController = function($scope) {

    $scope.number = 20;
    $scope.getNumber = function(num) {
      return new Array(num);
    };

    $scope.books = [
        {title: 'Book of Death1', author: 'aul Coelho2', cover: "assets/images/alc.jpg"},
        {title: 'Book of Death2', author: 'aul Coelho3', cover: "assets/images/alc.jpg"},
        {title: 'Book of Death3', author: 'aul Coelho4', cover: "assets/images/alc.jpg"},
        {title: 'Book of Death4', author: 'aul Coelho5', cover: "assets/images/alc.jpg"},
     ]
          

  
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
