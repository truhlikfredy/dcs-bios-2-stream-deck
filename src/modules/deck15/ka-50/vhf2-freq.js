const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'vhf2-freq',
    buttons : [
        {   
            nameId: 'back',
            text: '<- Back',
            goToPage: 'vhf2',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            sendState: false,
            nameId: 'freq1',
            stateToText: (state) => {
                const ret = Math.floor(state / 10.5653)
                return ret < 5 ? ret + 10 : ret + 17
            },
            apiGet: 'R800_FREQ1_ROT',
            dynamicState: true,
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            sendState: false,
            nameId: 'freq2',
            stateToText: (state) => state + '.',
            apiGet: 'R800_FREQ2',
            dynamicState: true,
        },        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            sendState: false,
            nameId: 'freq3',
            stateToText: (state) => state,        
            apiGet: 'R800_FREQ3',
            dynamicState: true,
        },        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            sendState: false,
            stateToText: (state) => Math.ceil(state / 2.5466667) + ' MHz',
            nameId: 'freq4',
            apiGet: 'R800_FREQ4_ROT',
            dynamicState: true,
        },        

        {   
        },      
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            text: '+\n10',
            sendLiterarly: 'INC',
            maxStatus: 0,
            apiSend: 'R800_FREQ1',
            dynamicState: true,
        },        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            text: '+\n1',
            sendLiterarly: 'INC',
            maxStatus: 0,
            apiSend: 'R800_FREQ2',
            dynamicState: true,
        },        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            text: '+\n0.1',
            sendLiterarly: 'INC',
            apiSend: 'R800_FREQ3',
            dynamicState: true,
        },        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            text: '+\n0.01',
            sendLiterarly: 'INC',
            apiSend: 'R800_FREQ4',
            dynamicState: true,
        },        
        {},     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            text: '-\n10',
            sendLiterarly: 'DEC',
            maxStatus: 0,
            apiSend: 'R800_FREQ1',
            dynamicState: true,
        },        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            text: '-\n1',
            sendLiterarly: 'DEC',
            maxStatus: 0,
            apiSend: 'R800_FREQ2',
            dynamicState: true,
        },        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            text: '-\n0.1',
            sendLiterarly: 'DEC',
            apiSend: 'R800_FREQ3',
            dynamicState: true,
        },        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            text: '-\n0.01',
            sendLiterarly: 'DEC',
            apiSend: 'R800_FREQ4',
            dynamicState: true,
        },            
    ]
}