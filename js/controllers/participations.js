define(['./module'], function (controllers) {
  'use strict';
  controllers.controller('ParticipationsCtrl', function ($scope, CompanyService, ParticipationService, BoardService) {
    $scope.title = "Participações";

    $scope.working_dashboard_id = 1;

    $scope.working_company_id = null;

    $scope.working_checkpoint_id = 5;

    $scope.add = ParticipationService.reset;

    $scope.show = ParticipationService.get;

    $scope.remove = function(id){
      ParticipationService.remove(id);
      $scope.load();
    };

    $scope.load = function(){
      ParticipationService.getInvestments($scope.working_company_id, $scope.working_checkpoint_id);
      ParticipationService.getInvestitors($scope.working_company_id, $scope.working_checkpoint_id);
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
  });
});''