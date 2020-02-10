module.exports = (function() {

  "use strict";

  /* private vars and methods... */

  function getAmbientLight(event) {

    var ambientLightInfoEvent,
        detail = {
          luminosity: false,
          illuminance: false
        };

    if (event && event.target && typeof event.target.illuminance !== "undefined") {
      detail.illuminance = event.target.illuminance + " lux";
    } 

    // ambient light media queries
    if (typeof window.matchMedia == "function") {
              
      if (window.matchMedia("(luminosity: dim)").matches) {
        detail.luminosity = "dark";
      }

      if (window.matchMedia("(luminosity: normal)").matches) {
        detail.luminosity = "bright";
      }

      if (window.matchMedia("(luminosity: washed)").matches) {
        detail.luminosity = "very bright";
      }

    }

    ambientLightInfoEvent = new CustomEvent("__AmbientLightInfoEvent", {
      detail: detail,
      bubbles: true,
      cancelable: true
    });
    dispatchEvent(ambientLightInfoEvent);

    return detail;

  }


  var init = function(event) {

    if (typeof event !== "undefined") {
      if (typeof event.detail !== "undefined" && event.type == "__AmbientLightInfoEvent") {
        return event.detail;
      }
    }

  };


  // ambient light sensor 
  if ("AmbientLightSensor" in window) {
  
    console.log("AmbientLight seems supported...");

    var lightSensor = new AmbientLightSensor({frequency:10});

    console.log("...adding AmbientLight event listener");
    lightSensor.addEventListener("reading",getAmbientLight);
    console.log("...Starting AmbientLight sensor");
    lightSensor.start();


  } else {
    console.log("AmbientLightSensor is not supported")        
  }



  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded","__AmbientLightInfoEvent","reading"]
  };
  
})();
