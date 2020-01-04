const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'wall-eject',
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
            text: 'Fuel',
            goTo: 'wall-fuel',
        },  
        {   
            text: 'Equip',
            goTo: 'wall-equip',
        },     
        {},     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            nameId: 'ejectCover1',
            text: 'Cover\nv',
            apiSend: 'EJECT_POWER_COVER',
        },      
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            nameId: 'ejectCover2',
            text: 'Cover\nv',
            apiSend: 'EJECT_POWER_COVER',
        },      
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            nameId: 'ejectCover3',
            text: 'Cover\nv',
            apiSend: 'EJECT_POWER_COVER',
        },      
        {},     
        {   
            text: 'Radio',
            goTo: 'wall-radio',
        },  
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            text: ['Eject1', 'OFF'],
            apiSend: 'EJECT_POWER_1',
        },           
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            text: ['Eject2', 'OFF'],
            apiSend: 'EJECT_POWER_2',
        },           
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            text: ['Eject3', 'OFF'],
            apiSend: 'EJECT_POWER_3',
        },  
    ]
}