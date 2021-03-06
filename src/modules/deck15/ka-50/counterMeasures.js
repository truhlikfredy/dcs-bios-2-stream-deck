const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'counterMeasures',
    buttons : [
        {   
            text: '<- Back',
            goToPage: 'default',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.redButton,
            sendState: false,
            text: '<-',
            apiGet: 'UV26_L_DISPENSER',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blueButton,
            sendState: false,
            text: 'Seq Series\n0 = inf\n5 = 12\n7 = 15',
            apiSend: 'UV26_SERIES',
        },      
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blueButton,
            sendState: false,
            text: 'Interval (s)\n0 = 0.125\n7 = 0.25\n9 = 0.5',
            apiSend: 'UV26_INTERVAL',
        },      
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.redButton,
            sendState: false,
            text: '->',
            apiGet: 'UV26_R_DISPENSER',
        },   
        
        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.green7seg,
            sendState: false,
            nameId: 'counterDisplay',
            apiGet: 'UV26_DISPLAY',
            dynamicState: true,
        },     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['<-', 'Both', '->'],
            apiSend: 'UV26_DISPENSERS_SELECTOR',
        }, 
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blueButton,
            sendState: false,
            text: 'Burst\nin 1 seq',
            apiSend: 'UV26_BURST',
        },      
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blueButton,
            sendState: false,
            text: 'Reset',
            apiSend: 'UV26_RESET',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['Count', 'Prog'],
            apiSend: 'UV26_MODE',
        },   
        
        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.redButton,
            sendState: false,
            text: 'LWR\nRESET',
            apiSend: 'LWR_RESET',
            apiGet: 'LWR_RESET',
        },    
        {},     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenButton,
            sendState: false,
            text: 'Stop',
            apiSend: 'UV26_STOP',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.redButton,
            sendState: false,
            text: 'Start',
            apiSend: 'UV26_START',
        },    
    ]
}