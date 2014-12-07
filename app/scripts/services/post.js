'use strict';

/**
 * @ngdoc function
 * @name yolkfulApp.services.Post
 * @description
 * # Post
 * Post service provides a way to do basic CRUD operations with posts to a Firebase data store.
 */
angular.module('yolkfulApp')
.factory('Post', function ($firebase, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL);
  var posts = $firebase(ref.child('posts')).$asArray();

  var Post = {
    all: posts,
    create: function (post) {
      return posts.$add(post);
    },
    get: function (postId) {
      return $firebase(ref.child('posts').child(postId)).$asObject();
    },
    delete: function (post) {
      return posts.$remove(post);
    }
  };

  return Post;
});