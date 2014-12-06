'use strict';

angular.module('yolkfulApp')
.controller('PostViewCtrl', function ($scope, $routeParams, Post) {
  $scope.post = Post.get($routeParams.postId);
});