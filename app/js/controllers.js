'use strict';

var phonecatApp = angular.module('phonecatApp', []);

/* Controllers */

phonecatApp.controller('PhoneListCtrl', function($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data.splice(0, 5);
  });

  $scope.orderProp = 'age';
});

