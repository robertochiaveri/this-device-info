module.exports = (function() {

  "use strict";

  /* private vars and methods... */

  var init = function(event) {

    if (window.DeviceOrientationEvent && event) {

      try {

        if (event.gamma || event.beta || event.alpha) {
          if (event.gamma !== null && event.beta !== null && event.alpha !== null ) {
            return {
              alpha : event.alpha.toFixed(2),
              beta : event.beta.toFixed(2),
              gamma : event.gamma.toFixed(2)
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
    defaultListeners : ["deviceorientation"]
  };

})();
