const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'datalink',
    buttons : [
        {   
            text: '<- Back',
            goTo: 'default',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenStripeButton,
            sendState: false,
            text: '1\nVehi',
            maxStatus: 0,
            apiSend: 'DLNK_TARGET_VEHICLE_BTN',
            apiGet: 'DLNK_TARGET_VEHICLE_LED',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenStripeButton,
            sendState: false,
            text: '2\nAAA',
            maxStatus: 0,
            apiSend: 'DLNK_TARGET_SAM_BTN',
            apiGet: 'DLNK_TARGET_SAM_LED',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenStripeButton,
            sendState: false,
            text: '3\nOther',
            maxStatus: 0,
            apiSend: 'DLNK_TARGET_OTHER_BTN',
            apiGet: 'DLNK_TARGET_OTHER_LED',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenStripeButton,
            sendState: false,
            text: 'Ingress',
            maxStatus: 0,
            apiSend: 'DLNK_TARGET_POINT_LED',
            apiGet: 'DLNK_TARGET_POINT_BTN',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenStripeButton,
            sendState: false,
            text: 'Wing\n1',
            maxStatus: 0,
            apiSend: 'DLNK_WINGMAN_1_BTN',
            apiGet: 'DLNK_WINGMAN_1_LED'
        },      
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenStripeButton,
            sendState: false,
            text: 'Wing\n2',
            maxStatus: 0,
            apiSend: 'DLNK_WINGMAN_2_BTN',
            apiGet: 'DLNK_WINGMAN_2_LED'
        },      
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenStripeButton,
            sendState: false,
            text: 'Wing\n3',
            maxStatus: 0,
            apiSend: 'DLNK_WINGMAN_3_BTN',
            apiGet: 'DLNK_WINGMAN_3_LED'
        },      
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenStripeButton,
            sendState: false,
            text: 'Wing\n4',
            maxStatus: 0,
            apiSend: 'DLNK_WINGMAN_4_BTN',
            apiGet: 'DLNK_WINGMAN_4_LED'
        },      
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenStripeButton,
            sendState: false,
            text: 'Wing\nAll',
            maxStatus: 0,
            apiSend: 'DLNK_WINGMAN_ALL_BTN',
            apiGet: 'DLNK_WINGMAN_ALL_LED'
        },      
        {},     
        {},     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.yellowStripeButton,
            sendState: false,
            text: 'Erase',
            maxStatus: 0,
            apiSend: 'DLNK_ERASE_BTN',
            apiGet: 'DLNK_ERASE_LED'
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.yellowStripeButton,
            sendState: false,
            text: 'Ingress\nTo',
            maxStatus: 0,
            apiSend: 'DLNK_ESCAPE_BTN',
            apiGet: 'DLNK_ESCAPE_LED'
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.yellowStripeButton,
            sendState: false,
            text: 'Send\nMemory',
            maxStatus: 0,
            apiSend: 'DLNK_SEND_BTN',
            apiGet: 'DLNK_SEND_LED'
        },  
    ]
}