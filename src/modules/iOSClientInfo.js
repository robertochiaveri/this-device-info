module.exports = (function() {

  "use strict";

  if (!!navigator.platform && !(/iPad|iPhone|iPod/.test(navigator.platform))) {
    return false;
  }  

  var getRenderer = require("../lib/51degrees/renderer.min.js");

  getRenderer(function(renderer) { 
    
    console.log("WebGL detection getRenderer() completed",renderer);

    var WebGLRendererInfoEvent = new CustomEvent("__WebGLRendererInfoEvent", {
      detail: renderer,
      bubbles: true,
      cancelable: true
    });
    
    setTimeout(function() { 
      console.log("delayed getRenderer event dispatched",renderer);
      dispatchEvent(WebGLRendererInfoEvent); 
    },500);
    
  });


  /* private vars and methods... */


  var webgl = false;

  var checkWebGL = function(fragment) {
    if (!webgl) { 
      return false; 
    } else {
      return (webgl.indexOf(fragment) >= 0)
    }
  }
  

  var init = function(event) {

    if (typeof event == "undefined" || typeof event.detail == "undefined" || event.type !== "__WebGLRendererInfoEvent") {
      return false; 
    } else {
      webgl = event.detail.toLowerCase();    
    }
    

    var devices = [
      {
        name: "Apple iPhone 5 series",
        type: "Smartphone",  
        release_date: "September 2013",      
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
        release_date: "September 2014",
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
        release_date: "September 2014",        
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
        release_date: "September 2014",        
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
        release_date: "September 2014",        
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
        release_date: "September 2015",        
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
        release_date: "September 2015",        
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
        release_date: "September 2015",        
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 667),
          (window.devicePixelRatio == 3),
          checkWebGL("a9 gpu")
        ]
      },
      {
        name: "Apple iPhone 6S Plus",
        release_date: "September 2015",        
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
        release_date: "September 2016",        
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
        release_date: "September 2016",        
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
        release_date: "September 2016",        
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
        release_date: "September 2016",        
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
        release_date: "September 2017",             
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
        release_date: "September 2017",                
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
        release_date: "September 2017",             
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
        release_date: "September 2017",              
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
        release_date: "November 2017",             
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
        release_date: "September 2018",            
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
        release_date: "September 2018",            
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
        release_date: "September 2018",                    
        tests: [
          (window.screen.width == 414),
          (window.screen.height == 896),
          (window.devicePixelRatio == 2),
          checkWebGL("a12 gpu")
        ]
      },    
      

      {
        name: "Apple iPhone 11",
        type: "Smartphone",  
        release_date: "September 2018",                    
        tests: [
          (window.screen.width == 414),
          (window.screen.height == 896),
          (window.devicePixelRatio == 2),
          checkWebGL("a13 gpu")
        ]
      },
      {
        name: "Apple iPhone 11 Pro",
        type: "Smartphone",  
        release_date: "September 2019",            
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 812),
          (window.devicePixelRatio == 3),
          checkWebGL("a13 gpu")
        ]
      },
      {
        name: "Apple iPhone 11 Pro Max",
        type: "Smartphone",  
        release_date: "September 2019",            
        tests: [
          (window.screen.width == 414),
          (window.screen.height == 896),
          (window.devicePixelRatio == 3),
          checkWebGL("a13 gpu")
        ]
      },
      

      {
        name: "Apple iPhone SE (2020)",
        type: "Smartphone",       
        release_date: "April 2020",             
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 667),
          (window.devicePixelRatio == 2),
          checkWebGL("a13 gpu")
        ]
      },      
      

      {
        name: "Apple iPhone 12 mini",
        type: "Smartphone",  
        release_date: "November 2020",                    
        tests: [
          (window.screen.width == 360),
          (window.screen.height == 780),
          (window.devicePixelRatio == 3),
          checkWebGL("a14 gpu")
        ]
      },    
      {
        name: "Apple iPhone 12 / 12 Pro",
        type: "Smartphone",  
        release_date: "October 2020",                    
        tests: [
          (window.screen.width == 390 || window.screen.width == 375),
          (window.screen.height == 844 || window.screen.height == 812),
          (window.devicePixelRatio == 3),
          checkWebGL("a14 gpu")
        ]
      },    
      {
        name: "Apple iPhone 12 Pro Max",
        type: "Smartphone",  
        release_date: "November 2020",            
        tests: [
          (window.screen.width == 428),
          (window.screen.height == 926),
          (window.devicePixelRatio == 3),
          checkWebGL("a14 gpu")
        ]
      },   
      
  
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
          release_date: devices[i].release_date,
          form_factory: devices[i].type,
          zoom: !!devices[i].zoom,
          gpu_renderer: event.detail
        }
      } 
      
    }
    return {
      fail: ":( An unrecognized device width a "+window.screen.width+"x"+window.screen.height+" screen @"+window.devicePixelRatio+"X",
      gpu_renderer: event.detail
    }

  }

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["__WebGLRendererInfoEvent"]
  };
})();

