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
