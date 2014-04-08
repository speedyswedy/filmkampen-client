'use strict';

angular.module('Filmkampen')
  .controller('LoginCtrl', function ($scope, $location, $cookieStore, AuthorizationService, ApiService, SessionService) {
  
  $scope.login = function () {
      var credentials = {
          username: $scope.username,
          password: $scope.password
      };

      var success = function (data) {
          var token = data.token;
          
          ApiService.init(token);
          
          SessionService.setUser({"username": $scope.username})

          $cookieStore.put('token', token);
          $location.path('/home');
      };

      var error = function () {
          // TODO: apply user notification here..
      };

      AuthorizationService.login(credentials).success(success).error(error);
  };
});