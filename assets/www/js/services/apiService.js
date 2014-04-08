'use strict';

angular.module('Filmkampen')
    .service('ApiService', function($http, $cookies) {
  
  return {
      init: function (token) {
          $http.defaults.headers.common['X-Access-Token'] = token || $cookies.token;
      }
  };
});

