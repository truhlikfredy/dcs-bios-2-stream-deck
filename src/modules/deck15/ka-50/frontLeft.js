const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'frontLeft',
    buttons : [
        {   
            text: '<- Back',
            goToPage: 'default',
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
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: 'Lamp\nTest',
            apiSend: 'SC_LAMPS_TEST',
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
            scheme: buttonLogic.colorScheme.redButton,
            sendState: false,
            text: 'Laser\nWarning',
            apiGet: 'CL_LASER_WARN',
        }, 


        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            nameId: 'emergencyCover',
            text: 'Cover\nv',
            apiSend: 'GEAR_EMER_HYD_COVER',
        },  
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenButton,
            sendState: false,
            text: 'Left\nDown',
            apiGet: 'GEAR_L_MAIN_DOWN',
        },         
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenButton,
            sendState: false,
            text: 'Nose\nDown',
            apiGet: 'GEAR_NOSE_DOWN',
        },          
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenButton,
            sendState: false,
            text: 'Right\nDown',
            apiGet: 'GEAR_R_MAIN_DOWN',
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
            dependsOnButtonIdState: 5,
            text: ['MainG', 'EmerG' ],
            apiSend: 'GEAR_EMER_HYD',
        },  
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            text: ['Gear ^', 'Gear v'],
            apiSend: 'GEAR_LEVER',
        },      
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: 'Laser\nReset',
            apiSend: 'LASER_RESET',
        },          
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            nameId: 'laserCover',
            text: 'Cover\n->',
            apiSend: 'LASER_MODE_COVER',
        },     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            dependsOnButtonIdState: 13,
            text: ['LRange', 'LDesig'],
            apiSend: 'LASER_MODE',
        },  
    ]
}