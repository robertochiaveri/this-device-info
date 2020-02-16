module.exports = (function() {

  "use strict";

  /* private vars and methods... */
  try {
    if (navigator.bluetooth && navigator.bluetooth.getAvailability) {
      navigator.bluetooth.getAvailability().then(
        function(value) {
          console.log("bluetooth detection supported, result: ",value);
  
          var BluetoothInfoEvent = new CustomEvent("__BluetoothInfoEvent", {
            detail: {
              radio_present: value
            },
            bubbles: true,
            cancelable: true
          })
          dispatchEvent(BluetoothInfoEvent);         
        }
      );
    } else {
      console.log("bluetooth detection is not supported");
    }
  } catch(e) {
    console.log("bluetooth detection error",e);
  }


  
  var init = function(event) {

    if (
      typeof navigator.bluetooth == "undefined"
      || 
      typeof navigator.bluetooth.getAvailability == "undefined"
    ) {
      // bluetooth detection not supported
      return;
    } else {
      // bluetooth detection supported
      if (
        typeof event != "undefined" 
        && 
        typeof event.detail != "undefined" 
        && 
        event.type == "__BluetoothInfoEvent"
      ) {
        // bt detection event
        return event.detail;
      }
    }
  
  }


  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded","__BluetoothInfoEvent", "availabilitychanged"]
  };
})();

