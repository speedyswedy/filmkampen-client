'use strict';

angular.module('Filmkampen', ['ngRoute','dropbox','ngResource'])
  .config(function ($locationProvider, $routeProvider, DropboxProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'FilmCtrl'
      })
      .when('/newGame', {
        templateUrl: 'views/newGame.html',
        controller: 'FilmCtrl'
      })
      .when('/video', {
        templateUrl: 'views/video.html',
        controller: 'VideoCtrl'
      })
      .when('/result/:currentTime/:selectedMovie', {
        templateUrl: 'views/result.html',
        controller: 'ResultCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'UserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function (DropboxProvider) {
    DropboxProvider.config('7w6skyoccuryvqr', 'https://ide.monaca.mobi/components/ngDropbox/callback.html');
  }).config(['$httpProvider', function ($httpProvider) {
        // delete header from client:
        // http://stackoverflow.com/questions/17289195/angularjs-post-data-to-external-rest-api
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]).run(function() {
    FastClick.attach(document.body);
  });

