define(['./module'], function (controllers) {
  'use strict';
  controllers.controller('DashboardsCtrl', function ($scope, DashboardService, BoardService) {
    $scope.title = "Dashboards";

    $scope.loadCheckpoints = DashboardService.getCheckpoints;

    $scope.loadTree = DashboardService.getTree;

    $scope.treeOptions = {
        nodeChildren: "investments",
        dirSelectable: true,
        injectClasses: {
            ul: "a1",
            li: "a2",
            liSelected: "a7",
            iExpanded: "a3",
            iCollapsed: "a4",
            iLeaf: "a5",
            label: "a6",
            labelSelected: "a8"
        }
    }

  });
});