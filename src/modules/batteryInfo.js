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
