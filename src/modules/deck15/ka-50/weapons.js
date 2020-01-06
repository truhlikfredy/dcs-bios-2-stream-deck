const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'weapons',
    buttons : [        
        {   
            text: '<- Back',
            goToPage: 'default',
        },       
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['Moff', 'MArm'],
            apiSend: 'WEAPONS_MASTER_ARM',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.green7seg,
            sendState: false,
            nameId: 'wepType',
            apiGet: 'WEAPONS_DISPLAY_STORE_TYPE',
            dynamicState: true,
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.green7seg,
            sendState: false,
            nameId: 'wepRem',
            apiGet: 'WEAPONS_DISPLAY_WEAPON_REMAIN',
            dynamicState: true,
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.green7seg,
            sendState: false,
            nameId: 'ammoRem',
            apiGet: 'WEAPONS_DISPLAY_CANNON_REMAIN',
            dynamicState: true,
        },
        {},     
        {},     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: 'Jet\nExt',
            apiSend: 'WEAPONS_JETTISON_EXT',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['Joff', 'JArm'],
            apiSend: 'WEAPONS_JETTISON_ARM_MODE',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: 'Jet\nATGM',
            apiSend: 'WEAPONS_EXPEDITE_ATGM_JETTISON',
        },
        {},     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['Auto', 'Manual'],
            apiSend: 'WEAPONS_MANUAL_AUTO',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            fontIndex: 5,
            inversed: true,
            text: ['low', 'med', 'long'],
            apiSend: 'WEAPONS_CANNON_BURST',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['AP', 'HE'],
            apiSend: 'WEAPONS_CANNON_ROUND',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['High', 'Low'],
            apiSend: 'WEAPONS_CANNON_RATE',
        },

    ]
}