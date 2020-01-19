const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'aux-top',
    buttons : [
        {   
            text: '<- Back',
            goToPage: 'wall',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: 'Left\nGov',
            apiSend: 'ENG_L_EGT_GOVERNOR',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: 'Right\nGov',
            apiSend: 'ENG_R_EGT_GOVERNOR',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: 'Vibrat\nmonitor',
            apiSend: 'ENG_VIBR_MONITOR',
        },     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            maxStatus: 0,
            sendState: false,
            text: 'Betty\nvoice\ntest',
            apiSend: 'VOICE_MSG_SYS_TEST',
        },  


        {   
            text: 'LWS\nCounter\nEkran',
            goToPage: 'aux-bottom',
        },
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.yellowButton,
            text: 'Eject\nlamp',
            maxStatus: 0,
            apiGet: 'EJECT_SYS_TEST_LAMP',
            sendState: false,
        },        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: 'Eject\ntest',
            apiSend: 'EJECT_SYS_TEST_BTN',
        },          
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.rotary,
            overflow: false,
            increment: -1,
            maxStatus: 6,
            text: 'Eject-',
            dynamicState: true,
            apiSend: 'EJECT_SYS_SELECTOR',
        },          
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.rotary,
            overflow: false,
            maxStatus: 6,
            text: 'Eject+',
            dynamicState: true,
            apiSend: 'EJECT_SYS_SELECTOR',
        }, 
   

        {   
            text: 'Lights',
            goToPage: 'wall-lights',
        },  
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            stateToText: (state) => { 
                var texts = [ 'S-8\nKOM', 'S-8\nTsM', 'S-13', 'S-24', 'S-8M\nHE', 'UPK-23', '---', 'FAB\n250', 'FAB\n500', 'KMGU\nAO', 'KMGU\nAT' ] 
                return texts[state]},
            text: 'n/a',
            nameId: 'balVal',
            apiGet: 'PPK800_BAL_DATA',
        },         
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.rotary,
            overflow: false,
            increment: -1,
            maxStatus: 10,
            text: 'Bal-',
            apiSend: 'PPK800_BAL_DATA',
        },     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.rotary,
            overflow: false,
            maxStatus: 10,
            text: 'Bal+',
            apiSend: 'PPK800_BAL_DATA',
        },     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['off', 'INU'],
            apiSend: 'PPK800_INU_POWER',
        },      
    ]
}