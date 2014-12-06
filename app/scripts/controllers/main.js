'use strict';

/**
 * @ngdoc function
 * @name yolkfulApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yolkfulApp
 */
(function(global, Firebase) {

	angular.module('yolkfulApp')
	  .controller('MainCtrl', function ($scope) {
	    $scope.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma',
	      'Yeoman'
	    ];

	    // now we can use $firebase to synchronize data between clients and the server!
		//var ref = new Firebase('https://yolkful.firebaseio.com/');
		//var sync = $firebase(ref);
	  });

})(window, Firebase);