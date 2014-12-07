'use strict';

angular.module('yolkfulApp')
.factory('Auth', function ($firebaseAuth, FIREBASE_URL, $rootScope) {
  var ref = new Firebase(FIREBASE_URL);
  var auth = $firebaseAuth(ref);

  var Auth = {
    register: function (user) {
      return auth.$createUser(user.email, user.password);
    },
    createProfile: function (user) {
      var profile = {
        username: user.username,
        md5_hash: user.md5_hash
      };

      var profileRef = $firebase(ref.child('profile'));
      return profileRef.$set(user.uid, profile);
    },
    login: function (user) {
      return auth.$authWithPassword(user);
    },
    logout: function () {
      auth.$unauth();
    },
    resolveUser: function() {
      return auth.$getAuth();
    },
    signedIn: function() {
      return !!auth.$getAuth();
    },
    user: {}
  };

  return Auth;
});