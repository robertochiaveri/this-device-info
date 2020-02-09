module.exports = (function() {

  "use strict";

  /* private vars and methods... */
  var otherFunction = function () {
  }


  var init = function(event) {

    var uimode = {};

    if (typeof window.matchMedia == "function") {
        
        if (window.matchMedia("screen and (prefers-color-scheme: dark)").matches) {
            uimode.theme = "dark ";
        }

        if (window.matchMedia("screen and (prefers-color-scheme: light)").matches) {
            uimode.theme = "light";
        }  

        return uimode;

    }

  }

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded"]
  };
})();
