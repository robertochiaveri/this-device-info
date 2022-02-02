module.exports = (function(){

      "use strict";

      /* private vars and methods... */


      var init = function() {
        return {
          phonegapVersion:  window.phonegap,
          deviceName:       window.device,
          UUID:             window.uuid
        }
      }

      /* public methods... */
      return {
        init : init,
        defaultListeners : ["deviceready"]
      };
  })()
