const buttonLogic = require('./buttonLogic.js')

buttonsDefault = [
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.blackButton,
        nameId: 'weapons',
        text: 'Weap',
        goTo: 'weapons',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.blackButton,
        nameId: 'arbis',
        text: 'ARBIS',
        goTo: 'arbis',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.blackButton,
        nameId: 'ap',
        text: 'AP',
        goTo: 'ap',
    },
]


buttonWeapons = [
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.blackButton,
        nameId: 'back',
        text: '<- Back',
        goTo: 'default',
    },       
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.switch,
        nameId: 'masterArm',
        inversed: true,
        text: ['Moff', 'MArm'],
        apiSend: 'WEAPONS_MASTER_ARM',
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
        type: buttonLogic.types.none,
    },       
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: 'jetExt',
        text: 'Jet\nExt',
        apiSend: 'WEAPONS_JETTISON_EXT',
        sendState: false,
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.switch,
        nameId: 'jetArm',
        inversed: true,
        text: ['Joff', 'JArm'],
        apiSend: 'WEAPONS_JETTISON_ARM_MODE',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: 'jetAtgm',
        text: 'Jet\nATGM',
        apiSend: 'WEAPONS_EXPEDITE_ATGM_JETTISON',
        sendState: false,
    },
    {   
        type: buttonLogic.types.none,
    },    
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.switch,
        nameId: 'cAutoMan',
        inversed: true,
        text: ['Auto', 'Manual'],
        apiSend: 'WEAPONS_MANUAL_AUTO',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.switch,
        nameId: 'cBurst',
        fontIndex: 5,
        maxStatus: 2,
        inversed: true,
        text: ['low', 'med', 'long'],
        apiSend: 'WEAPONS_CANNON_BURST',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.switch,
        nameId: 'cHe',
        inversed: true,
        text: ['AP', 'HE'],
        apiSend: 'WEAPONS_CANNON_ROUND',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.switch,
        nameId: 'cRate',
        inversed: true,
        text: ['High', 'Low'],
        apiSend: 'WEAPONS_CANNON_RATE',
    },

]

buttonsArbis = [
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.blackButton,
        nameId: 'back',
        text: '<- Back',
        goTo: 'default',
    },
    {   
        type: buttonLogic.types.textToggle,
        defaultStatus: 0,
        scheme: buttonLogic.colorScheme.switch,
        nameId: 'pwr',
        inversed: true,
        text: ['Off', 'On'],
        apiSend: 'ABRIS_POWER',
    },
    {   
        type: buttonLogic.types.none,
    },
    {   
        type: buttonLogic.types.textToggle,
        defaultStatus: 0,
        scheme: buttonLogic.colorScheme.grayButton,
        nameId: 'bright-',
        increment: -4095,
        maxStatus: 65535,
        overflow: false,
        text: 'BR\n-',
        apiSend: 'ABRIS_BRIGHTNESS',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        nameId: 'bright+',
        increment: +4095,
        maxStatus: 65535,
        overflow: false,
        text: 'BR\n+',
        apiSend: 'ABRIS_BRIGHTNESS',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '1',
        text: '1',
        apiSend: 'ABRIS_BTN_1',
        sendState: false,
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '2',
        text: '2',
        apiSend: 'ABRIS_BTN_2',
        sendState: false,
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '3',
        text: '3',
        apiSend: 'ABRIS_BTN_3',
        sendState: false,
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '4',
        text: '4',
        apiSend: 'ABRIS_BTN_4',
        sendState: false,
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '5',
        text: '5',
        apiSend: 'ABRIS_BTN_5',
        sendState: false,
    },

    {   
        type: buttonLogic.types.none,
    },
    {   
        type: buttonLogic.types.none,
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        nameId: 'cur-',
        increment: -4095,
        sendState: false,
        maxStatus: 65535,
        overflow: true,
        text: 'Cur\n-',
        apiSend: 'ABRIS_CURSOR_ROT',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        nameId: 'curBtn',
        text: 'Cur\nBTN',
        apiSend: 'ABRIS_CURSOR_BTN',
        sendState: false,
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        nameId: 'cur+',
        increment: +4095,
        sendState: false,
        overflow: true,
        maxStatus: 65535,
        text: 'Cur\n+',
        apiSend: 'ABRIS_CURSOR_ROT',
    },
    
]


buttonsAp = [
    {   
        type: buttonLogic.types.textToggle,
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
        scheme: buttonLogic.colorScheme.blueButton,
        sendState: false,
        nameId: 'bank',
        text: 'BANK\nHOLD',
        apiSend: 'AP_BANK_HOLD_BTN',
        apiGet: 'AP_BANK_HOLD_LED',
    },
    {   
        type: buttonLogic.types.textToggle,
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
        scheme: buttonLogic.colorScheme.blueButton,
        sendState: false,
        nameId: 'hdg',
        text: 'HDG\nHOLD',
        apiSend: 'AP_HDG_HOLD_BTN',
        apiGet: 'AP_HDG_HOLD_LED',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.blueButton,
        sendState: false,
        nameId: 'alt',
        text: 'ALT\nHOLD',
        apiSend: 'AP_ALT_HOLD_BTN',        
        apiGet: 'AP_ALT_HOLD_LED',
    },
    {   
        type: buttonLogic.types.textToggle,
        maxStatus: 2,
        scheme: buttonLogic.colorScheme.switch,
        nameId: 'altMode',
        fontIndex: 4, 
        text: ['BR', '--', 'RD'],
        apiSend: 'AP_BARO_RALT',
    },
    {   
        type: buttonLogic.types.textToggle,
        maxStatus: 2,
        scheme: buttonLogic.colorScheme.switch,
        nameId: 'hdgMode',
        fontIndex: 4, 
        text: ['DH', '--', 'DT'],
        apiSend: 'AP_DH_DT',
    },
]


module.exports = {
    name: "ka-50",
    namespaces: [
        { name:'default', buttons: buttonsDefault},
        { name:'weapons', buttons: buttonWeapons},
        { name:'arbis',   buttons: buttonsArbis},
        { name:'ap',      buttons: buttonsAp},
    ]
}
