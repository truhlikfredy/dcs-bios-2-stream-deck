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
            goTo: 'wall-governors',
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
            goTo: 'aux-top',
        },
        {   
            text: 'LWS\nCounter\nEkran',
            goTo: 'aux-bottom',
        },
        {   
            text: 'Lights',
            goTo: 'wall-lights',
        },    
    ]
}