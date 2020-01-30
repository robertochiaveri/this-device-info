module.exports = function() {

  "use strict";

  var config = {
        outputContainerID : "results",
        globalDataObjName : "thisDeviceInfo"
      },
      path = [],
      maxDepth = 5,
      $outputContainer,
      results;

  $outputContainer = document.getElementById(config.outputContainerID);

  results = window[config.globalDataObjName]["results"];

  if (!!$outputContainer) {
    $outputContainer.innerHTML = createHTML();
    console.log("output rendered.");
  } else {
    console.log("ERROR: output container not found");
  };

  function createHTML() {

    var html ="";
    var rows = {};

    var defaultValue = "N/D";

    function addRow(table_id,row_id,property,value,classname) {

      if (!rows || !rows[table_id]) { rows[table_id] = []; }

      var row = '<tr id="'+row_id+'" class="'+classname+'"><td>'+property+'</td><td>'+value+'</td></tr>';

      rows[table_id].push(row);

      return row;

    }

    var deviceHwArchitecture = defaultValue;
    try {
      deviceHwArchitecture = [];

      if (results.navigatorInfo.platform) {
        deviceHwArchitecture.push(results.navigatorInfo.platform);
      }

      if (results.userAgentInfo.cpu) {
        deviceHwArchitecture.push("on CPU " + results.userAgentInfo.cpu);
      }

      if (results.webGLInfo.rendererUnmasked) {
        deviceHwArchitecture.push("with GPU " + results.webGLInfo.rendererUnmasked);
      }

      if (results.webGLInfo.vendorUnmasked) {
        deviceHwArchitecture.push("by " + results.webGLInfo.vendorUnmasked);
      }
      deviceHwArchitecture = deviceHwArchitecture.join(" ");

      addRow("HW","deviceHwArchitecture","Hardware architecture",deviceHwArchitecture,"long");

    } catch(e) { console.log()}

    var deviceOS = defaultValue;
    try {
      deviceOS = results.userAgentInfo.os;
      addRow("SW","deviceOS","Operating system",deviceOS);
    } catch(e) {console.log(".---------------",e);}

    var deviceBrowser = defaultValue;
    try {
      deviceBrowser = results.userAgentInfo.browser;
      addRow("SW","deviceBrowser","Browser",deviceBrowser);
    } catch(e) {console.log(".---------------",e);}

    var displayRes_HW = defaultValue;
    try {
      displayRes_HW = Math.round(results.screenInfo.screenWidth * results.screenInfo.pixelRatio) + " x " + Math.round(results.screenInfo.screenHeight * results.screenInfo.pixelRatio) + " pixels";
      displayRes_HW += " (" + results.screenInfo.screenRatio.approximated.str +")";
      addRow("display","displayRes_HW","Hardware resolution",displayRes_HW);
    } catch(e) {console.log(".---------------",e);}

    var displayRes_CSS = defaultValue;
    try {
      displayRes_CSS = "Viewport " + (results.screenInfo.screenWidth) + " x " + (results.screenInfo.screenHeight);
      displayRes_CSS += "; Available " + (results.screenInfo.innerWidth) + " x " + (results.screenInfo.innerHeight);
      addRow("display","displayRes_CSS","Virtual resolution",displayRes_CSS);
    } catch(e) {console.log(".---------------",e)}

    var displayOrientation_DEFAULT = defaultValue;
    try {
      switch(results.screenInfo.orientation.defaultOrientation.toLowerCase()) {

        case "landscape":
          displayOrientation_DEFAULT = "Landscape";
        break;

        case "portrait":
          displayOrientation_DEFAULT = "Portrait";
        break;

      };
      addRow("display","displayOrientation_DEFAULT","Default orientation",displayOrientation_DEFAULT);
    } catch(e) {console.log(".---------------",e);}

    var displayOrientation_CURRENT = defaultValue;
    try {

      var angle = results.screenInfo.orientation.currentOrientation;

      switch(angle) {

        case 0:
          displayOrientation_CURRENT = "(no rotation)";
        break;

        case 180:
        case 360:
          displayOrientation_CURRENT = "Upside down";
        break;

        default:
          if (typeof angle == "number" ) {

            if (Math.abs(angle) > 180) {
              angle = 180 - angle;
            }

            if (angle < 0) {
              displayOrientation_CURRENT = Math.abs(angle) + " degrees right";
            } else {
              displayOrientation_CURRENT = Math.abs(angle) + " degrees left";
            }

          }
        break;
      }
      addRow("display","displayOrientation_CURRENT","Current orientation",displayOrientation_CURRENT);
    } catch(e) {console.log(".---------------",e);}

    var deviceName = defaultValue;
    try {
      deviceName = results.userAgentInfo.device;
      addRow(rows,"deviceName","Device name",deviceName);
    } catch(e) {console.log(".---------------",e);}

    return html;

 }

}
