const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'pvi800',
    buttons : [
        {   
            text: '<- Back',
            goToPage: 'default',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: '-\n1',
            apiSend: 'PVI_1',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: '2',
            apiSend: 'PVI_2',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: '3',
            apiSend: 'PVI_3',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.yellowStripeButton,
            text: 'Reset',
            maxStatus: 0,
            apiSend: 'PVI_RESET_BTN',
            apiGet: 'PVI_RESET_LED',
            sendState: false,
        },
        {   
            text: 'PVI800\nfunc',
            goToPage: 'pvi800-functions',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: '4',
            apiSend: 'PVI_4',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: '5',
            apiSend: 'PVI_5',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: '6',
            apiSend: 'PVI_6',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: '+\n0',
            apiSend: 'PVI_0',
        },
        {   
            text: 'PVI800\nPVTz-800',
            goToPage: 'pvi800-control',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: '7',
            apiSend: 'PVI_7',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: '8',
            apiSend: 'PVI_8',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: '9',
            apiSend: 'PVI_9',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.yellowStripeButton,
            text: 'Enter',
            maxStatus: 0,
            apiSend: 'PVI_ENTER_BTN',
            apiGet: 'PVI_ENTER_LED',
            sendState: false,
        },    
    ]
}