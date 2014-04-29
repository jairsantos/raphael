define(['./module'], function (controllers) {
  'use strict';
  controllers.controller('BoardsCtrl', function ($scope, BoardService) {
    $scope.title = "Empresas";

    $scope.remove = BoardService.rm;

    $scope.save   = BoardService.save;

    $scope.show   = BoardService.get;

    $scope.add    = BoardService.reset;
  });
});''