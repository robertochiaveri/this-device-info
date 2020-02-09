module.exports = (function() {

  "use strict";

  var init = function(event) {

    var parsedUa = require("ua-parser-js")(),
        parsedUaInfo = {};

    try{
      parsedUaInfo.os = parsedUa.os.name +" "+parsedUa.os.version;
    } catch(e){}

    try{
      parsedUaInfo.osName = parsedUa.os.name;
    } catch(e){}

    try{
      parsedUaInfo.osVersion = parsedUa.os.version;
    } catch(e){}

    try{
      parsedUaInfo.browser = parsedUa.browser.name;
    } catch(e){}

    try{
      parsedUaInfo.browserVersion = parsedUa.browser.version;
    } catch(e){}    

    try{
      parsedUaInfo.cpu = parsedUa.cpu.architecture;
    } catch(e){}

    try{
        parsedUaInfo.browser_full  = (parsedUa.browser.name || "");
        parsedUaInfo.browser_full += " "  + (parsedUa.browser.version || "");
        parsedUaInfo.browser_full += " (" + (parsedUa.engine.name || "");
        parsedUaInfo.browser_full += " "  + (parsedUa.engine.version || "") + ")";
    } catch(e) {}

    try{
      if (!!parsedUa.device.model || !!parsedUa.device.vendor || !!parsedUa.device.type) {
        parsedUaInfo.device = (parsedUa.device.vendor || "") +" "+(parsedUa.device.model || ""); + " ("+ (parsedUa.device.type || "") +")";
      }
    } catch(e){}

    try{
      if (!!parsedUa.device.type ) {
        parsedUaInfo.deviceType = parsedUa.device.type || "";
      }
    } catch(e){}

    try{
      if (!!parsedUa.device.vendor ) {
        parsedUaInfo.deviceVendor = parsedUa.device.vendor || "";
      }
    } catch(e){}

    try{
      if (!!parsedUa.device.model ) {
        parsedUaInfo.deviceModel = parsedUa.device.model || "";
      }
    } catch(e){}

    return parsedUaInfo;
  }

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded"]
  };
})();
