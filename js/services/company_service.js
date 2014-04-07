define(['./module', './base'], function (services) {
  'use strict';
  services.service('CompanyService', function($http, $rootScope){
    var self      = this
      , api       = 'http://localhost:3000/api/manager/'
      ;

    $http.get(api + 'companies').success(function(data){
      $rootScope.companies = data;
    });

    function remove(id) {
      $http.delete(api + 'companies/' + id)
      .success(function(data){
        removeById($rootScope.companies, id);
      });
    }

    function create(company) {
     $http.post(api + 'companies', company)
      .success(function(data){
        $rootScope.companies.push(data);
      });
    }

    function get(id) {
     $http.get(api + 'companies/' + id)
      .success(function(data){
        $rootScope.company = data;
      });
    }

    function reset() {
      $rootScope.company = {};
    }

    this.rm = remove;

    this.save = create;

    this.get = get;

    this.reset = reset;
  });
});
