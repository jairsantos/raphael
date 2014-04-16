define(['./module'], function (controllers) {
  'use strict';
  controllers.controller('ParticipationsCtrl', function ($scope, CompanyService, ParticipationService) {
    $scope.title = "Participações";

    $scope.working_dashboard_id = 1;

    $scope.working_company_id = null;

    $scope.load = function(){
      ParticipationService.getInvestments($scope.working_company_id);
      ParticipationService.getInvestitors($scope.working_company_id);
    }

    $scope.change_working_company = function(id) {
      $scope.working_company_id = id;
      $scope.load();
    }
  });
});''