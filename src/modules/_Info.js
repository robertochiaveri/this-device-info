module.exports = (function() {

  "use strict";

  /* private vars and methods... */
  var otherFunction = function () {
  }


  var init = function(event) {
    return {};
  }

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded","resize"]
  };
})();

