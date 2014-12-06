'use strict';

/**
 * @ngdoc function
 * @name yolkfulApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yolkfulApp
 */
angular.module('yolkfulApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
