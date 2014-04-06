'use strict';

angular.module('Filmkampen', ['ngRoute','dropbox'])
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
        controller: 'FilmCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function (DropboxProvider) {
    DropboxProvider.config('7w6skyoccuryvqr', 'https://ide.monaca.mobi/components/ngDropbox/callback.html');
  }).
  run(function() {
    FastClick.attach(document.body);
  });
