'use strict';

/**
 * @ngdoc function
 * @name yolkfulApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the yolkfulApp
 */
angular.module('yolkfulApp')
  .controller('NavCtrl', function ($scope, $location, Post) {
  	$scope.post = {url: 'http://', title: ''};

  	$scope.submitPost = function () {
      //$scope.posts.push($scope.post);
      Post.create($scope.post).then(function (ref) {
	      $location.path('/posts/' + ref.name());
	    });
    };

  });