define(['./module'], function (controllers) {
  'use strict';
  controllers.controller('CompaniesCtrl', function ($scope) {
    $scope.title = "Empresas";
    
    // TODO: Change for ajax later
    $scope.companies = [
      {
        id: 1,
        trade_name: "Empresa A"
      },
      {
        id: 2,
        trade_name: "Empresa B"
      },
      {
        id: 3,
        trade_name: "Empresa C"
      },
      {
        id: 4,
        trade_name: "Empresa D"
      },
      {
        id: 5,
        trade_name: "Empresa E"
      },
    ];
  });
});''