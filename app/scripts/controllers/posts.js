'use strict';

/**
 * @ngdoc function
 * @name yolkfulApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller for the Posts section of the yolkfulApp
 */
angular.module('yolkfulApp')
  .controller('PostsCtrl', function ($scope, $location, Post, Auth) {
  	$scope.posts = Post.all;
    $scope.user = Auth.user;
  	
    $scope.deletePost = function (post) {
	    Post.delete(post);
	  };

  });