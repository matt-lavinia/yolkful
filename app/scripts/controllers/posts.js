'use strict';

/**
 * @ngdoc function
 * @name yolkfulApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yolkfulApp
 */
angular.module('yolkfulApp')
  .controller('PostsCtrl', function ($scope, $location, Post) {
  	$scope.posts = Post.all;
  	$scope.post = {url: 'http://', title: ''};

    $scope.deletePost = function (post) {
	    Post.delete(post);
	  };

  });