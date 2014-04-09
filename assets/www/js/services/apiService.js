'use strict';

angular.module('Filmkampen')
    .service('ApiService', function($http, $cookies) {
  
  return {
      init: function (token, credentials) {
          $http.defaults.headers.common['Authorization'] = 'Basic ' + credentials || 'Basic ' + $cookies.credentials;
          $http.defaults.headers.common['X-Access-Token'] = token || $cookies.token;
      }
  };
});

