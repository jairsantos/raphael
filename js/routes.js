define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'views/layout.html',
            controller: 'HomeCtrl'
        });

        $routeProvider.when('/companies', {
            templateUrl: 'views/layout.html',
            controller: 'CompaniesCtrl'
        });

        $routeProvider.when('/dashboards', {
            templateUrl: 'views/layout.html',
            controller: 'DashboardsCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }]);
});