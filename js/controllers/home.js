define(['./module'], function (controllers) {
  'use strict';
  controllers.controller('HomeCtrl', function ($scope, version) {
    $scope.title = "Home";

    $scope.version = version;
  });
});