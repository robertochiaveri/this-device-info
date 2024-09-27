module.exports = (function() {

  "use strict";

  /* private vars and methods... */

  function getMagnetometer(sensor) {

    var MagnetometerInfoEvent,
        detail = {
            x: sensor.x.toFixed(2),
            y: sensor.y.toFixed(2),
            z: sensor.z.toFixed(2)
        };

    MagnetometerInfoEvent = new CustomEvent("__MagnetometerInfoEvent", {
      detail: detail,
      bubbles: true,
      cancelable: true
    });
    dispatchEvent(MagnetometerInfoEvent);

    return detail;

  }


  var init = function(event) {

    if (typeof window.Magnetometer !== "undefined") {
      if (typeof event !== "undefined") {
        if (typeof event.detail !== "undefined" && event.type == "__MagnetometerInfoEvent") {
          return event.detail;
        }
      }
    } else {
      return {
        error: "Magnetometer sensor is not supported"
      }
    }
  };


  // Magnetometer sensor 
  if (typeof window.Magnetometer !== "undefined") {
  
    console.log("Magnetometer seems supported...");

    var MagSensor = new Magnetometer({frequency:10});

    console.log("...adding Magnetometer event listener");
    MagSensor.addEventListener("reading",function(e) { getMagnetometer(MagSensor); } );
    console.log("...Starting Magnetometer sensor");
    MagSensor.start();  
    
  } else {
    console.log("Magnetometer is not supported")        
  }



  /* public methods... */
  return {
    init : init,
    defaultListeners : ["__MagnetometerInfoEvent","reading"]
  };
  
})();
