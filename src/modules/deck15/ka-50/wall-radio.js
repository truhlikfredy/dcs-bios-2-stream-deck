const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'wall-radio',
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
        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'IntCom'],
            apiSend: 'COMM_INTERCOM_POWER',
        },           
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'VHI-1'],
            apiSend: 'COMM_VHF1_POWER',
        },           
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'VHI-2'],
            apiSend: 'COMM_VHF2_POWER',
        },     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'TLK'],
            apiSend: 'COMM_DATALINK_TLK_POWER',
        },              
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'VHF-TLK'],
            apiSend: 'COMM_DATALINK_VHF_TLK_POWER',
        },  
        {},     
        {},     
        {},     
        {},     
        {   
            text: 'Eject',
            goTo: 'wall-eject',
        },                 
    ]
}