(function () {
  var injectParams = ['$scope', '$location', '$routeParams',
      '$timeout', 'config', 'dataService', 'modalService'];
  var CustomerEditController = function ($scope, $location, $routeParams,
      $timeout, config, dataService, modalService) {
        var vm = this,
        customerId = ($routeParams.customerId) ? parseInt($routeParams.customerId) : 0,
        timer,
        onRouteChangeOff;
        vm.customer = {};
        vm.states = [];
        vm.title = (customerId > 0) ? 'Edit' : 'Add';
        vm.buttonText = (customerId > 0) ? 'Update' : 'Add';
        vm.updateStatus = false;
        vm.errorMessage = '';
        vm.isStateSelected = function (customerStateId, stateId) {
          return customerStateId === stateId;
        };
        vm.saveCustomer = function () {
          if ($scope.editForm.$valid) {
            if (!vm.customer.id) {
              dataService.insertCustomer(vm.customer).then(processSuccess, processError);
            }
            else {
              dataService.updateCustomer(vm.customer).then(processSuccess, processError);
            }
          }
        };

  CustomerEditController.$inject = injectParams;

  angular.module('customersApp').controller('CustomerEditController', CustomerEditController);

  }()
);
