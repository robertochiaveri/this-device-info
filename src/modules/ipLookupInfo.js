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

      var UALookupInfoEvent,
          detail = responseText;


      if (window.JSON && window.JSON.parse) {
        detail = JSON.parse(responseText);
      }

      UALookupInfoEvent = new CustomEvent("__IPLookupInfoEvent", {
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
    defaultListeners : ["DOMContentLoaded","__IPLookupInfoEvent"]
  };
})();
