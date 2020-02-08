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
        var content = value.split("\n");


        if (typeof id == "string" && typeof property == "string" && typeof value == "string") {

          DL.setAttribute("id",id);

          if (typeof className != "undefined") {
            DL.setAttribute("class",className);
          }

          if (property == "") { property = " \u00A0" }
          DT.appendChild(document.createTextNode(property || ''));
          DL.appendChild(DT);

          for(var i=0;i<content.length;i++) {
           DD.appendChild(document.createTextNode(content[i] || ''));
           if (content.length > 1) { 
             DD.appendChild(document.createElement("br"));           
           }
          }

          DL.appendChild(DD);

          return DL;

        } else {

          return SPAN

        }
      }

      var defaultValue = "N/D";
      var container  = _div_.cloneNode(false);


      // User Agent string
      var userAgent = defaultValue;
      try {
        userAgent = results.navigatorInfo.userAgent;
        container.appendChild(createGroup("userAgent","User Agent:",userAgent,"wide"));
      } catch(e) {console.log(e);}


      // Hardware 
      var deviceHardware = defaultValue;
      try {

        // first column:
        deviceHardware = [];

        if (results.navigatorInfo.platform) {
          deviceHardware.push(results.navigatorInfo.platform);
        }
        
        if ( parseInt(results.navigatorInfo.hardwareConcurrency) == 1) {
          deviceHardware.push("single-core CPU");
        } else if(parseInt(results.navigatorInfo.hardwareConcurrency) > 1) {
          deviceHardware.push("multi-core CPU ("+results.navigatorInfo.hardwareConcurrency+" cores)");
        }

        if (results.userAgentInfo.cpu) {
          deviceHardware.push(results.userAgentInfo.cpu);
        }          

        deviceHardware.push("\n");

        if (results.webGLInfo.vendorUnmasked) {
          deviceHardware.push("At least " + results.navigatorInfo.deviceMemory + " of RAM memory\n");
        }        

        if (results.webGLInfo.rendererUnmasked || results.webGLInfo.vendorUnmasked) {

          if (results.webGLInfo.rendererUnmasked) {
            deviceHardware.push("Graphics "+results.webGLInfo.rendererUnmasked);
          }
  
          if (results.webGLInfo.vendorUnmasked) {
            deviceHardware.push("by " + results.webGLInfo.vendorUnmasked);
          }

          deviceHardware.push("\n");

        }

        if (results.batteryInfo) {

          if (results.batteryInfo.batteryStatus) {
            switch (results.batteryInfo.batteryStatus) {
              case "Battery": 
                deviceHardware.push("Running on battery\n");
              break;
              case "Adapter":
                deviceHardware.push("Plugged-in to power outlet\n");              
              break;
              default:
              break;
            }
          }

          if (results.batteryInfo.batteryLevel) {
            deviceHardware.push("Battery level " + results.batteryInfo.batteryLevel); 
          }
          
        }         

        deviceHardware = deviceHardware.join(" ");
        container.appendChild(createGroup("deviceHardware","Hardware",deviceHardware));


        // second column
        if (results.mediaCaptureInfo) {
          deviceHardware = [];

          if (results.mediaCaptureInfo.Microphones) {
            deviceHardware.push("Microphones: " + results.mediaCaptureInfo.Microphones+"\n");
          }
  
          if (results.mediaCaptureInfo.Cameras) {
            deviceHardware.push("Cameras: " + results.mediaCaptureInfo.Cameras+"\n");
          }    
  
          if (results.mediaCaptureInfo.Speakers) {
            deviceHardware.push("Speakers: " + results.mediaCaptureInfo.Speakers);
          } 

          deviceHardware = deviceHardware.join(" ");   

        }
    
        container.appendChild(createGroup("deviceHardware","",deviceHardware,"continuation"));

      } catch(e) { console.log(e); }


      // Operating System
      var deviceOS = defaultValue;
      try {
        deviceOS = [];

        if (results.userAgentInfo.deviceVendor) {
          deviceOS.push(results.userAgentInfo.deviceVendor );
        } 

        if (results.userAgentInfo.os) {
          deviceOS.push(results.userAgentInfo.os + "\n");
        } 
        
        if (results.navigatorInfo.language) {
          deviceOS.push("Language: "+results.navigatorInfo.language);
        }         
        
        deviceOS = deviceOS.join(" ");
        container.appendChild(createGroup("deviceOS","Operating System",deviceOS,"wide"));
      } catch(e) {}


      // Browser 
      var deviceBrowser = defaultValue;
      try {
        deviceBrowser = [];
        
        if (results.userAgentInfo.browser) {
          deviceHardware.push(results.userAgentInfo.browser);
        }

        if (results.userAgentInfo.browser) {
          deviceHardware.push(results.userAgentInfo.browser);
        }        
        
        deviceBrowser = deviceBrowser.join(" "); 
        
        container.appendChild(createGroup("deviceBrowser","Browser",deviceBrowser));
      } catch(e) {}


      // Display
      var displayRes_HW = defaultValue;
      try {
        displayRes_HW = [];
        if (results.screenInfo.screenWidth && results.screenInfo.pixelRatio) {
          displayRes_HW.push(Math.round(results.screenInfo.screenWidth * results.screenInfo.pixelRatio) + " x " + Math.round(results.screenInfo.screenHeight * results.screenInfo.pixelRatio) + " pixels\n");
        }

        if (results.screenInfo.screenRatio) {
          displayRes_HW.push(results.screenInfo.screenRatio.approximated.str +" aspect ratio\n");
        }

        if (results.screenInfo.hasOwnProperty("touch")) {
          if (results.screenInfo.touch) {
            displayRes_HW.push("Touchscreen: yes");
          } else {
            displayRes_HW.push("Touchscreen: no");
          }
        }

        displayRes_HW = displayRes_HW.join(" ");
        container.appendChild(createGroup("displayRes_HW","Display",displayRes_HW));
      } catch(e) {}


      // Viewport
      var displayRes_CSS = defaultValue;
      if (results.screenInfo) {

        try {
          displayRes_CSS = [];
          displayRes_CSS.push("Viewport " + (results.screenInfo.screenWidth) + " x " + (results.screenInfo.screenHeight + " CSS pixels \n"));
          displayRes_CSS.push("Available " + (results.screenInfo.innerWidth) + " x " + (results.screenInfo.innerHeight + " CSS pixels\n"));
          if (results.screenInfo.pixelRatio >= 2) {
            displayRes_CSS.push("High resolution (@" + results.screenInfo.pixelRatio + "X)\n" );
          } 
          displayRes_CSS = displayRes_CSS.join(" ");
          container.appendChild(createGroup("displayRes_CSS","",displayRes_CSS,"continuation"));        
        } catch(e) {console.log(".---------------",e)}
  
      }


      // Orientation
      var displayOrientation = defaultValue;
      try {

        displayOrientation = [];        
        switch(results.screenInfo.orientation.defaultOrientation.toLowerCase()) {

          case "landscape":
            displayOrientation.push("Landscape by default");
          break;

          case "portrait":
            displayOrientation.push("Portrait by default");
          break;

        };

        var angle = results.screenInfo.orientation.currentOrientation;
        switch(angle) {

          case 0:
            displayOrientation.push("");
          break;

          case 180:
          case 360:
            displayOrientation[displayOrientation.length-1] +=",";
            displayOrientation.push("currently upside down");
          break;

          default:
            if (typeof angle == "number" ) {

              displayOrientation[displayOrientation.length-1] +=",";

              if (Math.abs(angle) > 180) {
                angle = 180 - angle;
              }

              if (angle < 0) {
                displayOrientation.push("currently rotated by " + Math.abs(angle) + " degrees to the right");
              } else {
                displayOrientation.push("currently rotated by " + Math.abs(angle) + " degrees to the left");
              }

            }
          break;

        }
        
        displayOrientation = displayOrientation.join(" ");
        container.appendChild(createGroup("displayOrientation","Orientation",displayOrientation,"wide"));

      } catch(e) {console.log(e);}


      // Connection
      var connectionInfo = defaultValue;
      try {

        connectionInfo = [];

        if (results.connectionInfo && results.connectionInfo.status) {
          if (results.connectionInfo.status.toLowerCase() == "connected") {
            
            connectionInfo.push("Connected");
            
            if (results.connectionInfo.speed) {
              connectionInfo.push("at "+results.connectionInfo.speed);
            }  
            
            if (results.connectionInfo.roundTripTime) {
              connectionInfo.push("with ~"+results.connectionInfo.roundTripTime+" latency\n");
            }              
            
            if (results.IPLookupInfo && results.IPLookupInfo.success && results.IPLookupInfo.data) {

              if (results.IPLookupInfo.query) {
                connectionInfo.push("IP address: "+results.IPLookupInfo.query+"\n");
              }

              if (results.IPLookupInfo.isp) {
                connectionInfo.push("Provider: "+results.IPLookupInfo.isp);
              } 
              if (results.IPLookupInfo.as) {
                connectionInfo.push("("+results.IPLookupInfo.as+")\n");
              } 
              
            }

          } else {
            connectionInfo.push("Disconnected");
          }

          connectionInfo = connectionInfo.join(" ");          
        }
        container.appendChild(createGroup("ConnectionInfo","Network",connectionInfo,"wide"));
      } catch(e) {console.log(e);}


      // Geolocation
      var locationInfo = defaultValue;
      try {
        
        locationInfo = [];

        if (results.IPLookupInfo && results.IPLookupInfo.success && results.IPLookupInfo.data) {

          if (results.IPLookupInfo.city) {
            locationInfo.push(results.IPLookupInfo.city);
          }

          if (results.IPLookupInfo.regionName) {
            if (results.IPLookupInfo.city) {
              locationInfo[locationInfo.length-1] +=",";
            }
            locationInfo.push(results.IPLookupInfo.regionName);
          }
          
          if (results.IPLookupInfo.country) {
            if (results.IPLookupInfo.city || results.IPLookupInfo.regionName) {
              locationInfo[locationInfo.length-1] +=",";
            }
            locationInfo.push(results.IPLookupInfo.country);
          }     
          
          locationInfo.push("\n");
          
          if (results.IPLookupInfo.lat) {
            locationInfo.push("Approximate location: " + results.IPLookupInfo.lat + " lat, " + results.IPLookupInfo.lon + " lon\n");
          }        
          
          locationInfo = locationInfo.join(" ");
          container.appendChild(createGroup("locationInfo","Geolocation",connectionInfo,"wide"));
        }

      } catch(e) {console.log(e);}    


      // Device Name
      var connectionInfo = defaultValue;
      try {
        connectionInfo = results.userAgentInfo.device;
        container.appendChild(createGroup("deviceName","Device name",connectionInfo,"wide"));
      } catch(e) {}

      return container;
  }

}
