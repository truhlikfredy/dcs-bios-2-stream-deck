const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'arbis',
    buttons : [
        {   
            text: '<- Back',
            goToPage: 'default',
        },
        {   
            type: buttonLogic.types.textToggle,
            defaultStatus: 0,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['Off', 'On'],
            apiSend: 'ABRIS_POWER',
        },
        {},     
        {   
            type: buttonLogic.types.textToggle,
            defaultStatus: 0,
            scheme: buttonLogic.colorScheme.rotary,
            increment: -4091,
            maxStatus: 65535,
            overflow: false,
            text: '-\nBright',
            apiSend: 'ABRIS_BRIGHTNESS',
            dynamicState: true,
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.rotary,
            increment: +4091,
            maxStatus: 65535,
            overflow: false,
            text: '+\nBright',
            apiSend: 'ABRIS_BRIGHTNESS',
            dynamicState: true,
        },

        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            sendState: false,
            text: '^\n1',
            apiSend: 'ABRIS_BTN_1',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            sendState: false,
            text: '^\n2',
            apiSend: 'ABRIS_BTN_2',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            sendState: false,
            text: '^\n3',
            apiSend: 'ABRIS_BTN_3',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            sendState: false,
            text: '^\n4',
            apiSend: 'ABRIS_BTN_4',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            sendState: false,
            text: '^\n5',
            apiSend: 'ABRIS_BTN_5',
        },


        {},     
        {},     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.rotary,
            increment: -16091,
            sendState: false,
            maxStatus: 65535,
            overflow: true,
            text: '-\nCursor',
            apiSend: 'ABRIS_CURSOR_ROT',
            dynamicState: true,
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.rotary,
            text: 'Button\nCursor',
            increment: 0,
            apiSend: 'ABRIS_CURSOR_BTN',
            apiGet: 'ABRIS_CURSOR_ROT',
            sendState: false,
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.rotary,
            increment: +16091,
            sendState: false,
            overflow: true,
            maxStatus: 65535,
            text: '+\nCursor',
            apiSend: 'ABRIS_CURSOR_ROT',
            dynamicState: true,
        },
    ]
}