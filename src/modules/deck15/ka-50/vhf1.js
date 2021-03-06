const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'vhf1',
    buttons : [
        {   
            text: '<- Back',
            goToPage: 'default',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            sendState: false,
            stateToText: (state) => state+1 + '\nchan',
            nameId: 'channel',
            text: 'n/a',
            apiGet: 'R828_CHANNEL',
            dynamicState: true,
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.rotary,
            increment: -1,
            overflow: true,
            maxStatus: 9,
            text: '-\nChannel',
            apiSend: 'R828_CHANNEL',
            repeatRate: 400,
            dynamicState: true,
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.rotary,
            overflow: true,
            maxStatus: 9,
            text: '+\nChannel',
            apiSend: 'R828_CHANNEL',
            repeatRate: 400,
            dynamicState: true,
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: 'Auto\ntune',
            apiSend: 'R828_TUNER',
        },    

        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.yellowButton,
            sendState: false,
            text: 'Tuning',
            apiGet: 'R828_TUNER_LAMP',
        },  
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['Off', 'NRedu'],
            apiSend: 'R828_SQUELCH',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.rotary,
            overflow: false,
            increment: -4095,
            maxStatus: 655535,
            text: '-\nVolume',
            apiSend: 'R828_VOLUME',
            dynamicState: true,
        },         
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.rotary,
            overflow: false,
            increment: 4095,
            maxStatus: 655535,
            text: '+\nVolume',
            apiSend: 'R828_VOLUME',
            dynamicState: true,
        },                      
    ]
}