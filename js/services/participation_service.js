define(['./module', './base'], function (services) {
  'use strict';
  services.service('ParticipationService', function($http, $rootScope){
    var self      = this
      , api       = 'http://localhost:3000/api/manager/'
      ;

    function resetInvestments() {
      $rootScope.investments = {};
    }

    function getInvestments(base_company_id) {
      $http.get(api + 'investments?base_company_id=' + base_company_id)
      .success(function(data){
        $rootScope.investments = data;
      });
    }

    function getInvestitors(base_company_id) {
      $http.get(api + 'investitors?base_company_id=' + base_company_id)
      .success(function(data){
        $rootScope.investitors = data;
      });
    }

    this.getInvestments = getInvestments;
    this.getInvestitors = getInvestitors;
  });
});
