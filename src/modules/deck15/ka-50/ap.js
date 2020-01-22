const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'ap',
    buttons : [
        {   
            text: '<- Back',
            goToPage: 'default',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.redButton,
            sendState: false,
            text: 'LWR\nRESET',
            apiSend: 'LWR_RESET',
            apiGet: 'LWR_RESET',
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
            scheme: buttonLogic.colorScheme.greenStripeButton,
            sendState: false,
            text: 'Auto\nTurn',
            maxStatus: 0,
            apiSend: 'WEAPONS_AUTO_TURN_BTN',
            apiGet: 'WEAPONS_AUTO_TURN_LED',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.redButton,
            sendState: false,
            text: 'MASTER\nCAUTION',
            apiSend: 'SC_MASTER_CAUTION_BTN',
            apiGet: 'SC_MASTER_CAUTION_LED',
        },


        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blueButton,
            sendState: false,
            text: 'BANK\nHOLD',
            apiSend: 'AP_BANK_HOLD_BTN',
            apiGet: 'AP_BANK_HOLD_LED',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blueButton,
            sendState: false,
            text: 'PITCH\nHOLD',
            apiSend: 'AP_PITCH_HOLD_BTN',
            apiGet: 'AP_PITCH_HOLD_LED',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.yellowButton,
            sendState: false,
            maxStatus: 0,
            text: 'R RPM',
            apiSend: 'SC_ROTOR_RPM_BTN',
            apiGet: 'SC_ROTOR_RPM_LED',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blueButton,
            sendState: false,
            text: 'FD\nAP',
            apiSend: 'AP_FD_BTN',
            apiGet: 'AP_FD_LED',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenStripeButton,
            sendState: false,
            text: 'Weap\nReset',
            maxStatus: 0,
            apiSend: 'WEAPONS_TARGET_RESET_BTN',
            apiGet: 'WEAPONS_TARGET_RESET_LED',
        },    


        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blueButton,
            sendState: false,
            text: 'HDG\nHOLD',
            apiSend: 'AP_HDG_HOLD_BTN',
            apiGet: 'AP_HDG_HOLD_LED',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blueButton,
            sendState: false,
            text: 'ALT\nHOLD',
            apiSend: 'AP_ALT_HOLD_BTN',        
            apiGet: 'AP_ALT_HOLD_LED',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            text: ['BR', '', 'RD'],
            apiSend: 'AP_BARO_RALT',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            text: ['DH', '', 'DT'],
            apiSend: 'AP_DH_DT',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.redButton,
            sendState: false,
            text: 'Counter\nStart',
            apiSend: 'UV26_START',
        },    
    ]
}