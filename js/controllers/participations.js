define(['./module'], function (controllers) {
  'use strict';
  controllers.controller('ParticipationsCtrl', function ($scope, CompanyService, ParticipationService, BoardService) {

    (function(){
      ParticipationService.resetInvestments();
      ParticipationService.resetInvestitors();
      ParticipationService.resetCheckpoint();
    })();

    $scope.add = ParticipationService.reset;
    $scope.show = ParticipationService.get;

    $scope.remove = function(id){
      ParticipationService.remove(id);
      $scope.load();
    };

    $scope.load_board = function() {
      $scope.working_company_id = null;
      ParticipationService.resetInvestments();
      ParticipationService.resetInvestitors();
      ParticipationService.pick_checkpoint($scope.working_dashboard_id);
      ParticipationService.get_checkpoints($scope.working_dashboard_id);
    }

    $scope.load = function() {
      ParticipationService.getInvestments($scope.working_company_id, $scope.working_checkpoint_id);
      ParticipationService.getInvestitors($scope.working_company_id, $scope.working_checkpoint_id);
    };

    $scope.checkin = function(checkpoint) {
      ParticipationService.checkpoint($scope.working_checkpoint_id, $scope.working_dashboard_id, checkpoint);
    }

    $scope.changeCheckpoint = function(id){
      ParticipationService.changeCheckpoint(id, $scope.working_company_id);
    };

    $scope.change_working_company = function(id) {
      $scope.working_company_id = id;
      $scope.load();
    };

    $scope.save = function(participation) {
      participation.checkpoint_id = $scope.working_checkpoint_id;
      ParticipationService.save(participation);
      $scope.load();
    };

    $scope.newCheckin = ParticipationService.newCheckin;
  });
});