define([
    'factories/module'
], function(factories) {
    'use strict';

    factories.factory('equipListArmsFactory', function($http) {
        return {
            getEquips: function() {
                return $http({
                        method: 'GET',
                        url: 'data/equip-arms.json',
                        json: true,
                        cache: false
                    });
            }
        };
    });
});
