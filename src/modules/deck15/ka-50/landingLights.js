const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'landingLights',
    buttons : [
        {   
            text: '<- Back',
            goToPage: 'hud-tv',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['Retract', 'Off', 'Extend'],
            apiSend: 'LIGHT_LANDING_ON_RETR_OFF',
        },      
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            text: ['Main', 'Back'],
            apiSend: 'LIGHT_LANDING_MAIN_BACKUP',
        },      
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['Outer', 'Auto*', 'Inner'],
            apiSend: 'ADF_NDB_MODE',
        },      
        {},     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: 'VMU\ncease',
            apiSend: 'VOICE_MSG_OFF',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: 'VMU\nrepeat',
            apiSend: 'VOICE_MSG_REPEAT',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['Emerg', 'Norm'],
            apiSend: 'VOICE_MSG_EMER',
        },      
    ]
}