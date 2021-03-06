const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'targeting',
    buttons: [
        {   
            text: '<- Back',
            goToPage: 'default',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'Train'],
            apiSend: 'WEAPONS_TRAINING_MODE',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenStripeButton,
            sendState: false,
            text: 'Auto\nTurn',
            maxStatus: 0,
            apiSend: 'WEAPONS_AUTO_TURN_BTN',
            apiGet: 'WEAPONS_AUTO_TURN_LED',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenStripeButton,
            sendState: false,
            text: 'Air\nH/O',
            maxStatus: 0,
            apiSend: 'WEAPONS_FORWARD_HEMI_TARGET_BTN',
            apiGet: 'WEAPONS_FORWARD_HEMI_TARGET_LED',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            text: ['Movable', 'Fixed', 'ManBckp', 'Navigation', 'Failure'],
            apiSend: 'WEAPONS_MODE',
        },
        
        
        {},     
        {},     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenStripeButton,
            sendState: false,
            text: 'Air',
            maxStatus: 0,
            apiSend: 'WEAPONS_AIRBORNE_TARGET_BTN',
            apiGet: 'WEAPONS_AIRBORNE_TARGET_LED',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenStripeButton,
            sendState: false,
            text: 'Mov\nGND',
            maxStatus: 0,
            apiSend: 'WEAPONS_GROUND_TARGET_BTN',
            apiGet: 'WEAPONS_GROUND_TARGET_LED',
        },    
        {},  
        
        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'K041 ON'],
            apiSend: 'K041_POWER',
        },      
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'HMS'],
            apiSend: 'HMS_POWER',
        },                     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['GunSight', 'AutoTrack'],
            apiSend: 'WEAPONS_AUTOTRACK_GUNSIGHT',
        },                     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'Laser'],
            apiSend: 'LASER_STANDBY',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenStripeButton,
            sendState: false,
            text: 'Reset',
            maxStatus: 0,
            apiSend: 'WEAPONS_TARGET_RESET_BTN',
            apiGet: 'WEAPONS_TARGET_RESET_LED',
        },                           
    ]
}