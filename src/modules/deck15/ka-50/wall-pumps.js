const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'wall-pumps',
    buttons : [
        {   
            text: '<- Back',
            goTo: 'wall',
        },   
        {   
            text: 'Elect',
            goTo: 'wall-electrical1',
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
            text: 'Govern',
            goTo: 'wall-governors-lights',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'PUMP-FWD'],
            apiSend: 'FUEL_FORWARD_PUMP_POWER',
        },        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'PUMP-AFT'],
            apiSend: 'FUEL_AFT_PUMP_POWER',
        },        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'PUMP-INN'],
            apiSend: 'FUEL_INNER_PUMP_POWER',
        },        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'PUMP-OUTE'],
            apiSend: 'FUEL_OUTER_PUMP_POWER',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['OFF', 'Meter'],
            apiSend: 'FUEL_METER_POWER',
        },    
        {   
            text: 'Radio',
            goTo: 'wall-radio',
        },   
        {},     
        {   
            text: 'Eject',
            goTo: 'wall-eject',
        },                            
        {},     
        {},     
    ]
}