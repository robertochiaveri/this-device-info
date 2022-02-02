module.exports = (function() {

  "use strict";


  var init = function(event) {
    
    var pushSupport = (
      "serviceWorker" in navigator 
      && 
      "PushManager" in window
      &&
      Notification 
      && 
      Notification.hasOwnProperty("requestPermission")
    );
    
    console.log("Device support for Push Notifications is " + pushSupport);
    return {
      support : pushSupport
    };
    
  };

 
  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded"]
  };
})();

