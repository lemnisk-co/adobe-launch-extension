'use strict';
var lmSMTObj = require('./helpers/lem');

module.exports = function (settings) {
    console.log("In Track");
    console.log(settings);
    lmSMTObj.track(settings.g_event.event, settings.g_props, settings.g_id);
    turbine.logger.log('Send event: Track(' + JSON.stringify(settings) + ')');
};
