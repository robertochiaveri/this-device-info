module.exports = (function() {

  "use strict";

  var getRenderer = require("../lib/51degrees/renderer.min.js");
  
  getRenderer(function(renderer) { 
    
    var WebGLRendererInfoEvent;
    WebGLRendererInfoEvent = new CustomEvent("__WebGLRendererInfoEvent", {
      detail: renderer,
      bubbles: true,
      cancelable: true
    });
    dispatchEvent(WebGLRendererInfoEvent);
    
  });


  /* private vars and methods... */

  var webgl = false;

  var checkWebGL = function(fragment) {
    if (!webgl) { 
      return false; 
    } else {
      return webgl.rendererUnmasked && (webgl.rendererUnmasked.indexOf(fragment) >= 0)
    }
  }
  

  var init = function(event) {

    if (typeof event !== "undefined") {
      if (typeof event.detail !== "undefined" || event.type == "__WebGLRendererInfoEvent") {
        webgl = event.detail.toLowerCase();
      }
    }

    if (!!navigator.platform && !(/iPad|iPhone|iPod/.test(navigator.platform))) {
      return false;
    }

    var devices = [
      {
        name: "Apple iPhone 5",
        type: "Smartphone",
        tests: [
          (window.screen.width == 320),
          (window.screen.height == 568),
          (window.devicePixelRatio == 2),
          checkWebGL("543") 
        ]
      },
      {
        name: "Apple iPhone 5S",
        type: "Smartphone",        
        tests: [
          (window.screen.width == 320),
          (window.screen.height == 568),
          (window.devicePixelRatio == 2),
          checkWebGL("a7 gpu")
        ]
      },
  
  
      {
        name: "Apple iPhone 6",
        type: "Smartphone",  
        zoom: true,      
        tests: [
          (window.screen.width == 320),
          (window.screen.height == 568),
          (window.devicePixelRatio == 2),
          checkWebGL("a8 gpu")
        ]
      },
      {
        name: "Apple iPhone 6",
        type: "Smartphone",  
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 667),
          (window.devicePixelRatio == 2),
          checkWebGL("a8 gpu")
        ]
      },
      {
        name: "Apple iPhone 6 Plus",
        type: "Smartphone",  
        zoom: true,
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 667),
          (window.devicePixelRatio == 3),
          checkWebGL("a8 gpu")
        ]
      },
      {
        name: "Apple iPhone 6 Plus",
        type: "Smartphone",  
        tests: [
          (window.screen.width == 414),
          (window.screen.height == 736),
          (window.devicePixelRatio == 3),
          checkWebGL("a8 gpu")
        ]
      },
      
      
      {
        name: "Apple iPhone 6S",
        type: "Smartphone",  
        zoom: true,      
        tests: [
          (window.screen.width == 320),
          (window.screen.height == 568),
          (window.devicePixelRatio == 2),
          checkWebGL("a9 gpu")
        ]
      },
      {
        name: "Apple iPhone 6S",
        type: "Smartphone",  
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 667),
          (window.devicePixelRatio == 2),
          checkWebGL("a9 gpu")
        ]
      },
      {
        name: "Apple iPhone 6S Plus",
        type: "Smartphone",  
        zoom: true,
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 667),
          (window.devicePixelRatio == 3),
          checkWebGL("a9 gpu")
        ]
      },
      {
        name: "Apple iPhone 6S Plus",
        type: "Smartphone",  
        tests: [
          (window.screen.width == 414),
          (window.screen.height == 736),
          (window.devicePixelRatio == 3),
          checkWebGL("a9 gpu")
        ]
      },
  
      
      {
        name: "Apple iPhone 7",
        type: "Smartphone",  
        zoom: true,      
        tests: [
          (window.screen.width == 320),
          (window.screen.height == 568),
          (window.devicePixelRatio == 2),
          checkWebGL("a10 gpu")
        ]
      },
      {
        name: "Apple iPhone 7",
        type: "Smartphone",  
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 667),
          (window.devicePixelRatio == 2),
          checkWebGL("a10 gpu")
        ]
      },
      {
        name: "Apple iPhone 7 Plus",
        type: "Smartphone",  
        zoom: true,
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 667),
          (window.devicePixelRatio == 3),
          checkWebGL("a10 gpu")
        ]
      },
      {
        name: "Apple iPhone 7 Plus",
        type: "Smartphone",  
        tests: [
          (window.screen.width == 414),
          (window.screen.height == 736),
          (window.devicePixelRatio == 3),
          checkWebGL("a10 gpu")
        ]
      },


      {
        name: "Apple iPhone 8",
        type: "Smartphone",  
        zoom: true,      
        tests: [
          (window.screen.width == 320),
          (window.screen.height == 568),
          (window.devicePixelRatio == 2),
          checkWebGL("a11 gpu")
        ]
      },
      {
        name: "Apple iPhone 8",
        type: "Smartphone",  
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 667),
          (window.devicePixelRatio == 2),
          checkWebGL("a11 gpu")
        ]
      },
      {
        name: "Apple iPhone 8 Plus",
        type: "Smartphone",  
        zoom: true,
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 667),
          (window.devicePixelRatio == 3),
          checkWebGL("a11 gpu")
        ]
      },
      {
        name: "Apple iPhone 8 Plus",
        type: "Smartphone",  
        tests: [
          (window.screen.width == 414),
          (window.screen.height == 736),
          (window.devicePixelRatio == 3),
          checkWebGL("a11 gpu")
        ]
      },  
      
      {
        name: "Apple iPhone X",
        type: "Smartphone",  
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 812),
          (window.devicePixelRatio == 3),
          checkWebGL("a11 gpu")
        ]
      },
  
      {
        name: "Apple iPhone XS",
        type: "Smartphone",  
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 812),
          (window.devicePixelRatio == 3),
          checkWebGL("a12 gpu")
        ]
      },

      {
        name: "Apple iPhone XS Max",
        type: "Smartphone",  
        tests: [
          (window.screen.width == 414),
          (window.screen.height == 896),
          (window.devicePixelRatio == 3),
          checkWebGL("a12 gpu")
        ]
      }, 
      {
        name: "Apple iPhone XR",
        type: "Smartphone",  
        tests: [
          (window.screen.width == 414),
          (window.screen.height == 896),
          (window.devicePixelRatio == 2),
          checkWebGL("a12 gpu")
        ]
      }     
  
    ];
    
    var ok;
    for (var i = 0; i < devices.length; i++) {
      ok = 0;
      for (var j = 0; j < devices[i].tests.length; j++) {
        if (!devices[i].tests[j]) { continue; }
        ok++;
      }
      if (ok == devices[i].tests.length) {
        return {
          complete_device_name : devices[i].name,
          form_factory: devices[i].type,
          zoom: !!devices[i].zoom
        }
      }
    }
    return;
  }

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["__WebGLRendererInfoEvent"]
  };
})();

