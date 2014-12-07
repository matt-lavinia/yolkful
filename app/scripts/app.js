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
    'ngTouch',
    'firebase'
  ])
  
  .constant('FIREBASE_URL', 'https://yolkful.firebaseio.com/')
  
  .config(function ($routeProvider) {
    $routeProvider
      
      /* Post Recap Page */
      .when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })

      /* Individual Post Details */
      .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewCtrl'
      })

      /* Login Page */
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        resolve: {
          user: function(Auth) {
            return Auth.resolveUser();
          }
        }
      })

      /* Registration Page */
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
        resolve: {
          user: function(Auth) {
            return Auth.resolveUser();
          }
        }
      })

      /* All Else */
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });