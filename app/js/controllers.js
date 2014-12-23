'use strict';

var phonecatControllers = angular.module('phonecatControllers', []);

/* Controllers */

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
 function($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });
    $scope.age = 'age';
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http'
 function($scope, $routeParams, $http) {
  $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
    $scope.phone = data;
  });
}]);
