module.exports = {
    buttonName: function(dcs_module, page, button) {
        if (button.dynamicState) {
            return "imgDynamic/" + dcs_module.name + "-" + page.name + "-" + button.nameId + ".png";
        }
        else {
            return "imgDynamic/" + dcs_module.name + "-" + page.name + "-" + button.nameId + "-" + button.state + ".png";
        }
    }
}
