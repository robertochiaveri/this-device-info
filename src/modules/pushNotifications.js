module.exports = (function() {

  "use strict";

  /* private vars and methods... */
  
  function getPushSupport() {
    var pushSupport = ("serviceWorker" in navigator && "PushManager" in window);
    console.log("Device support for Push Notifications is " + pushSupport);
    return pushSupport;
  }
  
  function getPushPermission() {
    console.log("Checking device support for Push Notifications...");
    if (getPushSupport()) {
      
      console.log("Checking User permission for Push Notifications...");
      if (Notification && Notification.hasOwnProperty("requestPermission")) {
        Notification.requestPermission().then(getPushPermissionCallback);
      }
    }
  }
      
  function getPushPermissionCallback(permission) {
  
    /* define custom event vars */
    var pushPermissionInfoEvent;
    var detail = {
      support: false,
      permission: undefined
    };
    
    /* set the values */

    detail.supported = getPushSupport();
    detail.permission = permission;      
    console.log("User permission for Push Notifications is "+ detail.permission);
     
    /* create and dispatch custom event */
    pushPermissionInfoEvent = new CustomEvent("__PushSupportInfoEvent", {
      detail: detail,
      bubbles: true,
      cancelable: true
    });
    dispatchEvent(pushPermissionInfoEvent);
   
  }


  var init = function(event) {
   
      if (typeof event !== "undefined") {
        if (typeof event.detail !== "undefined" && event.type == "__PushSupportInfoEvent") {
          return event.detail;
        }
      }

  };

  
  getPushPermission();

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["__PushSupportInfoEvent"]
  };
})();

