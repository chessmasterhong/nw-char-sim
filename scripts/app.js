'use strict';

angular.module('nwcs', [
    'ui.router'
])
.config(function($stateProvider) {
    $stateProvider
        .state('home', {
            url: '',
            templateUrl: 'partials/home.html'
        })
        .state('character', {
            url: '/character',
            templateUrl: 'partials/character.html'
        })
        .state('powers', {
            url: '/powers',
            templateUrl: 'partials/powers.html'
        })
        .state('feats', {
            url: '/feats',
            templateUrl: 'partials/feats.html'
        })
        .state('boons', {
            url: '/boons',
            templateUrl: 'partials/boons.html'
        })
        .state('companions', {
            url: '/companions',
            templateUrl: 'partials/companions.html'
        });
});
