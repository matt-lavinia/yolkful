'use strict';

/**
 * @ngdoc function
 * @name yolkfulApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Navigation controller for the top nav
 */
angular.module('yolkfulApp')
  .controller('NavCtrl', function ($scope, $location, Post, Auth) {
  	$scope.signedIn = Auth.signedIn;
	$scope.logout = Auth.logout;
  	$scope.post = {url: 'http://', title: ''};
  	$scope.user = Auth.user;

  	$scope.submitPost = function () {
  	  console.log($scope.user);
      $scope.post.creator = $scope.user.profile.username;
	  $scope.post.creatorUID = $scope.user.uid;
	  Post.create($scope.post).then(function (ref) {
	    $location.path('/posts/' + ref.name());
	    $scope.post = {url: 'http://', title: ''};
	  });
    };

  });