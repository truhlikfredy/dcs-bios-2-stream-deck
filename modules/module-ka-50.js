const buttonLogic = require('./buttonLogic.js')

buttonsDefault = [
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.blackButton,
        nameId: 'ka-50',
        text: 'KA-50',
    },       
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
        nameId: 'pvi800-1',
        text: 'PVI800',
        goTo: 'pvi800-1',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.blackButton,
        nameId: 'ap',
        text: 'AP',
        goTo: 'ap',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.blackButton,
        nameId: 'flare',
        text: 'Flare',
        goTo: 'flare',
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
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.green7seg,
        sendState: false,
        nameId: 'wepType',
        apiGet: 'WEAPONS_DISPLAY_STORE_TYPE',
        dynamicState: true,
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.green7seg,
        sendState: false,
        nameId: 'wepRem',
        apiGet: 'WEAPONS_DISPLAY_WEAPON_REMAIN',
        dynamicState: true,
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.green7seg,
        sendState: false,
        nameId: 'ammoRem',
        apiGet: 'WEAPONS_DISPLAY_CANNON_REMAIN',
        dynamicState: true,
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


buttonsPvio800_3 = [
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.blackButton,
        nameId: 'back',
        text: '<- Back',
        goTo: 'pvi800-1',
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
        scheme: buttonLogic.colorScheme.switch,
        nameId: 'mode',
        fontIndex: 7,
        maxStatus: 4,
        inversed: true,
        text: ['OFF', 'CHECK', 'EDIT', 'OPER', 'SIM'],
        apiSend: 'PVI_MODES',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.switch,
        nameId: 'inu',
        inversed: true,
        text: ['UPDATE', 'INU'],
        apiSend: 'PVI_INU_FIX',
    },    
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.switch,
        nameId: 'power',
        inversed: true,
        text: ['OFF', 'ON'],
        apiSend: 'PVI_POWER',
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
        apiSend: 'PVI_BRIGHTNESS',
        dynamicState: true,
    },
    {   
        type: buttonLogic.types.textToggle,
        defaultStatus: 0,
        scheme: buttonLogic.colorScheme.grayButton,
        nameId: 'bright+',
        increment: +4095,
        maxStatus: 65535,
        overflow: false,
        text: 'BR\n+',
        apiSend: 'PVI_BRIGHTNESS',
        dynamicState: true,
    },    

    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.switch,
        nameId: 'id',
        maxStatus: 3,
        fontIndex: 7,
        text: ['1', '2', '3', '4'],
        apiSend: 'DLNK_SELF_ID',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.switch,
        nameId: 'masterMode',
        maxStatus: 3,
        text: ['OFF', 'Rx-Only', 'Wingman', 'CMDR'],
        apiSend: 'DLNK_MASTER_MODE',
    },
    
]


