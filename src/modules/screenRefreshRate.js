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
  
  /* getFPS(); */
	
'use strict';

  var previousTimestamp, divInterval, divFPS;

  var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  var rafLoopCount = 0;
  var rafLoopMax = 30;
  var rafLoop = function rafLoop(timestamp) {
      var interval = timestamp - previousTimestamp;
      var fps = 1000 / interval;
      previousTimestamp = timestamp;
      if (rafLoopCount >= rafLoopMax) {
        console.log("fps detection completed");
        var screenFPSInfoEvent = new CustomEvent("__ScreenFPSInfoEvent", {
          detail: {
            fps: parseInt(fps)
          },
          bubbles: true,
          cancelable: true
        })
        dispatchEvent(screenFPSInfoEvent);  
      } else {
        rafLoopCount++;
        raf(rafLoop);
      }
  };

  // This is run first to set the previousTimestamp variable with an initial value, and then call the rafLoop function.
  raf(function (timestamp) {
      previousTimestamp = timestamp;
      raf(rafLoop);
  });	

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
