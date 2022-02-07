module.exports = (function() {

  "use strict";

  var getFPS = function() {
	  console.log("fps detection...");
    new Promise(function(resolve) {
      return requestAnimationFrame(function(t1) {
        return requestAnimationFrame(function(t2) {
          return resolve(1000 / (t2 - t1));
        });
      });
    }).then(function(fps) {
      console.log("fps detection completed");
      var screenFPSInfoEvent = new CustomEvent("__ScreenFPSInfoEvent", {
        detail: {
          fps: parseInt(fps)
        },
        bubbles: true,
        cancelable: true
      })
      dispatchEvent(screenFPSInfoEvent);  
    });
  };
  
  getFPS();

  var init = function(event) {
    if (event && event.type == "__ScreenFPSInfoEvent" && event.detail ) {
      return event.detail.fps;
    };
  }

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["__ScreenFPSInfoEvent"]
  };
})();
