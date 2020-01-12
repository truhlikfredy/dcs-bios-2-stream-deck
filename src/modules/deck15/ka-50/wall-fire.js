const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'wall-fire',
    buttons : [
        {   
            text: '<- Back',
            goToPage: 'wall',
        },   
        {   
            text: 'Elect',
            goToPage: 'wall-electrical',
        },     
        {   
            text: 'Fuel\nPumps',
            goToPage: 'wall-fuel-pumps',
        },  
        {   
            text: 'Fuel\nValves',
            goToPage: 'wall-fuel-valves',
        },  
        {   
            text: 'Equip',
            goToPage: 'wall-equip',
        },     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.redButton,
            text: 'Left\nENG',
            maxStatus: 0,
            sendState: false,
            apiSend: 'FIREEXT_L_ENG_EXT',
            apiGet: 'FIREEXT_L_ENG_FIRE',
        },       
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.redButton,
            text: 'APU',
            maxStatus: 0,
            sendState: false,
            apiSend: 'FIREEXT_APU_EXT',
            apiGet: 'FIREEXT_APU_FIRE',
        },       
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.redButton,
            text: 'Right\nENG',
            maxStatus: 0,
            sendState: false,
            apiSend: 'FIREEXT_R_ENG_EXT',
            apiGet: 'FIREEXT_R_ENG_FIRE',
        },     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.redButton,
            text: 'Vent',
            maxStatus: 0,
            sendState: false,
            apiSend: 'FIREEXT_VENT_EXT',
            apiGet: 'FIREEXT_VENT_FIRE',
        },            
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            nameId: 'slectCover',
            text: 'Cover\nv',
            apiSend: 'FIREEXT_EXT_MODE_COVER',
        },         
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            nameId: 'slectmanCover',
            text: 'Cover\n->',
            apiSend: 'FIREEXT_AUTO_MANUAL_COVER',
        },         
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            text: ['Auto', 'Manual'],
            apiSend: 'FIREEXT_AUTO_MANUAL',
        },          
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['Off', 'Alarm'],
            apiSend: 'FIREEXT_MONITOR',
        },       
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            maxStatus: 2,
            text: ['Test  3', 'Test  1', 'Test  2'],
            apiSend: 'FIREEXT_WARN_TEST',
        },  
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            fontIndex: 5,
            text: ['Test', 'Off', 'Work'],
            apiSend: 'FIREEXT_EXT_MODE',
        },
    ]
}