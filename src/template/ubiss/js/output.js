module.exports = function() {

  "use strict";

  var path = [], 
    maxDepth = 5, 
    outputHTML = "",
    outputContainer; 

  var _div_ = document.createElement('div'),
      _dl_  = document.createElement('dl'),
      _dt_  = document.createElement('dt'),
      _dd_  = document.createElement('dd'),
      _h1_  = document.createElement('h1'),
      _span_  = document.createElement('span');

  outputContainer = document.getElementById("results");

  if (!!outputContainer) {
    outputContainer.innerHTML = createHTML(window.thisDeviceInfo["results"]).innerHTML;    
    console.log("output rendered.");
  } else {
    console.log("ERROR: output container not found");
  };

  function createHTML(results) {

      function createGroup(id,property,value,className) {

        var DL    = _dl_.cloneNode(false);
        var DT    = _dt_.cloneNode(false);
        var DD    = _dd_.cloneNode(false);
        var SPAN  = _span_.cloneNode(false);


        if (typeof id == "string" && typeof property == "string" && typeof value == "string") {

          DL.setAttribute("id",id);

          if (typeof className != "undefined") {
            DL.setAttribute("class",className);
          }

          DT.appendChild(document.createTextNode(property || ''));
          DL.appendChild(DT);

          DD.appendChild(document.createTextNode(value || ''));
          DL.appendChild(DD);    

          return DL;

        } else {

          return SPAN

        }
      }

      var defaultValue = "N/D";
      var container  = _div_.cloneNode(false);    

      var userAgent = defaultValue;
      try {
        userAgent = results.navigatorInfo.userAgent;
        container.appendChild(createGroup("userAgent","Stringa identificativa del dispositivo:",userAgent,"wide"));        
      } catch(e) {}

      var deviceHwArchitecture = defaultValue;
      try {
        deviceHwArchitecture = [];

        if (results.navigatorInfo.platform) {
          deviceHwArchitecture.push(results.navigatorInfo.platform);
        }        

        if (results.userAgentInfo.cpu) {
          deviceHwArchitecture.push("su CPU " + results.userAgentInfo.cpu);
        }

        if (results.webGLInfo.rendererUnmasked) {
          deviceHwArchitecture.push("con GPU " + results.webGLInfo.rendererUnmasked);
        } 

        if (results.webGLInfo.vendorUnmasked) {
          deviceHwArchitecture.push("by " + results.webGLInfo.vendorUnmasked);
        }       
        deviceHwArchitecture = deviceHwArchitecture.join(" ");

        container.appendChild(createGroup("deviceHwArchitecture","Architettura hardware",deviceHwArchitecture,"wide"));   

      } catch(e) { console.log()}

      var deviceOS = defaultValue;
      try {
        deviceOS = results.userAgentInfo.os;
        container.appendChild(createGroup("deviceOS","Sistema operativo",deviceOS));        
      } catch(e) {}

      var deviceBrowser = defaultValue;
      try {
        deviceBrowser = results.userAgentInfo.browser;
        container.appendChild(createGroup("deviceBrowser","Browser in uso",deviceBrowser));        
      } catch(e) {}

      var displayRes_HW = defaultValue;
      try {
        displayRes_HW = Math.round(results.screenInfo.screenWidth * results.screenInfo.pixelRatio) + " x " + Math.round(results.screenInfo.screenHeight * results.screenInfo.pixelRatio) + " pixel";
        displayRes_HW += " (" + results.screenInfo.screenRatio.approximated.str +")";
        container.appendChild(createGroup("displayRes_HW","Risoluzione dello schermo",displayRes_HW));        
      } catch(e) {}



      var displayRes_CSS = defaultValue;
      try {
        displayRes_CSS = "Viewport " + (results.screenInfo.screenWidth) + " x " + (results.screenInfo.screenHeight);
        displayRes_CSS += "; Disponibili " + (results.screenInfo.innerWidth) + " x " + (results.screenInfo.innerHeight);
        container.appendChild(createGroup("displayRes_CSS","Risoluzione virtuale",displayRes_CSS));        
      } catch(e) {console.log(".---------------",e)}

      var displayOrientation_DEFAULT = defaultValue;
      try {
        switch(results.screenInfo.orientation.defaultOrientation.toLowerCase()) {
          
          case "landscape":
            displayOrientation_DEFAULT = "Orizzontale";
          break;

          case "portrait":
            displayOrientation_DEFAULT = "Verticale";
          break;

        };
        container.appendChild(createGroup("displayOrientation_DEFAULT","Orientamento predefinito",displayOrientation_DEFAULT));
      } catch(e) {}


      var displayOrientation_CURRENT = defaultValue;
      try {

        var angle = results.screenInfo.orientation.currentOrientation;

        switch(angle) {

          case 0:
            displayOrientation_CURRENT = "Nessuna rotazione";
          break;

          case 180:
          case 360:
            displayOrientation_CURRENT = "Capovolto";
          break;

          default:
            if (typeof angle == "number" ) {

              if (Math.abs(angle) > 180) {
                angle = 180 - angle;
              }

              if (angle < 0) {
                displayOrientation_CURRENT = "Ruotato di " + Math.abs(angle) + " gradi a destra";
              } else {
                displayOrientation_CURRENT = "Ruotato di " + Math.abs(angle) + " gradi a sinistra";
              }
            
            }
          break;

        }

        container.appendChild(createGroup("displayOrientation_CURRENT","Rotazione corrente",displayOrientation_CURRENT));                  

      } catch(e) {console.log("---------------------",e,displayOrientation_CURRENT)}


      var phoneGapDevice = defaultValue;
      try {
        phoneGapDevice = results.phonegapDeviceInfo.deviceName + "(phonegap version "+results.phonegapDeviceInfo.phonegapVersion + ")";
        container.appendChild(createGroup("phoneGapDevice","Nome del dispositivo",phoneGapDevice,"wide"));                  
      } catch(e) {}

      var deviceName = defaultValue;
      try {
        deviceName = results.userAgentInfo.device;
        container.appendChild(createGroup("deviceName","Produttore e modello",deviceName,"wide"));        
      } catch(e) {}

      return container;
  }

}