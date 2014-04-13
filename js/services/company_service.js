define(['./module', './base'], function (services) {
  'use strict';
  services.service('CompanyService', function($http, $rootScope){
    var self      = this
      , api       = 'http://localhost:3000/api/manager/'
      ;

    $http.get(api + 'companies').success(function(data){
      $rootScope.companies = data;
    });

    function reset() {
      $rootScope.company = {};
    }

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

    function update(company) {
     $http.put(api + 'companies/' + company.id, company)
      .success(function(data){
        var itemIndex = indexOfById($rootScope.companies, data.id);
        $rootScope.companies.splice(itemIndex, 1, $rootScope.company);
      });
    }

    function get(id) {
      reset();
      $http.get(api + 'companies/' + id)
      .success(function(data){
        $rootScope.company = data;
      });
    }

    this.rm = remove;

    this.save = function(company) {
      if (company.id === undefined) {
        create(company);        
      } else {
        update(company)
      }
    }

    this.get = get;

    this.reset = reset;
  });
});
