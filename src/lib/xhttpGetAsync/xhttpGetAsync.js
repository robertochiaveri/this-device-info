module.exports = function(url, callback, method, params, timeout) {

    console.log("**** Calling " + url + "...");

    if (!method) { method = "GET"; }
    if (!params) { params = null; }

    var xmlHttp = new XMLHttpRequest();
    xmlHttp._url = url;
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
          console.log("**** Async request to " + this._url + " received a response");
          var headers = xmlHttp.getAllResponseHeaders();  //coach added to retrieve sec-ch-* headers requested via php accept header
          callback(xmlHttp.responseText,headers);
        } else {
          console.log("**** Async request to " + this._url + " FAILED (" + xmlHttp.status + ")");
        }
      }
    };
    xmlHttp.open(method, url, true); // true for asynchronous
    xmlHttp.timeout = timeout || 5000;
    xmlHttp.send(params);

}
