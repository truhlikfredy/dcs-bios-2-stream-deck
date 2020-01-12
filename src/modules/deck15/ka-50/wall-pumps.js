const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'wall-pumps',
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
            text: 'Fuel\nValves',
            goToPage: 'wall-fuel-valves',
        },    
        {   
            text: 'Equip',
            goToPage: 'wall-equip',
        },    
        {   
            text: 'Govern',
            goToPage: 'wall-governors',
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
            goToPage: 'wall-radio',
        },   
        {},     
        {   
            text: 'Eject',
            goToPage: 'wall-eject',
        },                            
        {},     
        {},     
    ]
}