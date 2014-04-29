define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'views/home/index.html',
            controller: 'HomeCtrl'
        });

        $routeProvider.when('/companies', {
            templateUrl: 'views/company/index.html',
            controller: 'CompaniesCtrl'
        });

        $routeProvider.when('/boards', {
            templateUrl: 'views/board/index.html',
            controller: 'BoardsCtrl'
        });

        $routeProvider.when('/participations', {
            templateUrl: 'views/participation/index.html',
            controller: 'ParticipationsCtrl'
        });

        $routeProvider.when('/dashboards', {
            templateUrl: 'views/tree.html',
            controller: 'DashboardsCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }]);
});