
window.thisDeviceInfo = require("./thisDeviceInfo");

/*

  USAGE:
  ======

  1. for each module needed, repeat:
  ----------------------------------
    thisDeviceInfo.loadModule(
      moduleName [string],
      module [function],
      (optional) listenersList [array]
    );


  2. finally:
  -----------
    thisDeviceInfo.init({
      throttleInterval: [number] milliseconds
      callbackFn: [function] a callback called at every update cycle to display output
    });


  3. optionally:
  --------------
    add #debug to the URL to disp()lay raw JSON output

*/

thisDeviceInfo.loadModule("navigatorInfo", require('./modules/navigatorInfo'));

thisDeviceInfo.loadModule("screenInfo", require('./modules/screenInfo'));

thisDeviceInfo.loadModule("gyroscopeInfo", require('./modules/gyroscopeInfo'));

thisDeviceInfo.loadModule("motionSensorsInfo", require('./modules/motionSensorsInfo'));

thisDeviceInfo.loadModule("webGLInfo", require('./modules/webGLInfo'));

thisDeviceInfo.loadModule("phonegapDeviceInfo", require('./modules/phonegapDeviceInfo'));

thisDeviceInfo.loadModule("batteryInfo", require('./modules/batteryInfo'));

thisDeviceInfo.loadModule("connectionInfo", require('./modules/connectionInfo'));

thisDeviceInfo.loadModule("mediaCaptureInfo", require('./modules/mediaCaptureInfo'));

thisDeviceInfo.loadModule("ambientLightInfo", require('./modules/ambientLightInfo'));

thisDeviceInfo.loadModule("userAgentInfo", require('./modules/userAgentInfo'));

thisDeviceInfo.loadModule("UALookupInfo", require('./modules/uaLookupInfo'));

thisDeviceInfo.loadModule("IPLookupInfo", require('./modules/ipLookupInfo'));

thisDeviceInfo.loadModule("UIInfo", require('./modules/uiModeInfo'));

thisDeviceInfo.loadModule("iOSClientInfo", require('./modules/iOSClientInfo'));

thisDeviceInfo.loadModule("bluetoothInfo", require('./modules/bluetoothInfo'));

thisDeviceInfo.loadModule("dateTimeInfo", require('./modules/dateTimeInfo'));


thisDeviceInfo.init({
  callbackFn: require("./template/default/js/output")
});
