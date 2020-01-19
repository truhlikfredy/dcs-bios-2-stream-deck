const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'pvi800-control',
    buttons : [
        {   
            text: '<- Back',
            goToPage: 'pvi800',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            sendState: false,
            stateToText: (state) => Math.abs(Math.ceil(((state - 32767.5)+65535)%65535 / 1820.4166))%36,
            nameId: 'mag10',
            text: 'n/a',
            apiGet: 'ZMS3_MAGVAR_CNT_100_10',
            dynamicState: true,
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            sendState: false,
            stateToText: (state) => Math.round(state / 655.35)/10 + 'deg',
            nameId: 'mag',
            text: 'n/a',
            apiGet: 'ZMS3_MAGVAR_CNT_1',
            dynamicState: true,
        },
        {   
            type: buttonLogic.types.textToggle,
            defaultStatus: 0,
            scheme: buttonLogic.colorScheme.rotary,
            increment: -4095,
            sendState: false,
            text: '-\nMagne',
            apiSend: 'ZMS3_MAGVAR_SELECTOR',
            dynamicState: true,
        },
        {   
            type: buttonLogic.types.textToggle,
            defaultStatus: 0,
            scheme: buttonLogic.colorScheme.rotary,
            increment: +4095,
            sendState: false,
            maxStatus: 65535,
            overflow: true,
            text: '+\nMagne',
            apiSend: 'ZMS3_MAGVAR_SELECTOR',
            dynamicState: true,
        },

        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'CHECK', 'EDIT', 'OPER', 'SIM'],
            apiSend: 'PVI_MODES',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['UPDATE', 'INU'],
            apiSend: 'PVI_INU_FIX',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'ON'],
            apiSend: 'PVI_POWER',
        },
        {   
            type: buttonLogic.types.textToggle,
            defaultStatus: 0,
            scheme: buttonLogic.colorScheme.rotary,
            increment: -4095,
            maxStatus: 65535,
            overflow: false,
            text: '-\nBright',
            apiSend: 'PVI_BRIGHTNESS',
            dynamicState: true,
        },
        {   
            type: buttonLogic.types.textToggle,
            defaultStatus: 0,
            scheme: buttonLogic.colorScheme.rotary,
            increment: +4095,
            maxStatus: 65535,
            overflow: false,
            text: '+\nBright',
            apiSend: 'PVI_BRIGHTNESS',
            dynamicState: true,
        },    


        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            text: ['1', '2', '3', '4'],
            apiSend: 'DLNK_SELF_ID',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            text: ['OFF', 'Rx-Only', 'Wingman', 'CMDR'],
            apiSend: 'DLNK_MASTER_MODE',
        },
        {   
            type: buttonLogic.types.textToggle,
            defaultStatus: 0,
            scheme: buttonLogic.colorScheme.rotary,
            increment: -1,
            maxStatus: 7,
            overflow: false,
            text: '-\nScan RT',
            apiSend: 'SHKVAL_OPTICS_SCAN_RATE',
            repeatRate: 200,
            dynamicState: true,
        },
        {   
            type: buttonLogic.types.textToggle,
            defaultStatus: 0,
            scheme: buttonLogic.colorScheme.rotary,
            increment: 1,
            maxStatus: 7,
            overflow: false,
            text: '+\nScan RT',
            apiSend: 'SHKVAL_OPTICS_SCAN_RATE',
            repeatRate: 200,
            dynamicState: true,
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            text: ['North', 'South'],
            apiSend: 'PSHK7_NORTH_SOUTH',
        },           
        
    ]

}