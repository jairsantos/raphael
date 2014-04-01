define(['./module'], function (controllers) {
  'use strict';
  controllers.controller('HomeCtrl', function ($scope) {
    $scope.title = "Home";

    $scope.menu = ["Home"];
  });
});