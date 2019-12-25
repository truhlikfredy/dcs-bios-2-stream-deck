module.exports = {
    buttonName: function(dcs_module, namespace, button) {
        if (button.dynamicState) {
            return "img/" + dcs_module.name + "-" + namespace.name + "-" + button.nameId + ".png";
        }
        else {
            return "img/" + dcs_module.name + "-" + namespace.name + "-" + button.nameId + "-" + button.state + ".png";
        }
    }
}
