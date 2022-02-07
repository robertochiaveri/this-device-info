module.exports = (function() {

  "use strict";

  if (typeof pointerType == "undefined") {
    var pointerType = "";
  } 
  var getPointerType = function(event) {

    console.log("detecting pointerType...",event.type);

    var onlyUnique = function(value, index, self) {
      return self.indexOf(value) === index;
    }

    if (typeof pointerType == "string") {
      if (pointerType.length == 0) {
        pointerType = [];            
      } else {
        pointerType = pointerType.split(", ");            
      }
    }

    switch (event.pointerType) {
      case 'mouse':
        pointerType.push("mouse or touchpad");
        break;
      case 'pen':
        pointerType.push("styus");
        break;
      case 'touch':
        pointerType.push("touchscreen");
        break;
      default:
        pointerType.push(event.pointerType);
    }

    pointerType = pointerType.filter(onlyUnique).join(", ");

    console.log("pointerType is "+pointerType);  

    return pointerType;

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
      
    }

    if (event && (event.type == "pointerdown" || event.type == "pointermove" || event.type == "scroll") && event.pointerType ) {
      uimode.pointerType = getPointerType(event);
    };  
    
  return uimode;
  }

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded","pointerdown","pointermove"]
  };
})();

