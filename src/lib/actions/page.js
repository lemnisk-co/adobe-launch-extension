'use strict';
var lmSMTObj = require('./helpers/lem');

module.exports = function (settings) {
    console.log("In Page");
    console.log(settings);
    lmSMTObj.page(settings.g_name.name, settings.g_props, settings.g_id);
    turbine.logger.log('Send event: page(' + JSON.stringify(settings) + ')');
};
