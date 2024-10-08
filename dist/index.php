<?php
header('Accept-CH: sec-ch-ua-arch,sec-ch-ua-platform,sec-ch-ua-platform-version,sec-ch-ua-mobile,sec-ch-ua-model,sec-ch-ua-full-version,sec-ch-ua-bitness,sec-ch-device-memory,sec-ch-dpr', true);
header('Content-Type: text/html; charset=utf-8');
?><!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="HandheldFriendly" content="true" />

    <link rel="stylesheet" type="text/css" href="template/default/css/style.css">

    <meta name="robots" content="noindex, nofollow">
    <title>This device info</title>
    <meta name="author" content="Roberto Chiaveri">

  </head>

  <body>
    <a name="top"></a>

    <h1 id="logo">This device</h1>

    <div id="results">
      <noscript>Javascript is not supported by this browser.</noscript>
    </div>

    <!--[if lte IE 9]>
      This version of Internet Explorer is not supported.
    <![endif]-->

    <script>
      var script = document.createElement('script');
      script.onload = function () { 
        window.document.dispatchEvent(new Event("DOMContentLoaded", {
          bubbles: true,
          cancelable: true
        }));        
      };
      script.src = "detection.js?nocache="+(Math.random()*1000);

      document.head.appendChild(script);
    </script>

  </body>
</html>
