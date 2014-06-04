define(['./module', './base'], function (services) {
  'use strict';
  services.service('DashboardService', function($http, $rootScope){
    var self      = this
      , api       = 'http://localhost:3000/api/manager/'
      ;

    $rootScope.workingBoardId = undefined;

    $rootScope.workingCheckpointId = undefined;

    $rootScope.dataForTheTree = undefined;

    this.getCheckpoints = function(participation_id) {
      $http.get(api + 'checkpoints?id=' + participation_id)
      .success(function(data){
        $rootScope.checkpoints = data;
      });
    };

    this.getTree = function(checkpoint_id) {
      $http.get(api + 'trees?checkpoint_id=' + checkpoint_id)
      .success(function(data){
        $rootScope.dataForTheTree = data;
      });
    };

  });
});
