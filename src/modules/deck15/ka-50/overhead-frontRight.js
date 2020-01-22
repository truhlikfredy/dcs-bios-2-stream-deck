const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'overhead-frontRight',
    buttons : [
        {   
            text: '<- Back',
            goToPage: 'default',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            switchSelector: false,
            inversed: true,
            text: ['NavOff', '10%', '30%', '100%'],
            apiSend: 'OP_NAV_LIGHTS',
        },         
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            switchSelector: false,
            inversed: true,
            text: ['Off', 'Wiper3', 'Wiper2', 'Wiper1'],
            states: [ "6", "4", "2", "5"],
            apiSend: 'OP_WINDSHIELD_WIPER',
        },         
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['Off', 'SensHt'],
            apiSend: 'OP_PITOT_PORT_HEAT',
        },         
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['Off', 'PilotHt'],
            apiSend: 'OP_PITOT_RAM_HEAT',
        },     
        
        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['Off', '!RotIce'],
            apiSend: 'OP_ROTOR_DEICE',
        },         
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['!Dusting', '!Icing'],
            apiSend: 'OP_ENG_DEICE',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: 'PilotHt\nTest',
            apiSend: 'OP_PITOT_HEAT_TEST',
        },   
        {},     
        {},     

        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: 'Running\nGas\nTemp',
            apiSend: 'ENG_RUNNING_EGT_TEST',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: 'Stopped\nGas\nTemp',
            apiSend: 'ENG_STOPPED_EGT_TEST',
        },  
        {},     
        {},     

        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.grayButton,
            sendState: false,
            text: 'Fuel\nTest',
            apiSend: 'FUEL_TEST',
        },       
    ]
}