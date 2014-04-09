'use strict';

angular.module('Filmkampen')
  .controller('LoginCtrl', function ($scope, $location, $cookieStore, AuthorizationService, ApiService, SessionService, Base64) {
  
  $scope.login = function () {
      
      var credentials = {
          username: $scope.username,
          password: Base64.encode($scope.password)
      };

      var success = function (data) {
          var token = data.token;
          
          ApiService.init(token);
          
          SessionService.setUser({"username": $scope.username})

          $cookieStore.put('token', token);
          $cookieStore.put('credentials', 'Basic' + $scope.username + ":" + $scope.password);
          $location.path('/home');
      };

      var error = function () {
          alert("sorry");
      };

      AuthorizationService.login(credentials).success(success).error(error);
  };
});