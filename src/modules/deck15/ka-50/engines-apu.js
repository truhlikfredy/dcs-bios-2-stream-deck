const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'engines-apu',
    buttons : [
        {   
            text: '<- Back',
            goToPage: 'default',
        }, 
        {},     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            maxStatus: 0,
            text: 'Start',
            apiSend: 'ENG_START',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            maxStatus: 0,
            text: 'Start\nAbort',
            apiSend: 'ENG_STOP',
        },            
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            maxStatus: 0,
            text: 'APU\nSTOP',
            apiSend: 'ENG_APU_STOP',
        },   


        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenButton,
            sendState: false,
            text: 'Fuel\nOpen',
            apiGet: 'APU_FUEL_VLV_OPEN',
        }, 
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenButton,
            sendState: false,
            text: 'Oil\nPresure',
            apiGet: 'APU_OIL_PRESS',
        }, 
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.yellowButton,
            sendState: false,
            text: 'Valve\nOpen',
            apiGet: 'ENG_START_VLV_OPEN',
        }, 
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            text: ['Startup', 'Crank', 'FalseS'],
            apiSend: 'ENG_STARTUP_MODE',
        },                
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            switchSelector: false,
            inversed: true,
            text: ['APU', 'Left ENG', 'Right ENG', 'Turbo Gear'],
            states: ["8", "3", "1", "5"],            
            apiSend: 'ENG_SELECTOR',
        },       
        
        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenButton,
            sendState: false,
            text: 'RPM\nAbort',
            apiGet: 'APU_STOP_RPM',
        },  
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenButton,
            sendState: false,
            text: 'Started',
            apiGet: 'APU_OPER',
        },     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            sendState: false,
            nameId: 'apuTemp',
            stateToText: (state) => Math.round(state / 72.81667) + 'C',
            text: 'n/a',
            apiGet: 'APU_TEMP',
            dynamicState: true,
        },       
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            sendState: false,
            nameId: 'leftEngineRPM',
            stateToText: (state) => Math.round(state / 600) + '%',
            text: 'n/a',
            apiGet: 'ENG_L_RPM',
            dynamicState: true,
        },          
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            sendState: false,
            nameId: 'rightEngineRPM',
            stateToText: (state) => Math.round(state / 600) + '%',
            text: 'n/a',
            apiGet: 'ENG_R_RPM',
            dynamicState: true,
        },          
    ]
}