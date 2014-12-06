/* global app:true */
/* exported app */
'use strict';

/**
 * @ngdoc overview
 * @name yolkfulApp
 * @description
 * # yolkfulApp
 *
 * Main module of the application.
 */
angular
  .module('yolkfulApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      }).when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });