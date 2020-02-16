module.exports = (function() {

  "use strict";

  /* private vars and methods... */
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
  
  var init = function(event) {

    if (
      typeof event == "undefined" 
      || 
      typeof event.detail == "undefined" 
      || 
      event.type !== "__BluetoothInfoEvent"
    ) {
      return; 
    } else {
      return event.detail;
    }
  }

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded","__BluetoothInfoEvent", "availabilitychanged"]
  };
})();

