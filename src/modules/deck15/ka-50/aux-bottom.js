const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'aux-bottom',
    buttons : [
        {   
            text: '<- Back',
            goToPage: 'wall',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.yellowButton,
            text: 'LWS\nOper',
            maxStatus: 0,
            apiGet: 'LWS_OPER',
            sendState: false,
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'LWS'],
            apiSend: 'LWS_POWER',
        },     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            maxStatus: 0,
            sendState: false,
            text: 'LWS\ntest',
            apiSend: 'LWS_TEST',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            nameId: 'ekranCover',
            text: 'Cover\nv',
            apiSend: 'ELEC_HYD_TRAN_EKRAN_POWER_COVER',
        },   

        {   
            text: 'AUX',
            goToPage: 'aux-top',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            nameId: 'u26pwr_cover',
            text: 'Cover\nv',
            apiSend: 'UV26_POWER_COVER',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            nameId: 'u26test_cover',
            text: 'Cover\nv',
            apiSend: 'UV26_TEST_COVER',
        },   
        {   
            type: buttonLogic.types.textToggle,
            defaultStatus: 0,
            scheme: buttonLogic.colorScheme.rotary,
            increment: +4095,
            maxStatus: 65535,
            overflow: false,
            text: '+\nRear AUX\nLight',
            apiSend: 'ELEC_AUX_BRIGHTNESS',
            dynamicState: true,
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'EkrHydTrns'],
            dependsOnButtonIdState: 4,
            apiSend: 'ELEC_HYD_TRAN_EKRAN_POWER',
        },  

        {   
            text: 'Lights',
            goToPage: 'wall-lights',
        },  
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            dependsOnButtonIdState: 6,            
            text: ['OFF', 'U26-PWR'],
            apiSend: 'UV26_POWER',
        },     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            dependsOnButtonIdState: 7,
            text: ['OFF', 'TEST'],
            apiSend: 'UV26_TEST',
        },     
        {   
            type: buttonLogic.types.textToggle,
            defaultStatus: 0,
            scheme: buttonLogic.colorScheme.rotary,
            increment: -4095,
            maxStatus: 65535,
            overflow: false,
            text: '-\nRear AUX\nLight',
            apiSend: 'ELEC_AUX_BRIGHTNESS',
            dynamicState: true,
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'RearLight'],
            apiSend: 'ELEC_AUX_LIGHTS',
        },      
    ]
}