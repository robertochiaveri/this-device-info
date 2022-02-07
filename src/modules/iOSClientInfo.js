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
  var ProMotion = false;
  var fps = 0;

  var checkWebGL = function(fragment) {
    if (!webgl) { 
      return false; 
    } else {
      return (webgl.indexOf(fragment) >= 0)
    }
  }
  
  var checkProMotion = function() {
    console.log("Checking for ProMotion...");
    new Promise(function(resolve) {
      return requestAnimationFrame(function(t1) {
        return requestAnimationFrame(function(t2) {
          return resolve(1000 / (t2 - t1));
        });
      });
    }).then(function(fps) {
      console.log("ProMotion detection completed");
      alert("fps detected: "+fps);
      var proMotionInfoEvent = new CustomEvent("__ProMotionInfoEvent", {
        detail: {
          webgl: webgl,
          fps: fps,
          ProMotion : (parseInt(fps) > 75),
        },
        bubbles: true,
        cancelable: true
      });
      dispatchEvent(proMotionInfoEvent);  
    });
  }

  var init = function(event) {

    if (event && event.detail) 
    {
      if (event.type == "__WebGLRendererInfoEvent") {
         webgl = event.detail.toLowerCase();    
         checkProMotion();
      };
      if (event.type == "__ProMotionInfoEvent") {
         webgl = event.detail.webgl;
         fps = event.detail.fps;
         ProMotion = event.detail.ProMotion;
      }
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
        name: "Apple iPhone Mini",
        type: "Smartphone",  
        release_date: "November 2020",                    
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 812),
          (window.devicePixelRatio == 3),
          checkWebGL("a14 gpu")
        ]
      },    
      {
        name: "Apple iPhone 12",
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
       
      {
        name: "Apple iPhone 13 Pro",
        type: "Smartphone",  
        release_date: "September 2021",                    
        tests: [
          (window.screen.width == 390 || window.screen.width == 375),
          (window.screen.height == 844 || window.screen.height == 812),
          (window.devicePixelRatio == 3),
          checkWebGL("a15 gpu"),
          ProMotion
        ]
      },    
      {
        name: "Apple iPhone 13 Pro Max",
        type: "Smartphone",  
        release_date: "September 2021",            
        tests: [
          (window.screen.width == 428),
          (window.screen.height == 926),
          (window.devicePixelRatio == 3),
          checkWebGL("a15 gpu"),
          ProMotion
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
          release_date: devices[i].release_date,
          form_factory: devices[i].type,
          zoom: !!devices[i].zoom,
          gpu_renderer: webgl,
          fps: fps,
          pro_motion: ProMotion
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
    defaultListeners : ["__WebGLRendererInfoEvent","__ProMotionInfoEvent"]
  };
})();

