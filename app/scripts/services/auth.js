'use strict';

/**
 * @ngdoc function
 * @name yolkfulApp.services:Auth
 * @description
 * # Auth
 * Tied to the Firebase Auth framework, these are extensions of that platform.
 */
angular.module('yolkfulApp')
.factory('Auth', function ($firebaseAuth, FIREBASE_URL, $rootScope, $firebase) {
  var ref = new Firebase(FIREBASE_URL);
  var auth = $firebaseAuth(ref);
  
  var Auth = {
    register: function (user) {
      return auth.$createUser(user.email, user.password);
    },
    createProfile: function (user) {
      var profile = {
        username: user.username
      };

      var profileRef = $firebase(ref.child('profile'));
      return profileRef.$set(Auth.user.uid, profile);
    },
    login: function (user) {
      return auth.$authWithPassword( user ).then(function( user ){
        $rootScope.$broadcast('$firebaseAuth:authWithPassword', user);
        return user;
      });
    },
    logout: function (user) {
      auth.$unauth();
      $rootScope.$broadcast('$firebaseAuth:unauth');
    },
    resolveUser: function() {
      return auth.$getAuth();
    },
    signedIn: function() {
      return !!auth.$getAuth();
    },
    user: {}
  };

  $rootScope.$on('$firebaseAuth:authWithPassword', function (e, user) {
    angular.copy(user, Auth.user);
    Auth.user.profile = $firebase(ref.child('profile').child(user.uid)).$asObject();
  });

  $rootScope.$on('$firebaseAuth:unauth', function (e, user) {
    if(Auth.user && Auth.user.profile) {
      Auth.user.profile.$destroy();
    }
    angular.copy({}, Auth.user);
  });
  
  return Auth;
});