module.exports = (function(){

      "use strict";

      /* private vars and methods... */

      // ambient light sensor --- almost deprecated in 2020
      if ("AmbientLightSensor" in window) {
        try {

          var lightSensor = new AmbientLightSensor({frequency: 1}),
              ambientLightInfoEvent,
              detail = {};

          lightSensor.addEventListener('reading', function(event) {

            console.log("--- AmbientLightInfoEvent ---",event);
            alert("lux")

            if (event.target) {

              if (event.target.state) {
                detail.state = event.target.state;
              }

              if (event.target.illuminance) {
                detail.illuminance = event.target.illuminance + " lux";
              }

              if (event.target.reading) {
                if (event.target.reading.illuminance) {
                  detail.illuminance = event.target.reading.illuminance + " lux";
                }
              }

            }

            lightSensor.start();
            console.log("Starting AmbientLight sensor",lightSensor);
  
            ambientLightInfoEvent = new CustomEvent("__AmbientLightInfoEvent", {
              detail: detail,
              bubbles: true,
              cancelable: true
            });
            dispatchEvent(ambientLightInfoEvent);

          });



        } catch(e) {
          console.log("ERROR: can't access AmbientLightSensor",e)
        }
      } else {
        console.log("ERROR: AmbientLightSensor is not supported")        
      }

      
      var init = function(event) {

        // var ambientLight = {};

        // if (typeof window.matchMedia == "function") {
          
        //   if (window.matchMedia("(luminosity: dim)").matches) {
        //     ambientLight.luminosity = "low";
        //   }

        //   if (window.matchMedia("(luminosity: normal)").matches) {
        //     ambientLight.luminosity = "normal";
        //   }

        //   if (window.matchMedia("(luminosity: washed)").matches) {
        //     ambientLight.luminosity = "high";
        //   }

        // }

        // if (event && event.type) {

        //   switch (event.type) {

        //     case "devicelight":
        //       if (event.value) {
        //         ambientLight["Intensity"] = event.value +" lux";
        //       }
        //       break;

        //     case "lightlevel":
        //       if (event.lux) {
        //         ambientLight["Level"] = event.value;
        //       }
        //       break;

        //     case "__AmbientLightInfoEvent":
        //       if (event.detail) {

        //         if (event.detail.illuminance) {
        //           ambientLight["Illuminance"] = event.detail.illuminance;
        //         }
        //         if (event.detail.state) {
        //           ambientLight["Sensor"] = event.detail.state;
        //         }
        //       }
        //     break;

        //     default:
        //       break;
        //   }

        //   return ambientLight;

        // }

      }

      /* public methods... */
      return {
        init : init,
        defaultListeners : ["__AmbientLightInfoEvent","devicelight","lightlevel"]
      };
  })()
