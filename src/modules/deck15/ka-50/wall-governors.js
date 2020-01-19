const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'wall-governors',
    buttons : [
        {   
            text: '<- Back',
            goToPage: 'wall',
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
            goToPage: 'wall-equip',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            dependsOnButtonIdState: 1,
            text: ['OFF', 'LeftGov'],
            apiSend: 'ENG_L_ENG_EEG',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            dependsOnButtonIdState: 2,
            text: ['OFF', 'RightGov'],
            apiSend: 'ENG_R_ENG_EEG',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            dependsOnButtonIdState: 3,
            text: ['OFF', 'GGTest'],
            apiSend: 'ENG_EEG_GG_TEST_OPER',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            dependsOnButtonIdState: 4,
            text: ['PT-1 Test', 'Operatio', 'PT-2 Test'],
            apiSend: 'ENG_EEG_PT1_OPER_PT2',
        },  


        {},     
        {},     
        {   
            text: 'Lights',
            goToPage: 'wall-lights',
        },      
        {   
            text: 'AUX\ntop',
            goToPage: 'aux-top',
        },
        {   
            text: 'LWS\nCounter\nEkran',
            goToPage: 'aux-bottom',
        },     
    ]
}