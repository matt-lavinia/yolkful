'use strict';

/**
 * @ngdoc function
 * @name yolkfulApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller for the items surrounding Authentication
 */
angular.module('yolkfulApp')
	.controller('AuthCtrl', function ($scope, $location, Auth, user, $firebase) {
	  if (user) {
	    $location.path('/');
	  }

	  $scope.login = function () {
	    Auth.login($scope.user).then(function () {
	      $location.path('/');
	    }, function (error) {
	      $scope.error = error.toString();
	    });
	  };

	  $scope.register = function () {
	    Auth.register($scope.user).then(function(user) {
		    return Auth.login($scope.user).then(function(user) {
		      user.username = $scope.user.username;
		      return Auth.createProfile(user);
		    }).then(function() {
		      $location.path('/');
		    });
		  }, function(error) {
		    $scope.error = error.toString();
		  });
	  };
	});