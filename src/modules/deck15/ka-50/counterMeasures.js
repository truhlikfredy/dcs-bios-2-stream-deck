const buttonLogic = require('../../buttonLogic.js')

module.exports = {
    name: 'counterMeasures',
    buttons : [
        {   
            text: '<- Back',
            goToPage: 'default',
        },   
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.redButton,
            sendState: false,
            text: '<-',
            apiGet: 'UV26_L_DISPENSER',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blueButton,
            sendState: false,
            text: 'Seq Series\n0 = inf\n5 = 12\n7 = 15',
            apiSend: 'UV26_SERIES',
        },      
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blueButton,
            sendState: false,
            text: 'Interval (s)\n0 = 0.125\n7 = 0.25\n9 = 0.5',
            apiSend: 'UV26_INTERVAL',
        },      
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.redButton,
            sendState: false,
            text: '->',
            apiGet: 'UV26_R_DISPENSER',
        },   
        
        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.green7seg,
            sendState: false,
            nameId: 'counterDisplay',
            apiGet: 'UV26_DISPLAY',
            dynamicState: true,
        },     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            inversed: true,
            text: ['<-', '<- ->', '->'],
            states: [ "6", "5", "4"],
            apiSend: 'UV26_DISPENSERS_SELECTOR',
        }, 
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blueButton,
            sendState: false,
            text: 'Burst\nin 1 seq',
            apiSend: 'UV26_BURST',
        },      
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blueButton,
            sendState: false,
            text: 'Reset',
            apiSend: 'UV26_RESET',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.switch,
            text: [ 'Prog', 'Count'],
            states: [ "4", "6"],
            apiSend: 'UV26_MODE',
        },   
        
        
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.blackButton,
            sendState: false,
            nameId: 'explanation',
            stateToText: (state) => {
                if (state.length != 3) return 'n/a'
                
                ret = ""
                switch (state[0]) {
                    case "0": ret += "inf"; break;
                    case "5": ret += "12"; break;
                    case "7": ret += "15"; break;
                    default:
                        ret += state[0]
                        break
                }
                ret += " seq\n"

                ret += "* " + state[1] + " brst\n"

                switch (state[2]) {
                    case "0": ret += '0.125s'; break;
                    case "7": ret += '0.25s'; break;
                    case "9": ret += '0.5s'; break;
                    default:
                        ret += state[2] + "s"
                        break
                }
                // ret += " delay"

                return ret
            },
            apiGet: 'UV26_DISPLAY',
            dynamicState: true,
        },   
        {},     
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.greenButton,
            sendState: false,
            text: 'Stop',
            apiSend: 'UV26_STOP',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.redButton,
            sendState: false,
            text: 'Start',
            apiSend: 'UV26_START',
        },    
        {   
            type: buttonLogic.types.textToggle,
            scheme: buttonLogic.colorScheme.redButton,
            sendState: false,
            text: 'LWR\nRESET',
            apiSend: 'LWR_RESET',
            apiGet: 'LWR_RESET',
        },    
        
    ]
}