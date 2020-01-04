module.exports = {
    buttonName: function(dcs_module, namespace, button) {
        if (button.dynamicState) {
            return "imgDynamic/" + dcs_module.name + "-" + namespace.name + "-" + button.nameId + ".png";
        }
        else {
            return "imgDynamic/" + dcs_module.name + "-" + namespace.name + "-" + button.nameId + "-" + button.state + ".png";
        }
    }
}
