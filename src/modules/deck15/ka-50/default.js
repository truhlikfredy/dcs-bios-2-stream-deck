
defaultButtons = {
    name: 'default',
    buttons: [
        {   
            text: 'VHF2\nR800L1',
            goTo: 'vhf2',
        },  
        {   
            text: 'Overhead\nFront ->',
            goTo: 'overhead-frontRight',
        },  
        {   
            text: 'Counter\nmeasures',
            goTo: 'counterMeasures',
        },      
        {   
            text: 'ARBIS',
            goTo: 'arbis',
        },    
        {   
            text: 'Wall',
            goTo: 'wall',
        },   
        {   
            text: 'Engines\nAPU',
            goTo: 'engines-apu',
        },
        {   
            text: 'Datalink',
            goTo: 'datalink',
        },
        {   
            text: 'HUD\nTV\nLandLight',
            goTo: 'hud-tv',
        },   
        {   
            text: 'PVI800',
            goTo: 'pvi800',
        },
        {   
            text: 'ADF\nFlare',
            goTo: 'adf-flare',
        },
        {   
            text: 'Targeting',
            goTo: 'targeting',
        },    
        {   
            text: 'Front\nLeft',
            goTo: 'frontLeft',
        },
        {   
            text: 'Weap',
            goTo: 'weapons',
        },  
        {   
            text: 'AP',
            goTo: 'ap',
        },
        {   
            text: 'VHF1\nR828',
            goTo: 'vhf1',
        },
    ]    
}

module.exports = {
    name: "deck15-ka-50",
    namespaces: [
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
        require('./wall-fuel.js'),
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
        
        require('./ka-50/targeting.js'),
        require('./ka-50/frontLeft.js'),
        require('./ka-50/weapons.js'),
        require('./ka-50/ap.js'),
        require('./ka-50/vhf1.js'),
    ]
}

