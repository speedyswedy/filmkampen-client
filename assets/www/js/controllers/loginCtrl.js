'use strict';

angular.module('Filmkampen')
  .controller('LoginCtrl', function ($scope, $http, $location, LoginService) {
  
  $scope.location = $location;
  
  $scope.go = function(path) {
        $scope.location.path(path);
  };
  
  $scope.goBack = function() {
        window.history.back();
  };
  
  $scope.login = function () {
      LoginService.login($scope.username, $scope.password);
  };
});