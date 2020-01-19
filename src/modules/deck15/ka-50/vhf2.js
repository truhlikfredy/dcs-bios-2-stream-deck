const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'vhf2',
    buttons: [
        {   
            text: '<- Back',
            goToPage: 'default',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['FM', 'AM'],
            apiSend: 'R800_AM_FM',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.yellowButton,
            text: 'BIT\nPASS',
            maxStatus: 0,
            apiGet: 'R800_TEST_LAMP',
            sendState: false,
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['50', '100'],
            apiSend: 'R800_DATA_TRANSFER_RATE',
        },       
        {},     
        

        {},     
        {},     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            text: 'BIT',
            maxStatus: 0,
            apiSend: 'R800_TEST_BTN',
            sendState: false,
        },                  
        {},     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['VHF-2', 'VHF-1', 'SW', 'G-InterC'],
            apiSend: 'RADIO_SELECTOR',
        },     
        
        
        {   
            text: 'VHF2\nFreq',
            goToPage: 'vhf2-freq',
        },  
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['Norm', 'E121.5'],
            apiSend: 'R800_EMER_RCVR',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['Off', 'ADF'],
            apiSend: 'R800_ADF',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['Off', 'NRedu'],
            apiSend: 'R800_SQUELCH',
        },       
    ]
}