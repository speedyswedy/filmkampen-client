'use strict';

angular.module('Filmkampen')
  .service('AuthorizationService', function($http) {

  return {
      login: function (credentials) {
          return $http.post('https://filmkampen-server.herokuapp.com/rest/login', credentials);
      }
  };
});
