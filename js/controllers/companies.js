define(['./module'], function (controllers) {
  'use strict';
  controllers.controller('CompaniesCtrl', function ($scope, CompanyService) {
    $scope.title = "Empresas";
  
    // $scope.remove = function(id) {
    //   var index = $scope.companies.findIndex(function(company){
    //     return company.id === id;
    //   });
    //   $scope.companies.splice(index, 1);
    // };

    $scope.remove = CompanyService.rm;

    $scope.save   = CompanyService.save;

    $scope.show   = CompanyService.get;

    $scope.add    = CompanyService.reset;
  });
});''