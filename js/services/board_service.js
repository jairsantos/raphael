define(['./module', './base'], function (services) {
  'use strict';
  services.service('BoardService', function($http, $rootScope){
    var self      = this
      , api       = 'http://localhost:3000/api/manager/'
      ;

    $http.get(api + 'boards').success(function(data){
      console.log(data);
      $rootScope.boards = data;
    });

    function reset() {
      $rootScope.board = {};
    }

    function remove(id) {
      $http.delete(api + 'boards/' + id)
      .success(function(data){
        removeById($rootScope.boards, id);
      });
    }

    function create(board) {
     $http.post(api + 'boards', board)
      .success(function(data){
        $rootScope.boards.push(data);
      });
    }

    function update(board) {
     $http.put(api + 'boards/' + board.id, board)
      .success(function(data){
        var itemIndex = indexOfById($rootScope.boards, data.id);
        $rootScope.boards.splice(itemIndex, 1, $rootScope.board);
      });
    }

    function get(id) {
      reset();
      $http.get(api + 'boards/' + id)
      .success(function(data){
        $rootScope.board = data;
      });
    }

    this.rm = remove;

    this.save = function(board) {
      if (board.id === undefined) {
        create(board);
      } else {
        update(board)
      }
    }

    this.get = get;

    this.reset = reset;
  });
});
