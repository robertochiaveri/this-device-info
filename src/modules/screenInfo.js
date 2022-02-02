module.exports = (function() {

      "use strict";

      /* private vars and methods... */

      var commonRatios = {
        num:   [ 2/3 , 3/4 , 3/5 , 16/10 , 16/9 , 9/16 , 10/16 , 5/3 , 4/3 , 3/2 ],
        label: ["2:3","3:4","3:5","16:10","16:9","9:16","10:16","5:3","4:3","3:2"]
      };

      var calcGCD = function(x, y) {
        /* calculates the Greatest Common Divider of x and y */
        if(!x || !y) { return; }
        while (y != 0) {
          var z = x % y;
          x = y;
          y = z;
        }
        return x;
      };

      var getClosest = function(num, arr) {

        var curr  = arr[0],
            diff  = Math.abs (num - curr),
            newdiff = null;

        for (var val = 0; val < arr.length; val++) {
            newdiff = Math.abs (num - arr[val]);
            if (newdiff < diff) {
                diff = newdiff;
                curr = arr[val];
            }
        }
        return curr;
      };

      var getRatio = function (w,h) {

        "use strict";

        var n = w/h,
            ratio,
            approx_n,
            approx_ratio,
            approx_error,
            gcd = calcGCD(w,h),
            max = Math.max(w,h),
            min = Math.min(w,h);

        ratio =  (max/gcd).toString() + ":" + (min/gcd).toString();

        approx_n      = getClosest(n,commonRatios.num);
        approx_ratio  = commonRatios.label[commonRatios.num.indexOf(approx_n)];
        approx_error  = (Math.abs(approx_n-n)*100/n ).toFixed(2) +"%";

        return {
          exact: {
            num: n,
            str: ratio
          },
          approximated: {
            num: approx_n,
            str: approx_ratio,
            error: approx_error
          }
        }
      };

      var getTouch = function() {
    
        var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
        
        var mq = function (query) {
            return window.matchMedia(query).matches;
        }
    
        if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
            return true;
        }
    
        var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
        return mq(query);
      }


      var init = function () {

        function getOrientation() {

          var currentOrientation = window.orientation;
          var defaultOrientation;

          try {
            var orientation = screen.orientation || screen.mozOrientation || screen.msOrientation;
            if (orientation) {
              currentOrientation = orientation.angle
            };
          } catch(e) {};

          try {
            defaultOrientation = (window.screen.width >= window.screen.height && currentOrientation === 0)?"landscape":"portrait";
          } catch(e) {};

          return {
            currentOrientation: currentOrientation,
            defaultOrientation: defaultOrientation
          };

        }

        return {
          scrollY:            window.pageYOffset,
          innerWidth:         window.innerWidth,
          innerHeight:        window.innerHeight,
          outerWidth:         window.outerWidth,
          outerHeight:        window.outerHeight,
          pixelRatio:         window.devicePixelRatio,
          colorDepth:         window.screen.colorDepth,
          screenWidth:        window.screen.width,
          screenHeight:       window.screen.height,
          screenAvailWidth:   window.screen.availWidth,
          screenAvailHeight:  window.screen.availHeight,
          screenLeft:         window.screen.left,
          screenTop:          window.screen.top,
          viewportRatio:      getRatio(window.screen.availWidth,window.screen.availHeight),
          screenRatio:        getRatio(window.screen.width,window.screen.height),
          windowRatio:        getRatio(window.innerWidth,window.innerHeight),
          orientation:        getOrientation(),
          screenX:            window.screenX,
          screenY:            window.screenY,
          visbilityState:     document.visbilityState,
          touch:              getTouch()
        };
      };

      /* public methods... */
      return {
        init : init,
        defaultListeners : ["DOMContentLoaded","resize","orientationchange","scroll","visibilitychange"]
      };
    })()