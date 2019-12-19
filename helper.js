module.exports = {
    buttonName: function(dcs_module, namespace, button) {
        return "img/" + dcs_module.name + "-" + namespace.name + "-" + button.nameId + "-" + button.state + ".png";
    }
}
