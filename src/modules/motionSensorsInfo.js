module.exports = (function() {

  "use strict";

  /* private vars and methods... */

  var init = function(event) {

    if (window.DeviceMotionEvent && event) {

      try {
        var accelerometer, acceleration, includingGravity;

        if (!!event.acceleration) {
          acceleration = event.acceleration;
          includingGravity = false;
        } else {
          acceleration = event.accelerationIncludingGravity;
          includingGravity = true;
        }

        if(acceleration.x || acceleration.y || acceleration.z) {
          if (acceleration.x !== null && acceleration.y !== null && acceleration.z !== null ) {
            return {
              x: acceleration.x.toFixed(2),
              y: acceleration.y.toFixed(2),
              z: acceleration.z.toFixed(2),
              includingGravity: includingGravity
            };
          }
        }

      } catch(e) {
        console.log("ERROR: Unrecognized event format",e,event);
      }

    }



  }

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["devicemotion"]
  };

})();
