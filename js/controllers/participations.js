define(['./module'], function (controllers) {
  'use strict';
  controllers.controller('ParticipationsCtrl', function ($scope, CompanyService, ParticipationService, BoardService) {
    $scope.title = "Participações";

    $scope.working_dashboard_id = null;

    $scope.working_company_id = null;

    $scope.add = ParticipationService.reset;

    $scope.show = ParticipationService.get;

    $scope.remove = function(id){
      ParticipationService.remove(id);
      $scope.load();
    };

    $scope.load_board = function() {
      $scope.working_company_id = null;
      ParticipationService.pick_checkpoint($scope.working_dashboard_id);
      ParticipationService.get_checkpoints($scope.working_dashboard_id);
      load();
    }

    $scope.load = function() {
      ParticipationService.getInvestments($scope.working_company_id, $scope.working_checkpoint_id);
      ParticipationService.getInvestitors($scope.working_company_id, $scope.working_checkpoint_id);
    };

    $scope.checkin = function(checkpoint) {
      ParticipationService.checkpoint($scope.working_checkpoint_id, checkpoint);
    }

    $scope.change_working_company = function(id) {
      $scope.working_company_id = id;
      $scope.load();
    };

    $scope.save = function(participation) {
      participation.checkpoint_id = $scope.working_checkpoint_id;
      ParticipationService.save(participation);
      $scope.load();
    };
  });
});