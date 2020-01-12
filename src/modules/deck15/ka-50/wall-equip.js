const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'wall-equip',
    buttons : [
        {   
            text: '<- Back',
            goToPage: 'wall',
        },  
        {   
            text: 'Fuel\nValve',
            goToPage: 'wall-fuel-valve',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            nameId: 'hydrcover',
            text: 'Cover\nv',
            apiSend: 'HYD_POWER_COVER',
        },  
        {},     
        {   
            text: 'Govern',
            goToPage: 'wall-governors',
        },

        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            nameId: 'weaponCover',
            text: 'Cover\nv',
            apiSend: 'WEAPONS_POWER_COVER',
        },            
        {},     
        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['HydPwr', 'OFF'],
            apiSend: 'HYD_POWER',
        },        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'TgrNav'],
            apiSend: 'NAV_POWER',
        },        
        {   
            text: 'Lights',
            goToPage: 'wall-lights',
        },  

        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'Wep-PWR'],
            apiSend: 'WEAPONS_POWER',
        },      
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', '!ColBeac'],
            apiSend: 'LIGHT_BEACON',
        },       
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: false,
            text: ['Magne', 'FliGyro', 'Manual'],
            apiSend: 'NAV_GYRO_MAG_MAN_HDG',
        },       
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'SAI'],
            apiSend: 'SAI_POWER',
        },        
        {   
            text: 'AUX\ntop',
            goToPage: 'aux-top',
        },  
    ]
}