buttonsPvio800_2 = [
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.green7seg,
        sendState: false,
        nameId: 'line1',
        apiGet: 'PVI_LINE1_TEXT',
        goTo: 'pvi800-1',
        dynamicState: true,
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.greenStripeButton,
        sendState: false,
        nameId: 'fixPnt',
        text: 'FIX\nPNT',
        maxStatus: 0,
        apiSend: 'PVI_FIXPOINTS_BTN',
        apiGet: 'PVI_FIXPOINTS_LED',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.greenStripeButton,
        sendState: false,
        nameId: 'selfCord',
        text: 'SELF\nCOOR',
        maxStatus: 0,
        apiSend: 'PVI_SELF_COOR_BTN',
        apiGet: 'PVI_SELF_COOR_LED',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.greenStripeButton,
        sendState: false,
        nameId: 'trueHead',
        text: 'T-HEAD\nTIME/DI',
        maxStatus: 0,
        apiSend: 'PVI_THDG_TIME_RANGE_BTN',
        apiGet: 'PVI_THDG_TIME_RANGE_LED',
    },    
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.greenStripeButton,
        sendState: false,
        nameId: 'inuprec',
        text: 'INU\nPREC',
        maxStatus: 0,
        apiSend: 'PVI_INU_PRECISE_ALIGN_BTN',
        apiGet: 'PVI_INU_PRECISE_ALIGN_LED',
    }, 

    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.green7seg,
        sendState: false,
        nameId: 'line2',
        apiGet: 'PVI_LINE2_TEXT',
        dynamicState: true,
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.greenStripeButton,
        sendState: false,
        nameId: 'airfield',
        text: 'AIR\nFIELD',
        maxStatus: 0,
        apiSend: 'PVI_AIRFIELDS_BTN',
        apiGet: 'PVI_AIRFIELDS_LED',
    },    
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.greenStripeButton,
        sendState: false,
        nameId: 'dtaDh',
        text: 'DTA\nDH',
        maxStatus: 0,
        apiSend: 'PVI_DTA_DH_BTN',
        apiGet: 'PVI_DTA_DH_LED',
    },   
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.greenStripeButton,
        sendState: false,
        nameId: 'headra',
        text: 'HEAD/RA\nTGT PNT',
        maxStatus: 0,
        apiSend: 'PVI_BEARING_RANGE_BTN',
        apiGet: 'PVI_BEARING_RANGE_LED',
    },             
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.greenStripeButton,
        sendState: false,
        nameId: 'inunorm',
        text: 'INU\nNORM',
        maxStatus: 0,
        apiSend: 'PVI_INU_NORMAL_ALIGN_BTN',
        apiGet: 'PVI_INU_NORMAL_ALIGN_LED',
    },    

    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.greenStripeButton,
        sendState: false,
        nameId: 'wpt',
        text: 'WPT',
        maxStatus: 0,
        apiSend: 'PVI_WAYPOINTS_BTN',
        apiGet: 'PVI_WAYPOINTS_LED',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.greenStripeButton,
        sendState: false,
        nameId: 'navTarget',
        text: 'NAV\nTGT',
        maxStatus: 0,
        apiSend: 'PVI_TARGETS_BTN',
        apiGet: 'PVI_TARGETS_LED',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.greenStripeButton,
        sendState: false,
        nameId: 'windSpeedHead',
        text: 'WIND\nDI/SP',
        maxStatus: 0,
        apiSend: 'PVI_WIND_HDG_SPEED_BTN',
        apiGet: 'PVI_WIND_HDG_SPEED_LED',
    },    
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.greenStripeButton,
        sendState: false,
        nameId: 'inuRerun',
        text: 'INU\nRERUN',
        maxStatus: 0,
        apiSend: 'PVI_INU_INFLIGHT_REALIGN_BTN',
        apiGet: 'PVI_INU_INFLIGHT_REALIGN_LED',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.greenStripeButton,
        sendState: false,
        nameId: 'initPnt',
        text: 'INIT\nPNT',
        maxStatus: 0,
        apiSend: 'PVI_INIT_PNT_BTN',
        apiGet: 'PVI_INIT_PNT_LED',
    },
]


