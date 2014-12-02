define([
    'angular',
    'uiRouter',
    'controllers/index',
    'factories/index'
], function(angular) {
    'use strict';

    return angular.module('app', [
        'app.controllers',
        'app.factories',
        'ui.router'
    ]);
});
