module.exports = function(filename,filetype) {

  var id = filename.replace(/[^a-z0-9]/gi, '_').toLowerCase();

  if (!document.getElementById(id)) {
    
    switch (filetype) {

      case "js": 
        var fileref=document.createElement('script');
        fileref.setAttribute("id",id);
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", filename);
      break;

      case "css":
        var fileref=document.createElement("link");
        fileref.setAttribute("id", id);
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
      break;

    };
    
    console.log("injecting " + filename + " as " + id);
    document.getElementsByTagName("head")[0].appendChild(fileref);
  }
};