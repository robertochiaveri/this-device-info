module.exports = (function() {

  "use strict";

  /* private vars and methods... */
  var otherFunction = function () {
  }

  var MD = equire("modernizr-detectizr");

  var init = function(event) {
    return {};
  }

  /* public methods... */
  return {
    MD : MD,
    init : init,
    defaultListeners : ["DOMContentLoaded"]
  };
})();
