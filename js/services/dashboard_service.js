define(['./module', './base'], function (services) {
  'use strict';
  services.service('DashboardService', function($http, $rootScope){
    var self      = this
      , api       = 'http://localhost:3000/api/manager/'
      ;

    $http.get(api + 'trees')
    .success(function(data){
      $rootScope.dataForTheTree = data;
    });

  });
});
