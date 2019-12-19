const buttonLogic = require('./buttonLogic.js')

buttonsDefault = [
    {   
        type: buttonLogic.types.textToggle,
        defaultStatus: 0,
        scheme: buttonLogic.colorScheme.blackButton,
        nameId: 'arbis',
        text: 'ARBIS',
        goTo: 'arbis',
    },
    {   
        type: buttonLogic.types.textToggle,
        defaultStatus: 0,
        scheme: buttonLogic.colorScheme.blackButton,
        nameId: 'ap',
        text: 'AP',
        goTo: 'ap',
    },
]


buttonsArbis = [
    {   
        type: buttonLogic.types.textToggle,
        defaultStatus: 0,
        scheme: buttonLogic.colorScheme.blackButton,
        nameId: 'back',
        text: '<- Back',
        goTo: 'default',
    },
    {   
        type: buttonLogic.types.none,
    },
    {   
        type: buttonLogic.types.textToggle,
        defaultStatus: 0,
        scheme: buttonLogic.colorScheme.switch,
        nameId: 'pwr',
        inversed: true,
        text: ['Off', 'On'],
        apiSend: 'ABRIS_POWER',
        apiGet: 'ABRIS_POWER',
        
    },
    {   
        type: buttonLogic.types.textToggle,
        defaultStatus: 0,
        scheme: buttonLogic.colorScheme.switch,
        nameId: 'pwr',
        inversed: true,
        text: ['Off', 'On'],
        apiSend: 'ABRIS_BRIGHTNESS',
        apiGet: 'ABRIS_BRIGHTNESS',
        
    },
    {   
        type: buttonLogic.types.none,
    },
    {   
        type: buttonLogic.types.textToggle,
        defaultStatus: 0,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '1',
        text: '1',
        apiSend: 'ABRIS_BTN_1',
        apiGet: 'ABRIS_BTN_1',
    },
    {   
        type: buttonLogic.types.textToggle,
        defaultStatus: 0,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '2',
        text: '2',
        apiSend: 'ABRIS_BTN_2',
        apiGet: 'ABRIS_BTN_2',
    },
    {   
        type: buttonLogic.types.textToggle,
        defaultStatus: 0,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '3',
        text: '3',
        apiSend: 'ABRIS_BTN_3',
        apiGet: 'ABRIS_BTN_3',
    },
    {   
        type: buttonLogic.types.textToggle,
        defaultStatus: 0,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '4',
        text: '4',
        apiSend: 'ABRIS_BTN_4',
        apiGet: 'ABRIS_BTN_4',
    },
    {   
        type: buttonLogic.types.textToggle,
        defaultStatus: 0,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '5',
        text: '5',
        apiSend: 'ABRIS_BTN_5',
        apiGet: 'ABRIS_BTN_5',
    },
]


buttonsAp = [
    {   
        type: buttonLogic.types.textToggle,
        defaultStatus: 0,
        scheme: buttonLogic.colorScheme.blackButton,
        nameId: 'back',
        text: '<- Back',
        goTo: 'default',
    },
    {   
        type: buttonLogic.types.none,
    },
    {   
        type: buttonLogic.types.none,
    },
    {   
        type: buttonLogic.types.none,
    },
    {   
        type: buttonLogic.types.none,
    },
    {   
        type: buttonLogic.types.textToggle,
        defaultStatus: 0,
        scheme: buttonLogic.colorScheme.blueButton,
        sendState: false,
        nameId: 'bank',
        text: 'BANK\nHOLD',
        apiSend: 'AP_BANK_HOLD_BTN',
        apiGet: 'AP_BANK_HOLD_LED',
    },
    {   
        type: buttonLogic.types.textToggle,
        defaultStatus: 0,
        scheme: buttonLogic.colorScheme.blueButton,
        sendState: false,
        nameId: 'pitch',
        text: 'PITCH\nHOLD',
        apiSend: 'AP_PITCH_HOLD_BTN',
        apiGet: 'AP_PITCH_HOLD_LED',
    },
    {   
        type: buttonLogic.types.none,
    },
    {   
        type: buttonLogic.types.textToggle,
        defaultStatus: 0,
        scheme: buttonLogic.colorScheme.blueButton,
        sendState: false,
        nameId: 'fd',
        text: 'FD\nAP',
        apiSend: 'AP_FD_BTN',
        apiGet: 'AP_FD_LED',
    },
    {   
        type: buttonLogic.types.none,
    },
    {   
        type: buttonLogic.types.textToggle,
        defaultStatus: 0,
        scheme: buttonLogic.colorScheme.blueButton,
        sendState: false,
        nameId: 'hdg',
        text: 'HDG\nHOLD',
        apiSend: 'AP_HDG_HOLD_BTN',
        apiGet: 'AP_HDG_HOLD_LED',
    },
    {   
        type: buttonLogic.types.textToggle,
        defaultStatus: 0,
        scheme: buttonLogic.colorScheme.blueButton,
        sendState: false,
        nameId: 'alt',
        text: 'ALT\nHOLD',
        apiSend: 'AP_ALT_HOLD_BTN',        
        apiGet: 'AP_ALT_HOLD_LED',
    },
    {   
        type: buttonLogic.types.textToggle,
        defaultStatus: 0,
        maxStatus: 2,
        scheme: buttonLogic.colorScheme.switch,
        nameId: 'altMode',
        fontIndex: 4, 
        text: ['BR', '--', 'RD'],
        apiSend: 'AP_BARO_RALT',
        apiGet: 'AP_BARO_RALT',
    },
    {   
        type: buttonLogic.types.textToggle,
        defaultStatus: 0,
        maxStatus: 2,
        scheme: buttonLogic.colorScheme.switch,
        nameId: 'hdgMode',
        fontIndex: 4, 
        text: ['DH', '--', 'DT'],
        apiSend: 'AP_DH_DT',
        apiGet: 'AP_DH_DT',
    },
]


module.exports = {
    name: "ka-50",
    namespaces: [
        { name:'default', buttons: buttonsDefault},
        { name:'arbis',   buttons: buttonsArbis},
        { name:'ap',      buttons: buttonsAp},
    ]
}

