const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'wall-lights',
    buttons : [
        {   
            text: '<- Back',
            goToPage: 'wall',
        },   
        {   
            type: buttonLogic.types.textToggle,
            defaultStatus: 0,
            scheme: buttonLogic.colorScheme.rotary,
            increment: +4095,
            maxStatus: 65535,
            overflow: false,
            text: '+\nBlue CPT\nLight',
            apiSend: 'LIGHT_AUX_BRIGHTNESS',
            dynamicState: true,
        },    
        {   
            type: buttonLogic.types.textToggle,
            defaultStatus: 0,
            scheme: buttonLogic.colorScheme.rotary,
            increment: +4095,
            maxStatus: 65535,
            overflow: false,
            text: '+\nSAI/ADI\nLight',
            apiSend: 'LIGHT_HSI_ADI_BRIGHTNESS',
            dynamicState: true,
        },    
        {   
            type: buttonLogic.types.textToggle,
            defaultStatus: 0,
            scheme: buttonLogic.colorScheme.rotary,
            increment: +4095,
            maxStatus: 65535,
            overflow: false,
            text: '+\nPanels\nLight',
            apiSend: 'LIGHT_COCKPIT_BRIGHTNESS',
            dynamicState: true,
        },  
        {   
            text: 'AUX\ntop',
            goToPage: 'aux-top',
        },


        {   
            text: 'Govern',
            goToPage: 'wall-governors',
        },
        {   
            type: buttonLogic.types.textToggle,
            defaultStatus: 0,
            scheme: buttonLogic.colorScheme.rotary,
            increment: -4095,
            maxStatus: 65535,
            overflow: false,
            text: '-\nBlue CPT\nLight',
            apiSend: 'LIGHT_AUX_BRIGHTNESS',
            dynamicState: true,
        },    
        {   
            type: buttonLogic.types.textToggle,
            defaultStatus: 0,
            scheme: buttonLogic.colorScheme.rotary,
            increment: -4095,
            maxStatus: 65535,
            overflow: false,
            text: '-\nSAI/ADI\nLight',
            apiSend: 'LIGHT_HSI_ADI_BRIGHTNESS',
            dynamicState: true,
        },    
        {   
            type: buttonLogic.types.textToggle,
            defaultStatus: 0,
            scheme: buttonLogic.colorScheme.rotary,
            increment: -4095,
            maxStatus: 65535,
            overflow: false,
            text: '-\nPanels\nLight',
            apiSend: 'LIGHT_COCKPIT_BRIGHTNESS',
            dynamicState: true,
        },  
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'Interior' ],
            apiSend: 'LIGHT_CPT_INT',
        },         


        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'Rotor' ],
            apiSend: 'LIGHT_ROTOR_TIP',
        },       
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            switchSelector: false,
            inversed: true,
            text: ['Frm0%', 'Frm10%', 'Frm30%', 'Frm100%'],
            apiSend: 'LIGHT_FORMATION',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'SAI+ADI' ],
            apiSend: 'LIGHT_ADI_SAI',
        },          
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'NVG' ],
            apiSend: 'LIGHT_COCKPIT_NVG',
        },          
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'Panels' ],
            apiSend: 'LIGHT_COCKPIT',
        },      
    ]
}