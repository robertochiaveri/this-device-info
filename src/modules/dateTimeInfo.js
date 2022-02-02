
module.exports = (function() {

  "use strict";

  var getDST = function() {
    Date.prototype.stdTimezoneOffset = function () {
        var jan = new Date(this.getFullYear(), 0, 1);
        var jul = new Date(this.getFullYear(), 6, 1);
        return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    }
    
    Date.prototype.isDstObserved = function () {
        return this.getTimezoneOffset() < this.stdTimezoneOffset();
    }
    
    var today = new Date();
    if (today.isDstObserved()) { 
       return true
    }
    return false;
  }

  var getFullDate = function() {
    return new Date().toLocaleDateString(
        undefined, 
        { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        }
    );
  }

  var getTimezone = function() {
    if (window.Intl && window.Intl.DateTimeFormat) {
      return new window.Intl.DateTimeFormat().resolvedOptions().timeZone
    } 
  }

  var getTimezoneOffset = function() {
    return "GMT "+(new Date().getTimezoneOffset()/60)
  }


  var init = function(event) {   
      
    return {
      date: getFullDate(),
      timezone: getTimezone(),
      timezoneOffset: getTimezoneOffset(),
      daylightSavingTime: getDST()
    } 

  }

  
  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded"]
  };
})();

