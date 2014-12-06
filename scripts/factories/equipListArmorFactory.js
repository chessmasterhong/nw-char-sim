define([
    'factories/module'
], function(factories) {
    'use strict';

    factories.factory('equipListArmorFactory', function($http) {
        return {
            getEquips: function() {
                return $http({
                        method: 'GET',
                        url: 'data/equip-armor.json',
                        json: true
                        //cache: true
                    });
            }
        };
    });
});
