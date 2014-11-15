define([
    'controllers/module'
], function(controllers) {
    'use strict';

    controllers.controller('characterController', function($scope) {

        // ====================
        // Character Base
        $scope.charLevel = '';

        $scope.charClass = '';

        $scope.charParagon = '';

        $scope.charRace = '';

        // ====================
        // Ability Scores
        $scope.charAbility = {
            str: 0,
            con: 0,
            dex: 0,
            int: 0,
            wis: 0,
            cha: 0
        };

        // ====================
        // Derived Stats
        $scope.charGearScore = 0;

        $scope.charArmorClass = 0;

        $scope.charHitPoints = 0;

        $scope.charStatRatings = [
            { name: 'Power',                  value: 0 },
            { name: 'Critical Strike',        value: 0 },
            { name: 'Armor Penetration',      value: 0 },
            { name: 'Recovery',               value: 0 },
            { name: 'Action Point Gain',      value: 0 },
            { name: 'Combat Advantage Bonus', value: 0 },
            { name: 'Control Bonus',          value: 0 },
            { name: 'Defense',                value: 0 },
            { name: 'Deflect',                value: 0 },
            { name: 'Regeneration',           value: 0 },
            { name: 'Tenacity (PVP)',         value: 0 },
            { name: 'Stamina Gain',           value: 0 },
            { name: 'Incoming Healing Bonus', value: 0 },
            { name: 'AoE Resist',             value: 0 },
            { name: 'Control Resist',         value: 0 },
            { name: 'Movement',               value: 0 },
            { name: 'Companion Influence',    value: 0 },
            { name: 'Gold Gain',              value: 0 }
        ];

        $scope.charStatOffensive = [
            { name: 'Attack/Healing',          value: 0  },
            { name: 'Critical Chance',         value: 0  },
            { name: 'Critical Severity',       value: 75 },
            { name: 'Recharge Speed Increase', value: 0  },
            { name: 'Action Point Gain',       value: 0  }
        ];

        $scope.charStatDefensive = [
            { name: 'Protection',                  value: 0  },
            { name: 'Damage Resistance',           value: 0  },
            { name: 'Deflection Chance',           value: 0  },
            { name: 'Deflection Severity',         value: 50 },
            { name: 'Health Regeneration',         value: 0  },
            { name: 'Damage Gained as Hit Points', value: 0  }
        ];

        $scope.charStatPVP = [
            { name: 'Damage Resistance',          value: 10 },
            { name: 'Critical Strike Resistance', value: 10 },
            { name: 'Control Resistance',         value: 10 }
        ];

        $scope.charStatUtility = [
            { name: 'XP Bonus',        value: 0 },
            { name: 'Gold Bonus',      value: 0 },
            { name: 'Glory Bonus',     value: 0 },
            { name: 'Run Speed Bonus', value: 0 }
        ];

        // ====================
        // Equipments
        $scope.charEquipHead = {
            name: '',
            enchantment: '',
            overload: '',
            reinforcement: ''
        };

        $scope.charEquipArmor = {
            name: '',
            enchantment: '',
            enhancement: '',
            reinforcement: ''
        };

        $scope.charEquipArms = {
            name: '',
            enchantment: '',
            overload: '',
            reinforcement: ''
        };

        $scope.charEquipMainHand = {
            name: '',
            enchantment1: '',
            enchantment2: '',
            enhancement: '',
            rank: 1
        };

        $scope.charEquipOffHand = {
            name: '',
            enchantment: ''
        };

        $scope.charEquipFeet = {
            name: '',
            enchantment: '',
            reinforcement: ''
        };

        $scope.charEquipNeck = {
            name: '',
            enchantment: ''
        };

        $scope.charEquipRingRight = {
            name: '',
            enchantment: ''
        };

        $scope.charEquipRingLeft = {
            name: '',
            enchantment: ''
        };

        $scope.charEquipBelt = {
            name: '',
            enchantment1: '',
            enchantment2: '',
            rank: 1
        };

        $scope.charEquipShirt = {
            name: '',
            enchantment: ''
        };

        $scope.charEquipPants = {
            name: '',
            enchantment: ''
        };

        $scope.charEquipArtifactPrimary = {
            name: '',
            rank: 1
        };

        $scope.charEquipArtifactSecondary1 = {
            name: '',
            rank: 1
        };

        $scope.charEquipArtifactSecondary2 = {
            name: '',
            rank: 1
        };
    });
});