buttonsPvio800_1 = [
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.blackButton,
        nameId: 'back',
        text: '<- Back',
        goTo: 'default',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '1',
        text: '-\n1',
        apiSend: 'PVI_1',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '2',
        text: '2',
        apiSend: 'PVI_2',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '3',
        text: '3',
        apiSend: 'PVI_3',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.yellowStripeButton,
        nameId: 'reset',
        text: 'Reset',
        maxStatus: 0,
        apiSend: 'PVI_RESET_BTN',
        apiGet: 'PVI_RESET_LED',
        sendState: false,
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.blackButton,
        nameId: 'pvi800-2',
        text: 'PVI800\nfunc',
        goTo: 'pvi800-2',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '4',
        text: '4',
        apiSend: 'PVI_4',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '5',
        text: '5',
        apiSend: 'PVI_5',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '6',
        text: '6',
        apiSend: 'PVI_6',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '0',
        text: '+\n0',
        apiSend: 'PVI_0',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.blackButton,
        nameId: 'pvi800-3',
        text: 'PVI800\nPVTz-800',
        goTo: 'pvi800-3',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '7',
        text: '7',
        apiSend: 'PVI_7',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '8',
        text: '8',
        apiSend: 'PVI_8',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '9',
        text: '9',
        apiSend: 'PVI_9',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.yellowStripeButton,
        nameId: 'enter',
        text: 'Enter',
        maxStatus: 0,
        apiSend: 'PVI_ENTER_BTN',
        apiGet: 'PVI_ENTER_LED',
        sendState: false,
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
        dynamicState: true,
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
        dynamicState: true,
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '1',
        text: '1',
        apiSend: 'ABRIS_BTN_1',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '2',
        text: '2',
        apiSend: 'ABRIS_BTN_2',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '3',
        text: '3',
        apiSend: 'ABRIS_BTN_3',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '4',
        text: '4',
        apiSend: 'ABRIS_BTN_4',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: '5',
        text: '5',
        apiSend: 'ABRIS_BTN_5',
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
        dynamicState: true,
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
        dynamicState: true,
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
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.yellowButton,
        sendState: false,
        nameId: 'rotorRpm',
        maxStatus: 0,
        text: 'R RPM',
        apiSend: 'SC_ROTOR_RPM_BTN',
        apiGet: 'SC_ROTOR_RPM_LED',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.grayButton,
        sendState: false,
        nameId: 'lampTest',
        text: 'Lamp\nTest',
        apiSend: 'SC_LAMPS_TEST',
    },
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.redButton,
        sendState: false,
        nameId: 'master',
        text: 'MASTER\nCAUTION',
        apiSend: 'SC_MASTER_CAUTION_BTN',
        apiGet: 'SC_MASTER_CAUTION_LED',
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


buttonsFlare = [
    {   
        type: buttonLogic.types.textToggle,
        scheme: buttonLogic.colorScheme.blackButton,
        nameId: 'back',
        text: '<- Back',
        goTo: 'default',
    },
    {   
        type: buttonLogic.types.textToggle,
        maxStatus: 1,
        scheme: buttonLogic.colorScheme.switch,
        nameId: 'power',
        inversed: true,
        text: ['Off', 'On'],
        apiSend: 'FLARES_POWER',
    },
    {   
        type: buttonLogic.types.textToggle,
        maxStatus: 0,
        scheme: buttonLogic.colorScheme.grayButton,
        nameId: 'red',
        text: 'Red',
        sendState: false,
        apiSend: 'FLARES_RED',
    },
    {   
        type: buttonLogic.types.textToggle,
        maxStatus: 0,
        scheme: buttonLogic.colorScheme.grayButton,
        nameId: 'green',
        text: 'Green',
        sendState: false,
        apiSend: 'FLARES_GREEN',
    },
    {   
        type: buttonLogic.types.textToggle,
        maxStatus: 0,
        scheme: buttonLogic.colorScheme.grayButton,
        nameId: 'white',
        text: 'White',
        sendState: false,
        apiSend: 'FLARES_WHITE',
    },
    {   
        type: buttonLogic.types.textToggle,
        maxStatus: 0,
        scheme: buttonLogic.colorScheme.grayButton,
        nameId: 'yellow',
        text: 'Yellow',
        sendState: false,
        apiSend: 'FLARES_YELLOW',
    },
    
]

module.exports = {
    name: "ka-50",
    namespaces: [
        { name: 'default',  buttons: buttonsDefault},
        { name: 'weapons',  buttons: buttonWeapons},
        { name: 'arbis',    buttons: buttonsArbis},
        { name: 'pvi800-1', buttons: buttonsPvio800_1},
        { name: 'pvi800-2', buttons: buttonsPvio800_2},
        { name: 'pvi800-3', buttons: buttonsPvio800_3},
        { name: 'ap',       buttons: buttonsAp},
        { name: 'flare',    buttons: buttonsFlare},
    ]
}

