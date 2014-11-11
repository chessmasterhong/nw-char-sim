'use strict';

angular.module('nwcs', [
    'ui.router'
])
.config(function($stateProvider) {
    $stateProvider
        .state('home', {
            url: '',
            templateUrl: 'partials/home.html'
        });
});
