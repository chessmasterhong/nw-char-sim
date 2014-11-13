require.config({
    baseUrl: '../',
    paths: {
        angular: './vendor/angular/angular',
        d3: './vendor/d3/d3.js',
        domReady: './vendor/requirejs-domready/domready',
        uiRouter: './vendor/angular-ui-router/release/angular-ui-router',

        app: './scripts/app',
        config: './scripts/config',
        modules: './scripts/modules'
    },
    shim: {
        angular: { exports: 'angular' },
        uiRouter: { deps: ['angular'] }
    }
});

define([
    'require',
    'angular',
    'domReady!',
    'app',
    'config/routes'
], function(require, angular, document) {
    'use strict';

    angular.bootstrap(document, ['app']);
});
