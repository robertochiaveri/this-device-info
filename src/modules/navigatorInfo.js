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
