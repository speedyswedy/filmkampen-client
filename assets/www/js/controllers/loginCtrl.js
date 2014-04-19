'use strict';

angular.module('Filmkampen')
  .controller('LoginCtrl', function ($scope, $http, $location, $cookieStore, AuthorizationService, ApiService, SessionService, Base64) {
  
  
  $scope.location = $location;
  
  $scope.go = function(path) {
        $scope.location.path(path);
  };
  
  $scope.goBack = function() {
        window.history.back();
  };
  
  $scope.login = function () {
      
      $scope.credentials = "Basic " + Base64.encode($scope.username + ":" + $scope.password);
      
      var success = function (response) {
          if (response.trim() == "OK") {
            ApiService.init($scope.credentials);
            SessionService.setUser({"username": $scope.username})
            $cookieStore.put('credentials', $scope.credentials);
            $location.path('/home');
          } else {
            $location.path('/start');  
          }
      };

      var error = function (response) {
          alert("FEL");
      };
      
      var param = {"username":$scope.username, "password":$scope.password};

      AuthorizationService.login($scope.credentials, param).success(success).error(error);
  };
});