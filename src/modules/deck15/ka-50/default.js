
defaultButtons = {
    name: 'default',
    buttons: [
        {   
            text: 'VHF2\nR800L1',
            goToPage: 'vhf2',
        },  
        {   
            text: 'Overhead\nFront ->',
            goToPage: 'overhead-frontRight',
        },  
        {   
            text: 'Counter\nmeasures',
            goToPage: 'counterMeasures',
        },      
        {   
            text: 'ARBIS',
            goToPage: 'arbis',
        },    
        {   
            text: 'Wall',
            goToPage: 'wall',
        },   
        {   
            text: 'Engines\nAPU',
            goToPage: 'engines-apu',
        },
        {   
            text: 'Datalink',
            goToPage: 'datalink',
        },
        {   
            text: 'HUD\nTV\nLandLight',
            goToPage: 'hud-tv',
        },   
        {   
            text: 'PVI800',
            goToPage: 'pvi800',
        },
        {   
            text: 'ADF\nFlare',
            goToPage: 'adf-flare',
        },
        {   
            text: 'Targeting',
            goToPage: 'targeting',
        },    
        {   
            text: 'Front\nLeft',
            goToPage: 'frontLeft',
        },
        {   
            text: 'Weap',
            goToPage: 'weapons',
        },  
        {   
            text: 'AP',
            goToPage: 'ap',
        },
        {   
            text: 'VHF1\nR828',
            goToPage: 'vhf1',
        },
    ]    
}

module.exports = {
    name: "deck15-ka-50",
    pages: [
        defaultButtons,

        require('./vhf2.js'),
        require('./vhf2-freq.js'),
        require('./overhead-frontRight.js'),
        require('./counterMeasures.js'),
        require('./arbis.js'),
        require('./wall.js'),
        require('./wall-fire.js'),
        require('./wall-electrical.js'),
        require('./wall-pumps.js'),
        require('./wall-fuel-valve.js'),
        require('./wall-equip.js'),
        require('./wall-governors.js'),
        require('./wall-radio.js'),
        require('./wall-eject.js'),
        require('./aux-top.js'),
        require('./aux-bottom.js'),
        require('./wall-lights.js'),

        require('./engines-apu.js'),
        require('./datalink.js'),
        require('./hud-tv.js'),
        require('./landingLights.js'),
        require('./pvi800.js'),
        require('./pvi800-functions.js'),
        require('./pvi800-control.js'),
        require('./adf-flare.js'),
        
        require('./targeting.js'),
        require('./frontLeft.js'),
        require('./weapons.js'),
        require('./ap.js'),
        require('./vhf1.js'),
    ]
}

