const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'wall-electrical',
    buttons : [
        {   
            text: '<- Back',
            goToPage: 'wall',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            nameId: 'grndcover',
            text: 'Cover\nv',
            apiSend: 'ELEC_DC_GROUND_POWER_COVER',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            nameId: 'bat2cover',
            text: 'Cover\nv',
            apiSend: 'ELEC_BATTERY_2_COVER',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            nameId: 'bat1cover',
            text: 'Cover\nv',
            apiSend: 'ELEC_BATTERY_1_COVER',
        },   
        {   
            text: 'Fuel\nPumps',
            goToPage: 'wall-fuel-pumps',
        },
    

        {},     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            dependsOnButtonIdState: 1,
            text: ['OFF', 'GND-DC'],
            apiSend: 'ELEC_DC_GROUND_POWER',
        },     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            dependsOnButtonIdState: 2,
            text: ['OFF', 'BAT2'],
            apiSend: 'ELEC_BATTERY_2',
        },     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            dependsOnButtonIdState: 3,
            text: ['OFF', 'BAT1'],
            apiSend: 'ELEC_BATTERY_1',
        },      
        {},   
        
        
        {   
            text: 'Radio',
            goToPage: 'wall-radio',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'GND-AC'],
            apiSend: 'ELEC_AC_GROUND_POWER',
        },      
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'LEFT-AC'],
            apiSend: 'ELEC_AC_L_GEN',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'RIGHT-AC'],
            apiSend: 'ELEC_AC_R_GEN',
        },          
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['Manual', 'OFF', 'Inverter'],
            apiSend: 'ELEC_DC_AC',
        },       
    ]
}