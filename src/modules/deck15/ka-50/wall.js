module.exports = {
    name: 'wall',
    buttons : [
        {   
            text: '<- Back',
            goTo: 'default',
        },   
        {   
            text: 'Fire',
            goTo: 'wall-fire',
        },
        {},     
        {},     
        {},     
        

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
            text: 'Govern',
            goTo: 'wall-governors-lights',
        },
        {   
            text: 'Radio',
            goTo: 'wall-radio',
        },    
        {   
            text: 'Eject',
            goTo: 'wall-eject',
        },  
    
        {   
            text: 'AUX\ntop',
            goTo: 'aux1',
        },
        {   
            text: 'LWS\nCounter\nEkran',
            goTo: 'aux2',
        },
        {   
            text: 'Lights',
            goTo: 'lights-bright',
        },    
    ]
}