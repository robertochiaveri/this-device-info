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
