const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'wall-governors',
    buttons : [
        {   
            text: '<- Back',
            goTo: 'wall',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            nameId: 'lGoverCover',
            text: 'Cover\nv',
            apiSend: 'ENG_L_ENG_EEG_COVER',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            nameId: 'rGoverCover',
            text: 'Cover\nv',
            apiSend: 'ENG_R_ENG_EEG_COVER',
        },  
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            nameId: 'GGtestCover',
            text: 'Cover\nv',
            apiSend: 'ENG_EEG_GG_TEST_OPER_COVER',
        },        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            nameId: 'PTtestCover',
            text: 'Cover\nv',
            apiSend: 'ENG_EEG_PT1_OPER_PT2_COVER',
        },        
        {   
            text: 'Equip',
            goTo: 'wall-equip',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'LeftGov'],
            apiSend: 'ENG_L_ENG_EEG',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'RightGov'],
            apiSend: 'ENG_R_ENG_EEG',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'GGTest'],
            apiSend: 'ENG_EEG_GG_TEST_OPER',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['PT-1 Test', 'Operatio', 'PT-2 Test'],
            apiSend: 'ENG_EEG_PT1_OPER_PT2',
        },  

        {},     
        {},     
        {   
            text: 'Lights',
            goTo: 'wall-lights',
        },      
        {   
            text: 'AUX\ntop',
            goTo: 'aux-top',
        },
        {   
            text: 'LWS\nCounter\nEkran',
            goTo: 'aux-bottom',
        },     
    ]
}