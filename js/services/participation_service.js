define(['./module', './base'], function (services) {
  'use strict';
  services.service('ParticipationService', function($http, $rootScope){
    var self      = this
      , api       = 'http://localhost:3000/api/manager/'
      ;

    function resetInvestments() {
      $rootScope.investments = {};
    }

    function getInvestments(base_company_id, checkpoint_id) {
      $http.get(api + 'investments?base_company_id=' + base_company_id + '&checkpoint_id=' + checkpoint_id)
      .success(function(data){
        $rootScope.investments = data;
      });
    }

    function getInvestitors(base_company_id, checkpoint_id) {
      $http.get(api + 'investitors?base_company_id=' + base_company_id + '&checkpoint_id=' + checkpoint_id)
      .success(function(data){
        $rootScope.investitors = data;
      });
    }

    function create(participation) {
      $http.post(api + 'participations', participation);
    }

    function reset() {
      $rootScope.participation = {};
    }

    this.checkpoint = function(id, checkpoint) {
      $http.post(api + 'checkpoint?checkpoint_id=' + id, { 'checkpoint': checkpoint });
    }

    this.get_checkpoints = function(participation_id) {
      $http.get(api + 'checkpoints?id=' + participation_id)
      .success(function(data){
        $rootScope.current_checkpoints = data;
      });
    }    

    this.pick_checkpoint = function(participation_id) {
      $http.get(api + 'pick_checkpoint?id=' + participation_id)
      .success(function(data){
        $rootScope.working_checkpoint_id = data.id;
        $rootScope.checkpoint = data;
      });
    }

    this.save = function(participation) {
      if (participation.id === undefined) {
        create(participation);
      } else {
        update(participation)
      }
    };

    this.get = function(id) {
      $http.get(api + 'participation/' + id)
      .success(function(data){
        $rootScope.participation = data;
      });
    }

    this.remove = function(id) {
      console.log('should remove');
      $http.delete(api + 'participations/' + id);
    }

    this.getInvestments = getInvestments;
    this.getInvestitors = getInvestitors;
    this.reset = reset;
  });
});
