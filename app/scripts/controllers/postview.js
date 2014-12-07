'use strict';
/**
 * @ngdoc function
 * @name yolkfulApp.controller:PostViewCtrl
 * @description
 * # PostViewCtrl
 * Ctrl to view individual user posts
 */
angular.module('yolkfulApp')
	.controller('PostViewCtrl', function ($scope, $routeParams, Post) {
	  $scope.post = Post.get($routeParams.postId);
	});