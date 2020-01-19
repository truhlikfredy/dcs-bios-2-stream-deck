const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'wall-radio',
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
            goToPage: 'wall-eject',
        },                 
    ]
}