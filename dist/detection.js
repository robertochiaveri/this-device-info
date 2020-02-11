(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

window.thisDeviceInfo = require("./thisDeviceInfo");

/*

  USAGE:
  ======

  1. for each module needed, repeat:
  ----------------------------------
    thisDeviceInfo.loadModule(
      moduleName [string],
      module [function],
      (optional) listenersList [array]
    );


  2. finally:
  -----------
    thisDeviceInfo.init({
      throttleInterval: [number] milliseconds
      callbackFn: [function] a callback called at every update cycle to display output
    });


  3. optionally:
  --------------
    add #debug to the URL to disp()lay raw JSON output

*/

thisDeviceInfo.loadModule("navigatorInfo", require('./modules/navigatorInfo'));

thisDeviceInfo.loadModule("screenInfo", require('./modules/screenInfo'));

thisDeviceInfo.loadModule("gyroscopeInfo", require('./modules/gyroscopeInfo'));

thisDeviceInfo.loadModule("motionSensorsInfo", require('./modules/motionSensorsInfo'));

thisDeviceInfo.loadModule("webGLInfo", require('./modules/webGLInfo'));

thisDeviceInfo.loadModule("phonegapDeviceInfo", require('./modules/phonegapDeviceInfo'));

thisDeviceInfo.loadModule("batteryInfo", require('./modules/batteryInfo'));

thisDeviceInfo.loadModule("connectionInfo", require('./modules/connectionInfo'));

thisDeviceInfo.loadModule("mediaCaptureInfo", require('./modules/mediaCaptureInfo'));

thisDeviceInfo.loadModule("ambientLightInfo", require('./modules/ambientLightInfo'));

thisDeviceInfo.loadModule("userAgentInfo", require('./modules/userAgentInfo'));

thisDeviceInfo.loadModule("UALookupInfo", require('./modules/uaLookupInfo'));

thisDeviceInfo.loadModule("IPLookupInfo", require('./modules/ipLookupInfo'));

thisDeviceInfo.loadModule("UIInfo", require('./modules/uiModeInfo'));

thisDeviceInfo.init({
  callbackFn: require("./template/default/js/output")
});

},{"./modules/ambientLightInfo":6,"./modules/batteryInfo":7,"./modules/connectionInfo":8,"./modules/gyroscopeInfo":9,"./modules/ipLookupInfo":10,"./modules/mediaCaptureInfo":11,"./modules/motionSensorsInfo":12,"./modules/navigatorInfo":13,"./modules/phonegapDeviceInfo":14,"./modules/screenInfo":15,"./modules/uaLookupInfo":16,"./modules/uiModeInfo":17,"./modules/userAgentInfo":18,"./modules/webGLInfo":19,"./template/default/js/output":21,"./thisDeviceInfo":22}],2:[function(require,module,exports){
module.exports = function(filename,filetype) {

  var id = filename.replace(/[^a-z0-9]/gi, '_').toLowerCase();

  if (!document.getElementById(id)) {
    
    switch (filetype) {

      case "js": 
        var fileref=document.createElement('script');
        fileref.setAttribute("id",id);
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", filename);
      break;

      case "css":
        var fileref=document.createElement("link");
        fileref.setAttribute("id", id);
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
      break;

    };
    
    console.log("injecting " + filename + " as " + id);
    document.getElementsByTagName("head")[0].appendChild(fileref);
  }
};

},{}],3:[function(require,module,exports){
"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(t){return 10>t?"0"+t:t}function this_value(){return this.valueOf()}function quote(t){return rx_escapable.lastIndex=0,rx_escapable.test(t)?'"'+t.replace(rx_escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,u,f,a=gap,i=e[t];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(t)),"function"==typeof rep&&(i=rep.call(e,t,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,f=[],"[object Array]"===Object.prototype.toString.apply(i)){for(u=i.length,r=0;u>r;r+=1)f[r]=str(r,i)||"null";return o=0===f.length?"[]":gap?"[\n"+gap+f.join(",\n"+gap)+"\n"+a+"]":"["+f.join(",")+"]",gap=a,o}if(rep&&"object"==typeof rep)for(u=rep.length,r=0;u>r;r+=1)"string"==typeof rep[r]&&(n=rep[r],o=str(n,i),o&&f.push(quote(n)+(gap?": ":":")+o));else for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o=str(n,i),o&&f.push(quote(n)+(gap?": ":":")+o));return o=0===f.length?"{}":gap?"{\n"+gap+f.join(",\n"+gap)+"\n"+a+"}":"{"+f.join(",")+"}",gap=a,o}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","  ":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;r>n;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n=walk(o,r),void 0!==n?o[r]=n:delete o[r]);return reviver.call(t,e,o)}var j;if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();
},{}],4:[function(require,module,exports){
module.exports = function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last,
      deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date,
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
};
},{}],5:[function(require,module,exports){
module.exports = function(url, callback, method, params, timeout) {

    console.log("**** Calling " + url + "...");

    if (!method) { method = "GET"; }
    if (!params) { params = null; }

    var xmlHttp = new XMLHttpRequest();
    xmlHttp._url = url;
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
          console.log("**** Async request to " + this._url + " received a response");
          callback(xmlHttp.responseText);
        } else {
          console.log("**** Async request to " + this._url + " FAILED (" + xmlHttp.status + ")");
        }
      }
    };
    xmlHttp.open(method, url, true); // true for asynchronous
    xmlHttp.timeout = timeout || 5000;
    xmlHttp.send(params);

}

},{}],6:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  /* private vars and methods... */

  function getAmbientLight(event) {

    var ambientLightInfoEvent,
        detail = {
          luminosity: false,
          illuminance: false
        };

    if (event && event.target && typeof event.target.illuminance !== "undefined") {
      detail.illuminance = event.target.illuminance + " lux";
    } 

    // ambient light media queries
    if (typeof window.matchMedia == "function") {
              
      if (window.matchMedia("(luminosity: dim)").matches) {
        detail.luminosity = "dark";
      }

      if (window.matchMedia("(luminosity: normal)").matches) {
        detail.luminosity = "bright";
      }

      if (window.matchMedia("(luminosity: washed)").matches) {
        detail.luminosity = "very bright";
      }

    }

    ambientLightInfoEvent = new CustomEvent("__AmbientLightInfoEvent", {
      detail: detail,
      bubbles: true,
      cancelable: true
    });
    dispatchEvent(ambientLightInfoEvent);

    return detail;

  }


  var init = function(event) {

    if (typeof event !== "undefined") {
      if (typeof event.detail !== "undefined" && event.type == "__AmbientLightInfoEvent") {
        return event.detail;
      }
    }

  };


  // ambient light sensor 
  if ("AmbientLightSensor" in window) {
  
    console.log("AmbientLight seems supported...");

    var lightSensor = new AmbientLightSensor({frequency:10});

    console.log("...adding AmbientLight event listener");
    lightSensor.addEventListener("reading",getAmbientLight);
    console.log("...Starting AmbientLight sensor");
    lightSensor.start();  

    var ambientLightInfoEvent = new CustomEvent("reading", {
      detail: {},
      bubbles: true,
      cancelable: true
    });
    lightSensor.dispatchEvent(ambientLightInfoEvent);
    
  } else {
    console.log("AmbientLightSensor is not supported")        
  }



  /* public methods... */
  return {
    init : init,
    defaultListeners : ["__AmbientLightInfoEvent","reading"]
  };
  
})();

},{}],7:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  /* private vars and methods... */

  function addListeners(battery) {

    battery.addEventListener("levelchange", function() {
      readBattery(battery);
    });

    battery.addEventListener('chargingchange', function() {
      readBattery(battery);
    });

    battery.addEventListener('chargingtimechange', function() {
      readBattery(battery);
    });

    battery.addEventListener('dischargingtimechange', function() {
      readBattery(battery);
    });

    readBattery(battery);

  }



  function readBattery(battery) {

    var batteryInfoEvent,
        detail = {};

    if (typeof battery !== "undefined") {

      if ( typeof battery.charging !== "undefined") {
          detail.batteryStatus = battery.charging ? 'Adapter' : 'Battery';
      }

      if (typeof battery.level !== "undefined") {

        if (battery.level == 1 && battery.charging) {
          /* could be a device without battery plugged in, don't report the 100% level */
        } else {
          detail.batteryLevel = parseFloat(battery.level * 100).toFixed(0) + '%';
        }

      }
    }

    batteryInfoEvent = new CustomEvent("__BatteryInfoEvent", {
      detail: detail,
      bubbles: true,
      cancelable: true
    });
    dispatchEvent(batteryInfoEvent);


    return detail;

  }


  var init = function(event) {

    if (typeof event !== "undefined") {
      if (typeof event.detail !== "undefined" && event.type == "__BatteryInfoEvent") {
        return event.detail;
      }
    }

  };



  if (navigator.battery) {
    readBattery(navigator.battery);
  } else if (navigator.getBattery) {
    navigator.getBattery().then(addListeners);
  }


  /* public methods... */
  return {
    init : init,
    defaultListeners : ["__BatteryInfoEvent","dischargingtimechange","chargingtimechange","chargingchange","levelchange"]
  };
  
})();

},{}],8:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  try{
    if (typeof window.navigator.connection && typeof window.navigator.connection.addEventListener == "function") {
      navigator.connection.addEventListener('change', function(event) { detectConnection(event); });
    }
  } catch(e) { console.log("Unable to add an event listener to connection object")}


  /* private vars and methods... */
  function detectConnection(event) {

    "use strict";

    var connection = {
                        "status" : (window.navigator.onLine)?"Connected":"Disconnected"
                      };
    var connectionInfoEvent;

    if ('connection' in navigator) {

      if ('type' in navigator.connection) {
        if (navigator.connection.type.toLowerCase() !== "unknown" ) {
          connection.connectionType = navigator.connection.type;

          if ('effectiveType' in navigator.connection) {
             connection.connectionActuallyFeels = navigator.connection.effectiveType;
          }

          if ('downlinkMax' in navigator.connection) {
            if (navigator.connection.downlinkMax.toString().toLowerCase() !== "infinity" ) {
              connection.connectionMaxSpeed = "Up to "+navigator.connection.downlinkMax.toString() + " Mbits/s";
            }
          }
        }
      }

      if ('rtt' in navigator.connection) {
        connection.roundTripTime = navigator.connection.rtt + " ms";
      }

      if ('downlink' in navigator.connection) {
        if (navigator.connection.downlink.toString().toLowerCase() !== "infinity" ) {
          connection.speed = navigator.connection.downlink.toString() + " Mbits/s";
        }
      }

      connectionInfoEvent = new CustomEvent("__ConnectionInfoEvent", {
        detail: connection,
        bubbles: true,
        cancelable: true
      });
      dispatchEvent(connectionInfoEvent);

    };



    return connection;

  }

  var init = function(event) {

    if (typeof event !== "undefined") {
      if (typeof event.detail !== "undefined" && event.type == "__ConnectionInfoEvent") {
        return event.detail;
      }
    }

    return detectConnection();

  };


  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded","__ConnectionInfoEvent","online","offline"]
  };
})();

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  /* private vars and methods... */

  var init = function(event) {
    if (typeof event !== "undefined") {
      if (typeof event.detail !== "undefined" && event.type == "__IPLookupInfoEvent") {
        return event.detail;
      }
    }
  }

  var httpGetAsync = require("../lib/xhttpGetAsync/xhttpGetAsync");

  httpGetAsync(
    "https://thisdeviceinfo.herokuapp.com/iplookup",
    function(responseText) {

      var IPLookupInfoEvent,
          detail = responseText;


      if (window.JSON && window.JSON.parse) {
        detail = JSON.parse(responseText);
      }

      IPLookupInfoEvent = new CustomEvent("__IPLookupInfoEvent", {
        detail: detail,
        bubbles: true,
        cancelable: true
      });
      dispatchEvent(IPLookupInfoEvent);

      return detail;

    },
    "GET",
    null,
    10000
  );

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded","__IPLookupInfoEvent", "__ConnectionInfoEvent"]
  };
})();

},{"../lib/xhttpGetAsync/xhttpGetAsync":5}],11:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  /* private vars and methods... */


  function detectMediaInputs(devices) {

    var mediaCaptureInfoEvent,
        kind,
        detail = {};

    devices.forEach(function(device) {

      switch (device.kind.toLowerCase()) {

        case "audioinput":
          kind = "Microphones";
          break;

        case "videoinput":
          kind = "Cameras";
          break;

        case "audiooutput":
          kind = "Speakers";
          break;

        default:
          kind = device.kind;

      }

      if (!detail[kind]) { detail[kind] = 0; }
      detail[kind]++;
    });

    mediaCaptureInfoEvent = new CustomEvent("__MediaCaptureInfoEvent", {
      detail: detail,
      bubbles: true,
      cancelable: true
    });
    dispatchEvent(mediaCaptureInfoEvent);

    return detail;

  }


  var init = function(event) {

    if (typeof event !== "undefined") {
      if (typeof event.detail !== "undefined" && event.type == "__MediaCaptureInfoEvent") {
        return event.detail;
      }
    }

  };

  if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
    navigator.mediaDevices.enumerateDevices().then(detectMediaInputs);
  }

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["__MediaCaptureInfoEvent"]
  };
})();

},{}],12:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  /* private vars and methods... */

  var init = function(event) {

    if (window.DeviceMotionEvent && event) {

      try {
        var accelerometer, acceleration, includingGravity;

        if (!!event.acceleration) {
          acceleration = event.acceleration;
          includingGravity = false;
        } else {
          acceleration = event.accelerationIncludingGravity;
          includingGravity = true;
        }

        if(acceleration.x || acceleration.y || acceleration.z) {
          if (acceleration.x !== null && acceleration.y !== null && acceleration.z !== null ) {
            return {
              x: acceleration.x.toFixed(2),
              y: acceleration.y.toFixed(2),
              z: acceleration.z.toFixed(2),
              includingGravity: includingGravity
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
    defaultListeners : ["devicemotion"]
  };

})();

},{}],13:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  /* private vars and methods... */

  var flashSupported = function() {

    var UNDEF = "undefined",
        SHOCKWAVE_FLASH = "Shockwave Flash",
        SHOCKWAVE_FLASH_AX = "ShockwaveFlash.ShockwaveFlash",
        FLASH_MIME_TYPE = "application/x-shockwave-flash",
        win = window,
        doc = document,
        nav = navigator,
        playerVersion = false,
        d = null;

    function toInt(str) {
        return parseInt(str, 10);
    }

    if (typeof nav.plugins !== UNDEF && typeof nav.plugins[SHOCKWAVE_FLASH] === "object") {
        d = nav.plugins[SHOCKWAVE_FLASH].description;
        // nav.mimeTypes["application/x-shockwave-flash"].enabledPlugin indicates whether plug-ins are enabled or disabled in Safari 3+
        if (d && (typeof nav.mimeTypes !== UNDEF && nav.mimeTypes[FLASH_MIME_TYPE] && nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)) {
          d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
          playerVersion = [0, 0, 0];
          playerVersion[0] = toInt(d.replace(/^(.*)\..*$/, "$1"));
          playerVersion[1] = toInt(d.replace(/^.*\.(.*)\s.*$/, "$1"));
          playerVersion[2] = /[a-zA-Z]/.test(d) ? toInt(d.replace(/^.*[a-zA-Z]+(.*)$/, "$1")) : 0;
          playerVersion = playerVersion.join(".");
        }
    } else if (typeof win.ActiveXObject !== UNDEF) {
      try {
        var a = new ActiveXObject(SHOCKWAVE_FLASH_AX);
        if (a) { // a will return null when ActiveX is disabled
          d = a.GetVariable("$version");
          if (d) {
            d = d.split(" ")[1].split(",");
            playerVersion = [toInt(d[0]), toInt(d[1]), toInt(d[2])];
            playerVersion = playerVersion.join(".");
          }
        }
      }
      catch (e) {};
    };

    return playerVersion;

  }

  var init = function() {

    return {
      userAgent           : window.navigator.userAgent,
      vendor              : window.navigator.vendor,
      platform            : window.navigator.platform,
      language            : window.navigator.language,
      appMode             : !!window.navigator.standalone,
      framedMode          : (self!=top),
      hardwareConcurrency : window.navigator.hardwareConcurrency,
      deviceMemory        : (navigator.deviceMemory?navigator.deviceMemory+"Gb": undefined),
      cookieEnabled       : window.navigator.cookieEnabled,
      javaEnabled         : (typeof window.navigator.javaEnabled == "function")?window.navigator.javaEnabled():false,
      flashSupported      : flashSupported()
    }
  }

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded"]
  };
})();

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
module.exports = (function() {

      "use strict";

      /* private vars and methods... */

      var commonRatios = {
        num:   [ 2/3 , 3/4 , 3/5 , 16/10 , 16/9 , 9/16 , 10/16 , 5/3 , 4/3 , 3/2 ],
        label: ["2:3","3:4","3:5","16:10","16:9","9:16","10:16","5:3","4:3","3:2"]
      };

      var calcGCD = function(x, y) {
        /* calculates the Greatest Common Divider of x and y */
        if(!x || !y) { return; }
        while (y != 0) {
          var z = x % y;
          x = y;
          y = z;
        }
        return x;
      };

      var getClosest = function(num, arr) {

        var curr  = arr[0],
            diff  = Math.abs (num - curr),
            newdiff = null;

        for (var val = 0; val < arr.length; val++) {
            newdiff = Math.abs (num - arr[val]);
            if (newdiff < diff) {
                diff = newdiff;
                curr = arr[val];
            }
        }
        return curr;
      };

      var getRatio = function (w,h) {

        "use strict";

        var n = w/h,
            ratio,
            approx_n,
            approx_ratio,
            approx_error,
            gcd = calcGCD(w,h),
            max = Math.max(w,h),
            min = Math.min(w,h);

        ratio =  (max/gcd).toString() + ":" + (min/gcd).toString();

        approx_n      = getClosest(n,commonRatios.num);
        approx_ratio  = commonRatios.label[commonRatios.num.indexOf(approx_n)];
        approx_error  = (Math.abs(approx_n-n)*100/n ).toFixed(2) +"%";

        return {
          exact: {
            num: n,
            str: ratio
          },
          approximated: {
            num: approx_n,
            str: approx_ratio,
            error: approx_error
          }
        }
      };

      var getTouch = function() {
    
        var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
        
        var mq = function (query) {
            return window.matchMedia(query).matches;
        }
    
        if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
            return true;
        }
    
        var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
        return mq(query);
      }


      var init = function () {

        function getOrientation() {

          var currentOrientation = window.orientation;
          var defaultOrientation;

          try {
            var orientation = screen.orientation || screen.mozOrientation || screen.msOrientation;
            if (orientation) {
              currentOrientation = orientation.angle
            };
          } catch(e) {};

          try {
            defaultOrientation = (window.screen.width >= window.screen.height && currentOrientation === 0)?"landscape":"portrait";
          } catch(e) {};

          return {
            currentOrientation: currentOrientation,
            defaultOrientation: defaultOrientation
          };

        }

        return {
          scrollY:            window.pageYOffset,
          innerWidth:         window.innerWidth,
          innerHeight:        window.innerHeight,
          outerWidth:         window.outerWidth,
          outerHeight:        window.outerHeight,
          pixelRatio:         window.devicePixelRatio,
          colorDepth:         window.screen.colorDepth,
          screenWidth:        window.screen.width,
          screenHeight:       window.screen.height,
          screenAvailWidth:   window.screen.availWidth,
          screenAvailHeight:  window.screen.availHeight,
          screenLeft:         window.screen.left,
          screenTop:          window.screen.top,
          viewportRatio:      getRatio(window.screen.availWidth,window.screen.availHeight),
          screenRatio:        getRatio(window.screen.width,window.screen.height),
          windowRatio:        getRatio(window.innerWidth,window.innerHeight),
          orientation:        getOrientation(),
          screenX:            window.screenX,
          screenY:            window.screenY,
          visbilityState:     document.visbilityState,
          touch:              getTouch()
        };
      };

      /* public methods... */
      return {
        init : init,
        defaultListeners : ["DOMContentLoaded","resize","orientationchange","scroll","visibilitychange"]
      };
    })()
},{}],16:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  /* private vars and methods... */

  var init = function(event) {
    if (typeof event !== "undefined") {
      if (typeof event.detail !== "undefined" && event.type == "__UALookupInfoEvent") {
        return event.detail;
      }
    }
  }

  var httpGetAsync = require("../lib/xhttpGetAsync/xhttpGetAsync");

  httpGetAsync(
    "https://thisdeviceinfo.herokuapp.com/ualookup",
    function(responseText) {

      var UALookupInfoEvent,
          detail = responseText;


      if (window.JSON && window.JSON.parse) {
        detail = JSON.parse(responseText);
      }

      UALookupInfoEvent = new CustomEvent("__UALookupInfoEvent", {
        detail: detail,
        bubbles: true,
        cancelable: true
      });
      dispatchEvent(UALookupInfoEvent);

      return detail;

    },
    "GET",
    null,
    10000
  );

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded","__UALookupInfoEvent"]
  };
})();

},{"../lib/xhttpGetAsync/xhttpGetAsync":5}],17:[function(require,module,exports){
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


},{}],18:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  var init = function(event) {

    var parsedUa = require("ua-parser-js")(),
        parsedUaInfo = {};

    try{
      parsedUaInfo.os = parsedUa.os.name +" "+parsedUa.os.version;
    } catch(e){}

    try{
      parsedUaInfo.osName = parsedUa.os.name;
    } catch(e){}

    try{
      parsedUaInfo.osVersion = parsedUa.os.version;
    } catch(e){}

    try{
      parsedUaInfo.browser = parsedUa.browser.name;
    } catch(e){}

    try{
      parsedUaInfo.browserVersion = parsedUa.browser.version;
    } catch(e){}    

    try{
      parsedUaInfo.cpu = parsedUa.cpu.architecture;
    } catch(e){}

    try{
        parsedUaInfo.browser_full  = (parsedUa.browser.name || "");
        parsedUaInfo.browser_full += " "  + (parsedUa.browser.version || "");
        parsedUaInfo.browser_full += " (" + (parsedUa.engine.name || "");
        parsedUaInfo.browser_full += " "  + (parsedUa.engine.version || "") + ")";
    } catch(e) {}

    try{
      if (!!parsedUa.device.model || !!parsedUa.device.vendor || !!parsedUa.device.type) {
        parsedUaInfo.device = (parsedUa.device.vendor || "") +" "+(parsedUa.device.model || ""); + " ("+ (parsedUa.device.type || "") +")";
      }
    } catch(e){}

    try{
      if (!!parsedUa.device.type ) {
        parsedUaInfo.deviceType = parsedUa.device.type || "";
      }
    } catch(e){}

    try{
      if (!!parsedUa.device.vendor ) {
        parsedUaInfo.deviceVendor = parsedUa.device.vendor || "";
      }
    } catch(e){}

    try{
      if (!!parsedUa.device.model ) {
        parsedUaInfo.deviceModel = parsedUa.device.model || "";
      }
    } catch(e){}

    return parsedUaInfo;
  }

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded"]
  };
})();

},{"ua-parser-js":20}],19:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  /* private vars and methods... */
  var webglDetect = function() {
    "use strict";

    if (!!window.WebGLRenderingContext) {
      var canvas = document.createElement("canvas"),
        names = ["webgl", "experimental-webgl", "moz-webgl"],
        gl = false;

      for (var i in names) {
        try {
          gl = canvas.getContext(names[i]);
          if (gl && typeof gl.getParameter == "function") {
            /* WebGL is enabled */
            /* return true; */
            return names[i];
          }
        } catch (e) {}
      }

      /* WebGL is supported, but disabled */
      return false;
    }

    /* WebGL not supported*/
    return false;
  }

  var getMaxColorBuffers = function(gl) {

    var maxColorBuffers = 1;
    var ext = gl.getExtension("WEBGL_draw_buffers");
    if (ext != null) {
      maxColorBuffers = gl.getParameter(ext.MAX_DRAW_BUFFERS_WEBGL);
    }

    return maxColorBuffers;
  }

  var getMaxAnisotropy = function(gl) {

    var e = gl.getExtension('EXT_texture_filter_anisotropic')
         || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic')
         || gl.getExtension('MOZ_EXT_texture_filter_anisotropic');

    if (e) {
      var max = gl.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      // See Canary bug: https://code.google.com/p/chromium/issues/detail?id=117450
      if (max === 0) {
        max = 2;
      }
      return max;
    }
    return 'n/a';
  }

  var getBestFloatPrecision = function(shaderType,gl) {

    var high = gl.getShaderPrecisionFormat(shaderType, gl.HIGH_FLOAT);
    var medium = gl.getShaderPrecisionFormat(shaderType, gl.MEDIUM_FLOAT);
    var low = gl.getShaderPrecisionFormat(shaderType, gl.LOW_FLOAT);

    var best = high;
    if (high.precision === 0) {
        best = medium;
    }

    return {
      high:   getPrecisionDescription(high, false),
      medium: getPrecisionDescription(medium, false),
      low:    getPrecisionDescription(low, false),
      best:   getPrecisionDescription(best, false)
    }
  }

  var getFloatIntPrecision = function(gl) {

    var high = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);
    var s = (high.precision !== 0) ? 'highp/' : 'mediump/';

    high = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT);
    s += (high.rangeMax !== 0) ? 'highp' : 'lowp';

    return s;
  }

  var getPrecisionDescription = function(precision, verbose) {
    var verbosePart = verbose ? ' bit mantissa' : '';
    return '[-' + formatPower(precision.rangeMin, verbose) + ', ' + formatPower(precision.rangeMax, verbose) + '] (' + precision.precision + verbosePart + ')'
  }

  var formatPower = function(exponent, verbose) {
    if (verbose) {
      return '' + Math.pow(2, exponent);
    } else {
      return '2^' + exponent;
    }
  }

  var init = function() {

    var webGLInfo = {},
      unMaskedInfo = {},
      gl = {},
      context_name = {};

    context_name = webglDetect();

    gl = document.createElement("canvas").getContext(context_name);

    if (context_name && gl !== null) {

      webGLInfo.contextName                     = context_name;
      webGLInfo.version                         = gl.getParameter(gl.VERSION);
      webGLInfo.vendor                          = gl.getParameter(gl.VENDOR);
      webGLInfo.renderer                        = gl.getParameter(gl.RENDERER);
      webGLInfo.shadingLanguageVersion          = gl.getParameter(gl.SHADING_LANGUAGE_VERSION);

      webGLInfo.redBits                         = gl.getParameter(gl.RED_BITS);
      webGLInfo.greenBits                       = gl.getParameter(gl.GREEN_BITS);
      webGLInfo.blueBits                        = gl.getParameter(gl.BLUE_BITS);
      webGLInfo.alphaBits                       = gl.getParameter(gl.ALPHA_BITS);
      webGLInfo.depthBits                       = gl.getParameter(gl.DEPTH_BITS);
      webGLInfo.stencilBits                     = gl.getParameter(gl.STENCIL_BITS);

      webGLInfo.maxRenderBufferSize             = gl.getParameter(gl.MAX_RENDERBUFFER_SIZE);
      webGLInfo.maxCombinedTextureImageUnits    = gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
      webGLInfo.maxCubeMapTextureSize           = gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);
      webGLInfo.maxFragmentUniformVectors       = gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS);
      webGLInfo.maxTextureImageUnits            = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
      webGLInfo.maxTextureSize                  = gl.getParameter(gl.MAX_TEXTURE_SIZE);
      webGLInfo.maxVaryingVectors               = gl.getParameter(gl.MAX_VARYING_VECTORS);
      webGLInfo.maxVertexAttributes             = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
      webGLInfo.maxVertexTextureImageUnits      = gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
      webGLInfo.maxVertexUniformVectors         = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);

      webGLInfo.dbgRenderInfo                   = gl.getExtension("WEBGL_debug_renderer_info");
      webGLInfo.rendererUnmasked                = (webGLInfo.dbgRenderInfo != null)?gl.getParameter(webGLInfo.dbgRenderInfo.UNMASKED_RENDERER_WEBGL):undefined;
      webGLInfo.vendorUnmasked                  = (webGLInfo.dbgRenderInfo != null)?gl.getParameter(webGLInfo.dbgRenderInfo.UNMASKED_VENDOR_WEBGL):undefined;

      webGLInfo.antialias                       = gl.getContextAttributes().antialias ? 'Available' : 'Not available';

      webGLInfo.maxColorBuffers                 = getMaxColorBuffers(gl);
      webGLInfo.maxAnisotropy                   = getMaxAnisotropy(gl);
      webGLInfo.vertexShaderBestPrecision       = getBestFloatPrecision(gl.VERTEX_SHADER,gl);
      webGLInfo.fragmentShaderBestPrecision     = getBestFloatPrecision(gl.FRAGMENT_SHADER,gl);
      webGLInfo.fragmentShaderFloatIntPrecision = getFloatIntPrecision(gl);
      // webGLInfo.extensions                      = gl.getSupportedExtensions();

    }

    return webGLInfo;
  }

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded"]
  };
  
})()

},{}],20:[function(require,module,exports){
/*!
 * UAParser.js v0.7.21
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '0.7.21',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major', // deprecated
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded';


    ///////////
    // Helper
    //////////


    var util = {
        extend : function (regexes, extensions) {
            var mergedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    mergedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    mergedRegexes[i] = regexes[i];
                }
            }
            return mergedRegexes;
        },
        has : function (str1, str2) {
          if (typeof str1 === "string") {
            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
          } else {
            return false;
          }
        },
        lowerize : function (str) {
            return str.toLowerCase();
        },
        major : function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g,'').split(".")[0] : undefined;
        },
        trim : function (str) {
          return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        }
    };


    ///////////////
    // Map helper
    //////////////


    var mapper = {

        rgx : function (ua, arrays) {

            var i = 0, j, k, p, q, matches, match;

            // loop through all regexes maps
            while (i < arrays.length && !matches) {

                var regex = arrays[i],       // even sequence (0,2,4,..)
                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
                j = k = 0;

                // try matching uastring with regexes
                while (j < regex.length && !matches) {

                    matches = regex[j++].exec(ua);

                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length == 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        this[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        this[q[0]] = q[1];
                                    }
                                } else if (q.length == 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length == 4) {
                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                this[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
        },

        str : function (str, map) {

            for (var i in map) {
                // check if array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (util.has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (util.has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
        }
    };


    ///////////////
    // String map
    //////////////


    var maps = {

        browser : {
            oldsafari : {
                version : {
                    '1.0'   : '/8',
                    '1.2'   : '/1',
                    '1.3'   : '/3',
                    '2.0'   : '/412',
                    '2.0.2' : '/416',
                    '2.0.3' : '/417',
                    '2.0.4' : '/419',
                    '?'     : '/'
                }
            }
        },

        device : {
            amazon : {
                model : {
                    'Fire Phone' : ['SD', 'KF']
                }
            },
            sprint : {
                model : {
                    'Evo Shift 4G' : '7373KT'
                },
                vendor : {
                    'HTC'       : 'APA',
                    'Sprint'    : 'Sprint'
                }
            }
        },

        os : {
            windows : {
                version : {
                    'ME'        : '4.90',
                    'NT 3.11'   : 'NT3.51',
                    'NT 4.0'    : 'NT4.0',
                    '2000'      : 'NT 5.0',
                    'XP'        : ['NT 5.1', 'NT 5.2'],
                    'Vista'     : 'NT 6.0',
                    '7'         : 'NT 6.1',
                    '8'         : 'NT 6.2',
                    '8.1'       : 'NT 6.3',
                    '10'        : ['NT 6.4', 'NT 10.0'],
                    'RT'        : 'ARM'
                }
            }
        }
    };


    //////////////
    // Regex map
    /////////////


    var regexes = {

        browser : [[

            // Presto based
            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
            /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
            /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80
            ], [NAME, VERSION], [

            /(opios)[\/\s]+([\w\.]+)/i                                          // Opera mini on iphone >= 8.0
            ], [[NAME, 'Opera Mini'], VERSION], [

            /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
            ], [[NAME, 'Opera'], VERSION], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer
            // Trident based
            /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
                                                                                // Avant/IEMobile/SlimBrowser
            /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,                      // Baidu Browser
            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

            // Webkit/KHTML based
            /(rekonq)\/([\w\.]*)/i,                                             // Rekonq
            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i
                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            ], [NAME, VERSION], [

            /(konqueror)\/([\w\.]+)/i                                           // Konqueror
            ], [[NAME, 'Konqueror'], VERSION], [

            /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
            ], [[NAME, 'IE'], VERSION], [

            /(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i                          // Microsoft Edge
            ], [[NAME, 'Edge'], VERSION], [

            /(yabrowser)\/([\w\.]+)/i                                           // Yandex
            ], [[NAME, 'Yandex'], VERSION], [

            /(Avast)\/([\w\.]+)/i                                               // Avast Secure Browser
            ], [[NAME, 'Avast Secure Browser'], VERSION], [

            /(AVG)\/([\w\.]+)/i                                                 // AVG Secure Browser
            ], [[NAME, 'AVG Secure Browser'], VERSION], [

            /(puffin)\/([\w\.]+)/i                                              // Puffin
            ], [[NAME, 'Puffin'], VERSION], [

            /(focus)\/([\w\.]+)/i                                               // Firefox Focus
            ], [[NAME, 'Firefox Focus'], VERSION], [

            /(opt)\/([\w\.]+)/i                                                 // Opera Touch
            ], [[NAME, 'Opera Touch'], VERSION], [

            /((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i         // UCBrowser
            ], [[NAME, 'UCBrowser'], VERSION], [

            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [

            /(windowswechat qbcore)\/([\w\.]+)/i                                // WeChat Desktop for Windows Built-in Browser
            ], [[NAME, 'WeChat(Win) Desktop'], VERSION], [

            /(micromessenger)\/([\w\.]+)/i                                      // WeChat
            ], [[NAME, 'WeChat'], VERSION], [

            /(brave)\/([\w\.]+)/i                                               // Brave browser
            ], [[NAME, 'Brave'], VERSION], [

            /(qqbrowserlite)\/([\w\.]+)/i                                       // QQBrowserLite
            ], [NAME, VERSION], [

            /(QQ)\/([\d\.]+)/i                                                  // QQ, aka ShouQ
            ], [NAME, VERSION], [

            /m?(qqbrowser)[\/\s]?([\w\.]+)/i                                    // QQBrowser
            ], [NAME, VERSION], [

            /(baiduboxapp)[\/\s]?([\w\.]+)/i                                    // Baidu App
            ], [NAME, VERSION], [

            /(2345Explorer)[\/\s]?([\w\.]+)/i                                   // 2345 Browser
            ], [NAME, VERSION], [

            /(MetaSr)[\/\s]?([\w\.]+)/i                                         // SouGouBrowser
            ], [NAME], [

            /(LBBROWSER)/i                                                      // LieBao Browser
            ], [NAME], [

            /xiaomi\/miuibrowser\/([\w\.]+)/i                                   // MIUI Browser
            ], [VERSION, [NAME, 'MIUI Browser']], [

            /;fbav\/([\w\.]+);/i                                                // Facebook App for iOS & Android
            ], [VERSION, [NAME, 'Facebook']], [

            /safari\s(line)\/([\w\.]+)/i,                                       // Line App for iOS
            /android.+(line)\/([\w\.]+)\/iab/i                                  // Line App for Android
            ], [NAME, VERSION], [

            /headlesschrome(?:\/([\w\.]+)|\s)/i                                 // Chrome Headless
            ], [VERSION, [NAME, 'Chrome Headless']], [

            /\swv\).+(chrome)\/([\w\.]+)/i                                      // Chrome WebView
            ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [

            /((?:oculus|samsung)browser)\/([\w\.]+)/i
            ], [[NAME, /(.+(?:g|us))(.+)/, '$1 $2'], VERSION], [                // Oculus / Samsung Browser

            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i        // Android Browser
            ], [VERSION, [NAME, 'Android Browser']], [

            /(sailfishbrowser)\/([\w\.]+)/i                                     // Sailfish Browser
            ], [[NAME, 'Sailfish Browser'], VERSION], [

            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i
                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /(dolfin)\/([\w\.]+)/i                                              // Dolphin
            ], [[NAME, 'Dolphin'], VERSION], [

            /(qihu|qhbrowser|qihoobrowser|360browser)/i                         // 360
            ], [[NAME, '360 Browser']], [

            /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
            ], [[NAME, 'Chrome'], VERSION], [

            /(coast)\/([\w\.]+)/i                                               // Opera Coast
            ], [[NAME, 'Opera Coast'], VERSION], [

            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, 'Firefox']], [

            /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [

            /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
            ], [VERSION, NAME], [

            /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i  // Google Search Appliance on iOS
            ], [[NAME, 'GSA'], VERSION], [

            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [

            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,

                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
            /(links)\s\(([\w\.]+)/i,                                            // Links
            /(gobrowser)\/?([\w\.]*)/i,                                         // GoBrowser
            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
            ], [NAME, VERSION]
        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, util.lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32
            ], [[ARCHITECTURE, 'ia32']], [

            // PocketPC mistakenly identified as PowerPC
            /windows\s(ce|mobile);\sppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, util.lowerize]]
        ],

        device : [[

            /\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i                        // iPad/PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [

            /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

            /(apple\s{0,1}tv)/i                                                 // Apple TV
            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple'], [TYPE, SMARTTV]], [

            /(archos)\s(gamepad2?)/i,                                           // Archos
            /(hp).+(touchpad)/i,                                                // HP TouchPad
            /(hp).+(tablet)/i,                                                  // HP Tablet
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
            /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(kf[A-z]+)\sbuild\/.+silk\//i                                      // Kindle Fire HD
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
            /(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i                         // Fire Phone
            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [
            /android.+aft([bms])\sbuild/i                                       // Fire TV
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, SMARTTV]], [

            /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
            ], [MODEL, VENDOR, [TYPE, MOBILE]], [
            /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [

            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
            /(asus)-?(\w+)/i                                                    // Asus
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
                                                                                // Asus Tablets
            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i
            ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [

            /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
            /(sony)?(?:sgp.+)\sbuild\//i
            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
            /android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]], [

            /\s(ouya)\s/i,                                                      // Ouya
            /(nintendo)\s([wids3u]+)/i                                          // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [

            /android.+;\s(shield)\sbuild/i                                      // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [

            /(playstation\s[34portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [

            /(sprint\s(\w+))/i                                                  // Sprint Phones
            ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [

            /(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,                        // HTC
            /(zte)-(\w*)/i,                                                     // ZTE
            /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i
                                                                                // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            /(nexus\s9)/i                                                       // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

            /d\/huawei([\w\s-]+)[;\)]/i,
            /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i                              // Huawei
            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [

            /android.+(bah2?-a?[lw]\d{2})/i                                     // Huawei MediaPad
            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, TABLET]], [

            /(microsoft);\s(lumia[\s\w]+)/i                                     // Microsoft Lumia
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

                                                                                // Motorola
            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
            /mot[\s-]?(\w*)/i,
            /(XT\d{3,4}) build\//i,
            /(nexus\s6)/i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
            /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

            /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i            // HbbTV devices
            ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [

            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [

            /\(dtv[\);].+(aquos)/i                                              // Sharp
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [

            /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
            /((SM-T\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
            /smart-tv.+(samsung)/i
            ], [VENDOR, [TYPE, SMARTTV], MODEL], [
            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
            /sec-((sgh\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [

            /sie-(\w*)/i                                                        // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [

            /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
            /(nokia)[\s_-]?([\w-]*)/i
            ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [

            /android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i                   // Acer
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            /android.+([vl]k\-?\d{3})\s+build/i                                 // LG Tablet
            ], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [
            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
            /(lg) netcast\.tv/i                                                 // LG SmartTV
            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
            /(nexus\s[45])/i,                                                   // LG
            /lg[e;\s\/-]+(\w*)/i,
            /android.+lg(\-?[\d\w]+)\s+build/i
            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

            /(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i             // Lenovo tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [
            /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [
            /(lenovo)[_\s-]?([\w-]+)/i
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /linux;.+((jolla));/i                                               // Jolla
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [

            /android.+;\s(oppo)\s?([\w\s]+)\sbuild/i                            // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, 'Chromecast'], [VENDOR, 'Google'], [TYPE, SMARTTV]], [

            /android.+;\s(glass)\s\d/i                                          // Google Glass
            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [

            /android.+;\s(pixel c)[\s)]/i                                       // Google Pixel C
            ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [

            /android.+;\s(pixel( [23])?( xl)?)[\s)]/i                              // Google Pixel
            ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [

            /android.+;\s(\w+)\s+build\/hm\1/i,                                 // Xiaomi Hongmi 'numeric' models
            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,               // Xiaomi Hongmi
            /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,    
                                                                                // Xiaomi Mi
            /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i       // Redmi Phones
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [
            /android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i            // Mi Pad tablets
            ],[[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, TABLET]], [
            /android.+;\s(m[1-5]\snote)\sbuild/i                                // Meizu
            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [
            /(mz)-([\w-]{2,})/i
            ], [[VENDOR, 'Meizu'], MODEL, [TYPE, MOBILE]], [

            /android.+a000(1)\s+build/i,                                        // OnePlus
            /android.+oneplus\s(a\d{4})[\s)]/i
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            /android.+[;\/]\s*(RCT[\d\w]+)\s+build/i                            // RCA Tablets
            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [

            /android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i                      // Dell Venue Tablets
            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i                         // Verizon Tablet
            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [

            /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i     // Barnes & Noble Tablet
            ], [[VENDOR, 'Barnes & Noble'], MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i                           // Barnes & Noble Tablet
            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [

            /android.+;\s(k88)\sbuild/i                                         // ZTE K Series Tablet
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(gen\d{3})\s+build.*49h/i                         // Swiss GEN Mobile
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [

            /android.+[;\/]\s*(zur\d{3})\s+build/i                              // Swiss ZUR Tablet
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [

            /android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i                         // Zeki Tablets
            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [

            /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
            /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i        // Dragon Touch Tablet
            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i                            // Insignia Tablets
            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [

            /android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i                    // NextBook Tablets
            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i
            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [                    // Voice Xtreme Phones

            /android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i                     // LvTel Phones
            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [

            /android.+;\s(PH-1)\s/i
            ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [                // Essential PH-1

            /android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i          // Envizen Tablets
            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i          // Le Pan Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i                         // MachSpeed Tablets
            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i                // Trinity Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*TU_(1491)\s+build/i                               // Rotor Tablets
            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [

            /android.+(KS(.+))\s+build/i                                        // Amazon Kindle Tablets
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [

            /android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i                      // Gigaset Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /\s(tablet|tab)[;\/]/i,                                             // Unidentifiable Tablet
            /\s(mobile)(?:[;\/]|\ssafari)/i                                     // Unidentifiable Mobile
            ], [[TYPE, util.lowerize], VENDOR, MODEL], [

            /[\s\/\(](smart-?tv)[;\)]/i                                         // SmartTV
            ], [[TYPE, SMARTTV]], [

            /(android[\w\.\s\-]{0,9});.+build/i                                 // Generic Android Device
            ], [MODEL, [VENDOR, 'Generic']]
        ],

        engine : [[

            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, 'EdgeHTML']], [

            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
            ], [VERSION, [NAME, 'Blink']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,     
                                                                                // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]{1,9}).+(gecko)/i                                       // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows based
            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,                   // Windows Phone
            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

            // Mobile/Embedded OS
            /\((bb)(10);/i                                                      // BlackBerry 10
            ], [[NAME, 'BlackBerry'], VERSION], [
            /(blackberry)\w*\/?([\w\.]*)/i,                                     // Blackberry
            /(tizen|kaios)[\/\s]([\w\.]+)/i,                                    // Tizen/KaiOS
            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i
                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki/Sailfish OS
            ], [NAME, VERSION], [
            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i                  // Symbian
            ], [[NAME, 'Symbian'], VERSION], [
            /\((series40);/i                                                    // Series 40
            ], [NAME], [
            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
            ], [[NAME, 'Firefox OS'], VERSION], [

            // Console
            /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation

            // GNU/Linux based
            /(mint)[\/\s\(]?(\w*)/i,                                            // Mint
            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
            /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
            /(hurd|linux)\s?([\w\.]*)/i,                                        // Hurd/Linux
            /(gnu)\s?([\w\.]*)/i                                                // GNU
            ], [NAME, VERSION], [

            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Solaris
            /(sunos)\s?([\w\.\d]*)/i                                            // Solaris
            ], [[NAME, 'Solaris'], VERSION], [

            // BSD based
            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i                    // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
            ], [NAME, VERSION],[

            /(haiku)\s(\w+)/i                                                   // Haiku
            ], [NAME, VERSION],[

            /cfnetwork\/.+darwin/i,
            /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i             // iOS
            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [

            /(mac\sos\sx)\s?([\w\s\.]*)/i,
            /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Other
            /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,                             // Solaris
            /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,                                // AIX
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS/Fuchsia
            /(unix)\s?([\w\.]*)/i                                               // UNIX
            ], [NAME, VERSION]
        ]
    };


    /////////////////
    // Constructor
    ////////////////
    var UAParser = function (uastring, extensions) {

        if (typeof uastring === 'object') {
            extensions = uastring;
            uastring = undefined;
        }

        if (!(this instanceof UAParser)) {
            return new UAParser(uastring, extensions).getResult();
        }

        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

        this.getBrowser = function () {
            var browser = { name: undefined, version: undefined };
            mapper.rgx.call(browser, ua, rgxmap.browser);
            browser.major = util.major(browser.version); // deprecated
            return browser;
        };
        this.getCPU = function () {
            var cpu = { architecture: undefined };
            mapper.rgx.call(cpu, ua, rgxmap.cpu);
            return cpu;
        };
        this.getDevice = function () {
            var device = { vendor: undefined, model: undefined, type: undefined };
            mapper.rgx.call(device, ua, rgxmap.device);
            return device;
        };
        this.getEngine = function () {
            var engine = { name: undefined, version: undefined };
            mapper.rgx.call(engine, ua, rgxmap.engine);
            return engine;
        };
        this.getOS = function () {
            var os = { name: undefined, version: undefined };
            mapper.rgx.call(os, ua, rgxmap.os);
            return os;
        };
        this.getResult = function () {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return ua;
        };
        this.setUA = function (uastring) {
            ua = uastring;
            return this;
        };
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = {
        NAME    : NAME,
        MAJOR   : MAJOR, // deprecated
        VERSION : VERSION
    };
    UAParser.CPU = {
        ARCHITECTURE : ARCHITECTURE
    };
    UAParser.DEVICE = {
        MODEL   : MODEL,
        VENDOR  : VENDOR,
        TYPE    : TYPE,
        CONSOLE : CONSOLE,
        MOBILE  : MOBILE,
        SMARTTV : SMARTTV,
        TABLET  : TABLET,
        WEARABLE: WEARABLE,
        EMBEDDED: EMBEDDED
    };
    UAParser.ENGINE = {
        NAME    : NAME,
        VERSION : VERSION
    };
    UAParser.OS = {
        NAME    : NAME,
        VERSION : VERSION
    };

    ///////////
    // Export
    //////////


    // check js environment
    if (typeof(exports) !== UNDEF_TYPE) {
        // nodejs env
        if (typeof module !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if (typeof(define) === 'function' && define.amd) {
            define(function () {
                return UAParser;
            });
        } else if (window) {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = window && (window.jQuery || window.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (uastring) {
            parser.setUA(uastring);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : this);

},{}],21:[function(require,module,exports){
module.exports = function() {

  "use strict";

  var path = [],
    maxDepth = 5,
    outputHTML = "",
    outputContainer;

  var _div_ = document.createElement('div'),
      _dl_  = document.createElement('dl'),
      _dt_  = document.createElement('dt'),
      _dd_  = document.createElement('dd'),
      _h1_  = document.createElement('h1'),
      _span_  = document.createElement('span');

  outputContainer = document.getElementById("results");

  if (!!outputContainer) {
    outputContainer.innerHTML = createHTML(window.thisDeviceInfo["results"]).innerHTML;
    console.log("output rendered.");
  } else {
    console.log("ERROR: output container not found");
  };



  function createHTML(results) {

      function capitalize(string) {
        return string[0].toUpperCase() +  string.slice(1);
      }

      function createGroup(id,property,value,className) {

        var DL    = _dl_.cloneNode(false);
        var DT    = _dt_.cloneNode(false);
        var DD    = _dd_.cloneNode(false);
        var SPAN  = _span_.cloneNode(false);
        var content = value.split("\n");


        if (typeof id == "string" && typeof property == "string" && typeof value == "string") {

          DL.setAttribute("id",id);

          if (typeof className != "undefined") {
            DL.setAttribute("class",className);
          }

          if (property == "") { property = " \u00A0"; };
          DT.appendChild(document.createTextNode(property || ''));
          DL.appendChild(DT);

          for(var i=0;i<content.length;i++) {
           DD.appendChild(document.createTextNode(content[i] || ''));
           if (content.length > 1) { 
             DD.appendChild(document.createElement("br"));           
           }
          }

          DL.appendChild(DD);

          return DL;

        } else {

          return SPAN

        }
      }

      var defaultValue = "N/D";
      var container  = _div_.cloneNode(false);


      // Device Name
      var deviceName = defaultValue;
      
      try {

        deviceName = {};

        // Complete device name and release date
        if (results.userAgentInfo) {

          if (results.userAgentInfo && results.userAgentInfo.osName) {
            deviceName.complete_name = "Generic " + results.userAgentInfo.osName + " device";
          }          

          if (results.userAgentInfo.device) {
            deviceName.complete_name = results.userAgentInfo.device;
            deviceName.os_type = results.userAgentInfo.osName + " device";
          }
          
        }
 
        if (results.UALookupInfo && results.UALookupInfo.success && results.UALookupInfo.data) { // if ualookup
 
          if (results.UALookupInfo.data.form_factor) { // if form_factor
 
            if (results.userAgentInfo && results.userAgentInfo.browser && results.userAgentInfo.osName) { // if device os and browser

              deviceName.os_type = results.userAgentInfo.osName + " " + results.UALookupInfo.data.form_factor.toLowerCase();

              if (results.UALookupInfo.data.complete_device_name) {

                if (results.UALookupInfo.data.complete_device_name.indexOf(results.userAgentInfo.browser) == -1) { // device name is not browser name

                  // complete device name from ualookup if reliable
                  deviceName.complete_name = results.UALookupInfo.data.complete_device_name; 
                  
                  deviceName.marketing_name = deviceName.complete_name.substr(deviceName.complete_name.indexOf("("));
                  
                  if (
                    results.userAgentInfo.deviceVendor 
                    && 
                    (deviceName.marketing_name.toLowerCase().indexOf(results.userAgentInfo.deviceVendor.toLowerCase()) < 0)
                  ) {
                    deviceName.complete_name = deviceName.complete_name.replace("(","("+results.userAgentInfo.deviceVendor+" ");
                  }

                } // device name is not browser name

              } // if ualookup device name
            
            } // if device os and browser

          } // if form factor

          // relase date 
          if (deviceName.complete_name.toLowerCase().indexOf("generic") == -1 ) { // if not generic
            
            if (results.UALookupInfo.data.release_date) { // if release date 

              deviceName.date = "Released ";  
  
              var release_date = results.UALookupInfo.data.release_date.split("_");
              var release_year = release_date[0];
              var release_month = release_date[1];
  
              if (release_month) { // if month
                deviceName.date += release_month + " ";   
              }              
  
              if (release_year) { // if year
                deviceName.date += release_year;  
              }
  
            } // if release_date
            
          } // if device name is not generic

        } // if ualookup

        var complete_device_name = "";        

        if (deviceName.complete_name) {
          complete_device_name += deviceName.complete_name;
        }

        if (deviceName.os_type) {
          complete_device_name += "\n"+deviceName.os_type
        }

        if (deviceName.date) {
          complete_device_name += "\n"+deviceName.date
        }        
  
        container.appendChild(createGroup("deviceName","Device name",complete_device_name,"wide"));

      } catch(e) {console.log(e); alert(e.toString()); }    


      // User Agent string
      var userAgent = defaultValue;
      try {
        userAgent = results.navigatorInfo.userAgent;
        container.appendChild(createGroup("userAgent","User Agent:",userAgent,"wide"));
      } catch(e) {console.log(e);}


      // Hardware 
      var deviceHardware = defaultValue;
      try {

        // first column:
        deviceHardware = [];

        if (results.navigatorInfo.platform) {
          deviceHardware.push(results.navigatorInfo.platform + " hardware platform");
        }
        
        if ( parseInt(results.navigatorInfo.hardwareConcurrency) == 1) {
          deviceHardware.push("\nSingle-core CPU");
        } else if(parseInt(results.navigatorInfo.hardwareConcurrency) > 1) {
          deviceHardware.push("\nMulti-core CPU ("+results.navigatorInfo.hardwareConcurrency+" cores)");
        }

        if (results.userAgentInfo && results.userAgentInfo.cpu) {
          deviceHardware.push(results.userAgentInfo.cpu);
        }          

        if (results.navigatorInfo.deviceMemory) {
          deviceHardware.push("\nAt least " + results.navigatorInfo.deviceMemory + " of RAM memory");
        }        

        if (results.webGLInfo.rendererUnmasked || results.webGLInfo.vendorUnmasked) {

          if (results.webGLInfo.rendererUnmasked) {
            deviceHardware.push("\nGraphics "+results.webGLInfo.rendererUnmasked);
          }
  
          if (results.webGLInfo.vendorUnmasked) {
            deviceHardware.push("by " + results.webGLInfo.vendorUnmasked);
          }

        }

        if (results.batteryInfo) {

          if (results.batteryInfo.batteryStatus) {
            switch (results.batteryInfo.batteryStatus) {
              case "Battery": 
                deviceHardware.push("\nRunning on battery");
              break;
              case "Adapter":
                deviceHardware.push("\nPlugged-in to power outlet");              
              break;
              default:
              break;
            }
          }

          if (results.batteryInfo.batteryLevel) {
            deviceHardware.push("\nBattery level " + results.batteryInfo.batteryLevel); 
          }
          
        }         

        deviceHardware = deviceHardware.join(" ");
        container.appendChild(createGroup("deviceHardware","Hardware",deviceHardware));


        // second column
        
        deviceHardware = [];
        
        if (results.mediaCaptureInfo) {

          if (results.mediaCaptureInfo.Microphones) {
            deviceHardware.push(results.mediaCaptureInfo.Microphones+" microphone"+(results.mediaCaptureInfo.Microphones>1?"s":"")+"\n");
          }
  
          if (results.mediaCaptureInfo.Cameras) {
            deviceHardware.push(results.mediaCaptureInfo.Cameras+" camera"+(results.mediaCaptureInfo.Cameras>1?"s":"")+"\n");
          }    
  
          if (results.mediaCaptureInfo.Speakers) {
            deviceHardware.push(results.mediaCaptureInfo.Speakers+" speaker"+(results.mediaCaptureInfo.Speakers>1?"s":"")+"\n");
          } 

        }

        var ambientLight = defaultValue;

        if (results.ambientLightInfo) {
           
          ambientLight = "";

          if (results.ambientLightInfo.illuminance) {
            ambientLight += results.ambientLightInfo.illuminance;
          } 
          
          if (results.ambientLightInfo.luminosity) {
            if (results.ambientLightInfo.illuminance) {
              ambientLight += ", ";  
            }
            ambientLight += results.ambientLightInfo.luminosity;            
          }

          deviceHardware.push("A light sensor (reading " + ambientLight+")");
        } 

        deviceHardware = deviceHardware.join(" ");   

        container.appendChild(createGroup("deviceHardware2","Hardware",deviceHardware,"continuation"));

      } catch(e) { console.log(e); }


      // Operating System
      var deviceOS = [];
      try {
      
        if (results.userAgentInfo && results.userAgentInfo.deviceVendor) {
          deviceOS.push(results.userAgentInfo.deviceVendor );
        } 

        if (results.userAgentInfo && results.userAgentInfo.os) {
          deviceOS.push(results.userAgentInfo.os);
        } 
      } catch(e) { console.log(e);}

      try {

        if (results.navigatorInfo && results.navigatorInfo.language) {
          deviceOS.push("\nLanguage: "+results.navigatorInfo.language);
        }     

      } catch(e) { console.log(e);}
  
      try {

        if (results.UIInfo && results.UIInfo.theme) {
          deviceOS.push("\nUI theme: "+results.UIInfo.theme);
        }     
            
      } catch(e) { console.log(e);}
   
      deviceOS = deviceOS.join(" ");
      container.appendChild(createGroup("deviceOS","Operating System",deviceOS,"wide"));



      // Browser 
      var deviceBrowser = defaultValue;
      try {
        deviceBrowser = [];
        
        if (results.userAgentInfo && results.userAgentInfo.browser_full) {
          deviceBrowser.push(results.userAgentInfo.browser_full);          
        }        

        if (results.navigatorInfo) {
          deviceBrowser.push("\n" + (results.navigatorInfo.cookieEnabled?"Accepting cookies":"Not accepting cookies")); 
        } 

        deviceBrowser = deviceBrowser.join(" "); 
        
        container.appendChild(createGroup("deviceBrowser","Browser",deviceBrowser,"wide"));
      } catch(e) {}


      // Display
      var displayRes_HW = defaultValue;
      try {
        displayRes_HW = [];
        if (results.screenInfo.screenWidth && results.screenInfo.pixelRatio) {
          displayRes_HW.push(Math.round(results.screenInfo.screenWidth * results.screenInfo.pixelRatio) + " x " + Math.round(results.screenInfo.screenHeight * results.screenInfo.pixelRatio) + " pixels\n");
        }

        if (results.screenInfo.screenRatio) {
          displayRes_HW.push(results.screenInfo.screenRatio.approximated.str +" aspect ratio\n");
        }

        if (results.screenInfo.pixelRatio >= 2) {
          displayRes_HW.push("High resolution (@" + (Math.round(results.screenInfo.pixelRatio * 100) / 100) + "X)\n" );
        }        

        if (results.screenInfo.hasOwnProperty("touch")) {
          if (results.screenInfo.touch) {
            displayRes_HW.push("Touchscreen: yes");
          } else {
            displayRes_HW.push("Touchscreen: no");
          }
        }

        displayRes_HW = displayRes_HW.join(" ");
        container.appendChild(createGroup("displayRes_HW","Display",displayRes_HW));
      } catch(e) {}


      // Viewport
      var displayRes_CSS = defaultValue;
      if (results.screenInfo) {

        try {
          displayRes_CSS = [];
          displayRes_CSS.push("Viewport " + (results.screenInfo.screenWidth) + " x " + (results.screenInfo.screenHeight + " CSS pixels \n"));
          displayRes_CSS.push("Available " + (results.screenInfo.innerWidth) + " x " + (results.screenInfo.innerHeight + " CSS pixels\n")); 
          if (results.screenInfo.scrollY > 0) {
            displayRes_CSS.push("Scrolled " + Math.ceil(results.screenInfo.scrollY) + " pixels" );
          } 
          displayRes_CSS = displayRes_CSS.join(" ");
          container.appendChild(createGroup("displayRes_CSS","",displayRes_CSS,"continuation"));        
        } catch(e) {console.log(".---------------",e)}
  
      }


      // Orientation
      var displayOrientation = defaultValue;
      try {

        displayOrientation = [];        
        switch(results.screenInfo.orientation.defaultOrientation.toLowerCase()) {

          case "landscape":
            displayOrientation.push("Landscape by default");
          break;

          case "portrait":
            displayOrientation.push("Portrait by default");
          break;

        };

        var angle = results.screenInfo.orientation.currentOrientation;
        switch(angle) {

          case 0:
            displayOrientation.push("");
          break;

          case 180:
          case 360:
            displayOrientation[displayOrientation.length-1] +=",";
            displayOrientation.push("currently upside down");
          break;

          default:
            if (typeof angle == "number" ) {

              displayOrientation[displayOrientation.length-1] +=",";

              if (Math.abs(angle) > 180) {
                angle = 180 - angle;
              }

              if (angle < 0) {
                displayOrientation.push("currently rotated by " + Math.abs(angle) + " degrees to the right");
              } else {
                displayOrientation.push("currently rotated by " + Math.abs(angle) + " degrees to the left");
              }

            }
          break;

        }
     
        if (results.gyroscopeInfo && results.gyroscopeInfo.alpha) {
          
          displayOrientation.push("\nGyroscope rotation:");
          displayOrientation.push("α " + results.gyroscopeInfo.alpha+",");
          displayOrientation.push("β " + results.gyroscopeInfo.beta+",");
          displayOrientation.push("𝛾 " + results.gyroscopeInfo.gamma);          
        }

        if (results.motionSensorsInfo && results.motionSensorsInfo.x) {
          
          displayOrientation.push("\nMotion:");
          displayOrientation.push("x " + results.motionSensorsInfo.x+",");
          displayOrientation.push("y " + results.motionSensorsInfo.y+",");
          displayOrientation.push("z " + results.motionSensorsInfo.z);          
        }
        
        displayOrientation = displayOrientation.join(" ");
        container.appendChild(createGroup("displayOrientation","Orientation",displayOrientation,"wide"));

      } catch(e) {console.log(e);}


      // Connection
      var connectionInfo = defaultValue;
      try {

        connectionInfo = [];

        if (results.connectionInfo && results.connectionInfo.status) {
          if (results.connectionInfo.status.toLowerCase() == "connected") {
            
            connectionInfo.push("Connected");

            if (results.connectionInfo.connectionType) {
              switch(results.connectionInfo.connectionType.toLowerCase()) {
                case "cellular": 
                  connectionInfo.push("(mobile data)");
                  break;
                case "wifi": 
                  connectionInfo.push("(Wi-Fi)");
                  break;
                case "bluetooth": 
                  connectionInfo.push("(Bluetooth)");
                  break;
                case "ethernet": 
                  connectionInfo.push("(LAN cable)");
                  break;
                case "wimax": 
                  connectionInfo.push("(WiMAX)");
                  break;
                default:
                  break;
              }

            }              

            if (results.connectionInfo.speed) {
              connectionInfo.push("at "+results.connectionInfo.speed);
            }  
            
            if (results.connectionInfo.roundTripTime) {
              connectionInfo.push("with ~"+results.connectionInfo.roundTripTime+" latency\n");
            }              
            
            if (results.IPLookupInfo && results.IPLookupInfo.success && results.IPLookupInfo.data) {

              if (results.IPLookupInfo.data.query) {
                connectionInfo.push("IP address: "+results.IPLookupInfo.data.query+"\n");
              }

              if (results.IPLookupInfo.data.isp) {
                connectionInfo.push("Provider: "+results.IPLookupInfo.data.isp);
              } 
              if (results.IPLookupInfo.data.as) {
                connectionInfo.push("("+results.IPLookupInfo.data.as+")");
              } 
              
            }

          } else {
            connectionInfo.push("Disconnected");
          }

          connectionInfo = connectionInfo.join(" ");          
        }
        container.appendChild(createGroup("ConnectionInfo","Network",connectionInfo,"wide"));
      } catch(e) {console.log(e);}


      // Geolocation
      var locationInfo = defaultValue;
      try {
        
        locationInfo = [];

        if (results.IPLookupInfo && results.IPLookupInfo.success && results.IPLookupInfo.data) {

          if (results.IPLookupInfo.data.city) {
            locationInfo.push(results.IPLookupInfo.data.city);
          }

          if (results.IPLookupInfo.data.regionName) {
            if (results.IPLookupInfo.data.city) {
              locationInfo[locationInfo.length-1] +=",";
            }
            locationInfo.push(results.IPLookupInfo.data.regionName);
          }
          
          if (results.IPLookupInfo.data.country) {
            if (results.IPLookupInfo.data.city || results.IPLookupInfo.data.regionName) {
              locationInfo[locationInfo.length-1] +=",";
            }
            locationInfo.push(results.IPLookupInfo.data.country);
          }     
          
          locationInfo.push("\n");
          
          if (results.IPLookupInfo.data.lat) {
            locationInfo.push("Approximate location: " + results.IPLookupInfo.data.lat + " lat, " + results.IPLookupInfo.data.lon + " lon");
          }        
          
          locationInfo = locationInfo.join(" ");
          container.appendChild(createGroup("locationInfo","Geolocation",locationInfo,"wide"));
        }

      } catch(e) {console.log(e); container.appendChild(createGroup("errorInfo","Error",e,"wide")); }    

      return container;

  }

}

},{}],22:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  // JSON.stringify and other JSON method are not as widely supported as they should.
  // JSON.stringify polyfill -- https://github.com/douglascrockford/JSON-js
  require('./lib/json2/json2.min');

  // DEFAULT config params
  var defaultConfig = {
    throttleInterval: 100,
    callbackFn: function() {
      console.log("-- [detection results callback] --");
    }
  }

  // public methods and objects
  // entry point: init()
  return {

    config : defaultConfig,
    modules : {},
    listeners : {},
    results : {},

    injectJsCSS : require('./lib/injectJsCss/injectJsCss'),
    throttle : require('./lib/throttle/throttle'),

    loadModule : function(name,module,listenersList) {

      "use strict";

      if (Object.prototype.toString.call(listenersList) != "[object Array]") {
        listenersList = module.defaultListeners || [];
      };

      try {

        if (!name) {
          name = "module_"+(Math.random()*10000).toFixed(0);
        };

        if (!module) {
          module = {init:function(){}};
        };

        console.log("Loading module " + name + ": will be triggered by " + listenersList.join(", ") + " events");

        this.modules[name] = ({
          name: name,
          init: module.init,
          listeners: listenersList
        });

      } catch(e) {
        console.log("ERROR: Couldn't load module "+name+"!",e);
      }

      for (var i=0; i<listenersList.length; i++) {

        if ( typeof this.listeners[listenersList[i]] == "undefined") {
          this.listeners[listenersList[i]] = [name];
        } else {
          this.listeners[listenersList[i]].push(name);
        };

      }
    },

    refresh : function(event) {

      "use strict";

      if (typeof event == "undefined") {
        event = { type: "all" };
        console.log("------- REFRESH!");
      } else {
        console.log("------- REFRESH! triggered by " + event.type + " event");
      }

      var module;
      for (var i=0; i < this.listeners[event.type].length; i++) {

        module = this.modules[this.listeners[event.type][i]];
        try{
          console.log("Running module " + module.name + "...");
          this.results[module.name] = module.init(event);
        } catch(e) {
          console.log("ERROR: couldn't run module "+ module.name +"!",e );
        }

      };

      console.log("Calling callback function...");

      if (window.location.hash == "#debug") {

        if (window.JSON) {
          document.body.innerHTML = '<div style="white-space:pre-wrap;font:14px/1.2em monospace;">'+JSON.stringify(this.results,null,2)+'</div>';
        } else {
          console.log("JSON output not supported")
        }

      } else {

        if (window.requestAnimationFrame) {
          requestAnimationFrame(this.callbackFn);
        } else {
          this.callbackFn();
        }

      }
      console.log("...done.")
    },

    init : function(inputConfig) {

      "use strict";

      if (!window.console || !window.console.log) {
        window.log = [];
        window.console = { log: function(message) { window.log.push(message); } };
      }

      if (!window.addEventListener) {
        window.addEventListener = function() {
          console.log("Sadly addEventListener is not supported by the current browser.")
        };
      }

      console.log("------- INIT!");

      if (typeof inputConfig == "object") {
        for (var c in inputConfig) {
          if (inputConfig.hasOwnProperty(c)) {
            this.config[c] = inputConfig[c];
            console.log("CONFIG: "+ c + " settings has been set to " + ((typeof this.config[c] !== "function")?this.config[c]:"a custom function"));
          }
        }
      };

      this.callbackFn = this.config.callbackFn;

      console.log("Adding event listeners...");
      for (var listener in this.listeners) {
        window.addEventListener(listener,
          this.throttle(
            function(event) {
              console.log("Throttled event " + event.type);
              this.refresh(event);
            },
            this.config.throttleInterval,this)
          );
      }


      console.log("INIT complete.");
    }

  }

})();

},{"./lib/injectJsCss/injectJsCss":2,"./lib/json2/json2.min":3,"./lib/throttle/throttle":4}]},{},[1]);
