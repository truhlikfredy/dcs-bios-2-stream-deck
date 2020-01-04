const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'wall-fuel',
    buttons : [
        {   
            text: '<- Back',
            goTo: 'wall',
        },  
        {   
            text: 'Elect',
            goTo: 'wall-electrical',
        },     
        {   
            text: 'Pumps',
            goTo: 'wall-pumps',
        },
        {   
            text: 'Equip',
            goTo: 'wall-equip',
        },
        {   
            text: 'Govern',
            goTo: 'wall-governors-lights',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            nameId: 'leftCover',
            text: 'Cover\nv',
            apiSend: 'FUEL_L_ENG_VLV_COVER',
        },  
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            nameId: 'rightCover',
            text: 'Cover\nv',
            apiSend: 'FUEL_R_ENG_VLV_COVER',
        },  
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            nameId: 'apuCover',
            text: 'Cover\nv',
            apiSend: 'FUEL_APU_VLV_COVER',
        },  
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            nameId: 'xfeedCover',
            text: 'Cover\nv',
            apiSend: 'FUEL_XFEED_VLV_COVER',
        },  
        {   
            text: 'Lights',
            goTo: 'lights-bright',
        },  
    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'PUMP-LEFT'],
            apiSend: 'FUEL_L_ENG_VLV',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'PUMP-RIGHT'],
            apiSend: 'FUEL_R_ENG_VLV',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'PUMP-APU'],
            apiSend: 'FUEL_APU_VLV',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'X-FEED'],
            apiSend: 'FUEL_XFEED_VLV',
        },   
    ]
}