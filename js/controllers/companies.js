define(['./module'], function (controllers) {
  'use strict';
  controllers.controller('CompaniesCtrl', function ($scope, CompanyService) {
    $scope.title = "Empresas";
  
    $scope.remove = CompanyService.rm;

    $scope.save   = CompanyService.save;

    $scope.show   = CompanyService.get;

    $scope.add    = CompanyService.reset;
  });
});''