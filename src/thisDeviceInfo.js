module.exports = (function() {

  "use strict";

  // JSON.stringify and other JSON method are not as widely supported as they should.
  // JSON.stringify polyfill -- https://github.com/douglascrockford/JSON-js
  require('./lib/json2/json2.min');

  // DEFAULT config params
  var defaultConfig = {
    throttleInterval: 100,
    callbackFn: function() {
      console.log("-- [detection results callback] --");
    }
  }

  // public methods and objects
  // entry point: init()
  return {

    config : defaultConfig,
    modules : {},
    listeners : {},
    results : {},

    injectJsCSS : require('./lib/injectJsCss/injectJsCss'),
    throttle : require('./lib/throttle/throttle'),

    loadModule : function(name,module,listenersList) {

      "use strict";

      if (Object.prototype.toString.call(listenersList) != "[object Array]") {
        listenersList = module.defaultListeners || [];
      };

      try {

        if (!name) {
          name = "module_"+(Math.random()*10000).toFixed(0);
        };

        if (!module) {
          module = {init:function(){}};
        };

        console.log("Loading module " + name + ": will be triggered by " + listenersList.join(", ") + " events");

        this.modules[name] = ({
          name: name,
          init: module.init,
          listeners: listenersList
        });

      } catch(e) {
        console.log("ERROR: Couldn't load module "+name+"!",e);
      }

      for (var i=0; i<listenersList.length; i++) {

        if ( typeof this.listeners[listenersList[i]] == "undefined") {
          this.listeners[listenersList[i]] = [name];
        } else {
          this.listeners[listenersList[i]].push(name);
        };

      }
    },

    refresh : function(event) {

      "use strict";

      if (typeof event == "undefined") {
        event = { type: "all" };
        console.log("------- REFRESH!");
      } else {
        console.log("------- REFRESH! triggered by " + event.type + " event");
      }

      var module;
      for (var i=0; i < this.listeners[event.type].length; i++) {

        module = this.modules[this.listeners[event.type][i]];
        try{
          console.log("Running module " + module.name + "...");
          this.results[module.name] = module.init(event);
        } catch(e) {
          console.log("ERROR: couldn't run module "+ module.name +"!",e );
        }

      };

      console.log("Calling callback function...");

      if (window.location.hash == "#debug") {

        if (window.JSON) {
          document.body.innerHTML = '<div style="background:black;color: #FFF;white-space:pre-wrap;font:14px/1.2em monospace;">'+JSON.stringify(this.results,null,2)+'</div>';
        } else {
          console.log("JSON output not supported")
        }

      } else {

        if (window.requestAnimationFrame) {
          requestAnimationFrame(this.callbackFn);
        } else {
          this.callbackFn();
        }

      }
      console.log("...done.")
    },

    init : function(inputConfig) {

      "use strict";

      if (!window.console || !window.console.log) {
        window.log = [];
        window.console = { log: function(message) { window.log.push(message); } };
      }

      if (!window.addEventListener) {
        window.addEventListener = function() {
          console.log("Sadly addEventListener is not supported by the current browser.")
        };
      }

      console.log("------- INIT!");

      if (typeof inputConfig == "object") {
        for (var c in inputConfig) {
          if (inputConfig.hasOwnProperty(c)) {
            this.config[c] = inputConfig[c];
            console.log("CONFIG: "+ c + " settings has been set to " + ((typeof this.config[c] !== "function")?this.config[c]:"a custom function"));
          }
        }
      };

      this.callbackFn = this.config.callbackFn;

      console.log("Adding event listeners...");
      for (var listener in this.listeners) {
        window.addEventListener(listener,
          this.throttle(
            function(event) {
              console.log("Throttled event " + event.type);
              this.refresh(event);
            },
            this.config.throttleInterval,this)
          );
      }


      console.log("INIT complete.");
    }

  }

})();
