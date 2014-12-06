'use strict';

/**
 * @ngdoc function
 * @name yolkfulApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yolkfulApp
 */
angular.module('yolkfulApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Yeoman'
    ];
  });
