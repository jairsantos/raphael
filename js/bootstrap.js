define([
    'require',
    'angular',
    'jquery',
    'twitterbootstrap',
    'jstree',
    'app',
    // 'nouislider',
    'routes'
], function (require, ng) {
    'use strict';
    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});