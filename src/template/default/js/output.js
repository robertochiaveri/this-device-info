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

      function capitalize(string) {
        return string[0].toUpperCase() +  string.slice(1);
      }

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


      // Device Name
      var deviceName = defaultValue;
      
      try {

        deviceName = {};

        // Complete device name and release date
        if (results.userAgentInfo) {

          if (results.userAgentInfo && results.userAgentInfo.osName) {
            deviceName.complete_name = "Generic " + results.userAgentInfo.osName + " device";
          }          

          if (results.userAgentInfo.device) {
            deviceName.complete_name = results.userAgentInfo.device;
            deviceName.os_type = results.userAgentInfo.osName + " device";
          }
          
        }
 
        if (results.UALookupInfo && results.UALookupInfo.success && results.UALookupInfo.data) { // if ualookup
 
          if (results.UALookupInfo.data.form_factor) { // if form_factor
 
            if (results.userAgentInfo && results.userAgentInfo.browser && results.userAgentInfo.osName) { // if device os and browser

              deviceName.os_type = results.userAgentInfo.osName + " " + results.UALookupInfo.data.form_factor.toLowerCase();

              if (results.UALookupInfo.data.complete_device_name) {

                if (results.UALookupInfo.data.complete_device_name.indexOf(results.userAgentInfo.browser) == -1) { // device name is not browser name

                  // complete device name from ualookup if reliable
                  deviceName.complete_name = results.UALookupInfo.data.complete_device_name; 

                } // device name is not browser name

              } // if ualookup device name
            
            } // if device os and browser

          } // if form factor

          // relase date 
          if (deviceName.complete_name.toLowerCase().indexOf("generic") == -1 ) { // if not generic
            
            if (results.UALookupInfo.data.release_date) { // if release date 

              deviceName.date = "Released ";  
  
              var release_date = results.UALookupInfo.data.release_date.split("_");
              var release_year = release_date[0];
              var release_month = release_date[1];
  
              if (release_month) { // if month
                deviceName.date += release_month + " ";   
              }              
  
              if (release_year) { // if year
                deviceName.date += release_year;  
              }
  
            } // if release_date
            
          } // if device name is not generic

        } // if ualookup

        var complete_device_name = "";        

        if (deviceName.complete_name) {
          complete_device_name += deviceName.complete_name;
        }

        if (deviceName.os_type) {
          complete_device_name += "\n"+deviceName.os_type
        }

        if (deviceName.date) {
          complete_device_name += "\n"+deviceName.date
        }        
  
        container.appendChild(createGroup("deviceName","Device name",complete_device_name,"wide"));

      } catch(e) {console.log(e); alert(e.toString()); }    


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

        if (results.screenInfo.pixelRatio >= 2) {
          displayRes_HW.push("High resolution (@" + (Math.round(results.screenInfo.pixelRatio * 100) / 100) + "X)\n" );
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
          if (results.screenInfo.scrollY > 0) {
            displayRes_CSS.push("Scrolled " + Math.ceil(results.screenInfo.scrollY) + " pixels" );
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
     
        if (results.gyroscopeInfo && results.gyroscopeInfo.alpha) {
          
          displayOrientation.push("\nGyroscope rotation:");
          displayOrientation.push("α " + results.gyroscopeInfo.alpha+",");
          displayOrientation.push("β " + results.gyroscopeInfo.beta+",");
          displayOrientation.push("𝛾 " + results.gyroscopeInfo.gamma);          
        }

        if (results.motionSensorsInfo && results.motionSensorsInfo.x) {
          
          displayOrientation.push("\nMotion:");
          displayOrientation.push("x " + results.motionSensorsInfo.x+",");
          displayOrientation.push("y " + results.motionSensorsInfo.y+",");
          displayOrientation.push("z " + results.motionSensorsInfo.z);          
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

            if (results.connectionInfo.connectionType) {
              switch(results.connectionInfo.connectionType.toLowerCase()) {
                case "cellular": 
                  connectionInfo.push("(mobile data)");
                  break;
                case "wifi": 
                  connectionInfo.push("(Wi-Fi)");
                  break;
                case "bluetooth": 
                  connectionInfo.push("(Bluetooth)");
                  break;
                case "ethernet": 
                  connectionInfo.push("(LAN cable)");
                  break;
                case "wimax": 
                  connectionInfo.push("(WiMAX)");
                  break;
                default:
                  break;
              }

            }              

            if (results.connectionInfo.speed) {
              connectionInfo.push("at "+results.connectionInfo.speed);
            }  
            
            if (results.connectionInfo.roundTripTime) {
              connectionInfo.push("with ~"+results.connectionInfo.roundTripTime+" latency\n");
            }              
            
            if (results.IPLookupInfo && results.IPLookupInfo.success && results.IPLookupInfo.data) {

              if (results.IPLookupInfo.data.query) {
                connectionInfo.push("IP address: "+results.IPLookupInfo.data.query+"\n");
              }

              if (results.IPLookupInfo.data.isp) {
                connectionInfo.push("Provider: "+results.IPLookupInfo.data.isp);
              } 
              if (results.IPLookupInfo.data.as) {
                connectionInfo.push("("+results.IPLookupInfo.data.as+")");
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

          if (results.IPLookupInfo.data.city) {
            locationInfo.push(results.IPLookupInfo.data.city);
          }

          if (results.IPLookupInfo.data.regionName) {
            if (results.IPLookupInfo.data.city) {
              locationInfo[locationInfo.length-1] +=",";
            }
            locationInfo.push(results.IPLookupInfo.data.regionName);
          }
          
          if (results.IPLookupInfo.data.country) {
            if (results.IPLookupInfo.data.city || results.IPLookupInfo.data.regionName) {
              locationInfo[locationInfo.length-1] +=",";
            }
            locationInfo.push(results.IPLookupInfo.data.country);
          }     
          
          locationInfo.push("\n");
          
          if (results.IPLookupInfo.data.lat) {
            locationInfo.push("Approximate location: " + results.IPLookupInfo.data.lat + " lat, " + results.IPLookupInfo.data.lon + " lon");
          }        
          
          locationInfo = locationInfo.join(" ");
          container.appendChild(createGroup("locationInfo","Geolocation",locationInfo,"wide"));
        }

      } catch(e) {console.log(e); container.appendChild(createGroup("errorInfo","Error",e,"wide")); }    

      return container;

  }

}
