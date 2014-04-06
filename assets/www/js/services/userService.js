'use strict';

angular.module('Filmkampen')
  .service('UserService', function($http, $resource) {

    var USER = $resource("https://filmkampen-server.herokuapp.com/rest/user/:id", {id: "@id"});
    var USERS = $resource("https://filmkampen-server.herokuapp.com/rest/user", {},
        { get: {method: 'GET', isArray: true},
          post: {method: 'POST'}});
    
    this.getUsers = function() {
        return USERS.get();    
    };
    
    this.getUser = function() {
        return USER.get({id : "533DC43A0364B9A02ADB4ADA"});
    };
    
    this.saveUser = function(user) {
        return USERS.post(user);
    };
    
});