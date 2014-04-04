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

        $routeProvider.when('/companies/new', {
            templateUrl: 'views/company/form.html',
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