module.exports = (function() {

  "use strict";

  /* private vars and methods... */

 
  function detectApplePay(data) {
    paymentsInfoEvent = new CustomEvent("__PaymentsInfoEvent", {
      detail: data,
      bubbles: true,
      cancelable: true
    });
    dispatchEvent(paymentsInfoEvent);
  }


  // as seen at https://developer.apple.com/documentation/apple_pay_on_the_web/apple_pay_js_api/checking_for_apple_pay_availability
  // let's call the promise..
  if (window.ApplePaySession) {
     var merchantIdentifier = 'example.com.store';
     var promise = ApplePaySession.canMakePaymentsWithActiveCard(merchantIdentifier);
     promise.then(function (canMakePayments) {
       if (canMakePayments)
           // Apple Pay is supported.
         detectApplePay(window.ApplePaySession);
       }); 
  } else {
  
     // Apple Pay is not supported.
                  
  }

  // called when the custom event is fired
  var init = function(event) {
    if (typeof event !== "undefined") {
      if (typeof event.detail !== "undefined" && event.type == "__PaymentsInfoEvent") {
        return event.detail;
      }
    }
  };


  /* public methods... */
  return {
    init : init,
    defaultListeners : ["__PaymentsInfoEvent"]
  };
  
})();
