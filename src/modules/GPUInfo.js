module.exports = (function() {

  "use strict";

  /*

    not as reliable as 51degrees script (in /lib/) --- it reports the wrong GPU for many devices..

   */


  /* private vars and methods... */

  var detectGPU = require('./../node_modules/detect-gpu/dist/detect-gpu.umd.js');

  detectGPU.getGPUTier().then(function(GPUInfo){
      
    console.log("GPUInfo has completed the GPU benchmark",GPUInfo)
    var GPUInfoEvent = new CustomEvent("__GPUInfoEvent", {
      detail: GPUInfo,
      bubbles: true,
      cancelable: true
    });
    dispatchEvent(GPUInfoEvent);

  })

  var init = function(event) {

    if (typeof event !== "undefined") {
      if (typeof event.detail !== "undefined" && event.type == "__GPUInfoEvent") {
        return event.detail;
      }
    }

  };

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["__GPUInfoEvent"]
  };
})();
