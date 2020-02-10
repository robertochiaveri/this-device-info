module.exports = (function() {

  "use strict";

  /* private vars and methods... */
  var webglDetect = function() {
    "use strict";

    if (!!window.WebGLRenderingContext) {
      var canvas = document.createElement("canvas"),
        names = ["webgl", "experimental-webgl", "moz-webgl"],
        gl = false;

      for (var i in names) {
        try {
          gl = canvas.getContext(names[i]);
          if (gl && typeof gl.getParameter == "function") {
            /* WebGL is enabled */
            /* return true; */
            return names[i];
          }
        } catch (e) {}
      }

      /* WebGL is supported, but disabled */
      return false;
    }

    /* WebGL not supported*/
    return false;
  }

  var getMaxColorBuffers = function(gl) {

    var maxColorBuffers = 1;
    var ext = gl.getExtension("WEBGL_draw_buffers");
    if (ext != null) {
      maxColorBuffers = gl.getParameter(ext.MAX_DRAW_BUFFERS_WEBGL);
    }

    return maxColorBuffers;
  }

  var getMaxAnisotropy = function(gl) {

    var e = gl.getExtension('EXT_texture_filter_anisotropic')
         || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic')
         || gl.getExtension('MOZ_EXT_texture_filter_anisotropic');

    if (e) {
      var max = gl.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      // See Canary bug: https://code.google.com/p/chromium/issues/detail?id=117450
      if (max === 0) {
        max = 2;
      }
      return max;
    }
    return 'n/a';
  }

  var getBestFloatPrecision = function(shaderType,gl) {

    var high = gl.getShaderPrecisionFormat(shaderType, gl.HIGH_FLOAT);
    var medium = gl.getShaderPrecisionFormat(shaderType, gl.MEDIUM_FLOAT);
    var low = gl.getShaderPrecisionFormat(shaderType, gl.LOW_FLOAT);

    var best = high;
    if (high.precision === 0) {
        best = medium;
    }

    return {
      high:   getPrecisionDescription(high, false),
      medium: getPrecisionDescription(medium, false),
      low:    getPrecisionDescription(low, false),
      best:   getPrecisionDescription(best, false)
    }
  }

  var getFloatIntPrecision = function(gl) {

    var high = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);
    var s = (high.precision !== 0) ? 'highp/' : 'mediump/';

    high = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT);
    s += (high.rangeMax !== 0) ? 'highp' : 'lowp';

    return s;
  }

  var getPrecisionDescription = function(precision, verbose) {
    var verbosePart = verbose ? ' bit mantissa' : '';
    return '[-' + formatPower(precision.rangeMin, verbose) + ', ' + formatPower(precision.rangeMax, verbose) + '] (' + precision.precision + verbosePart + ')'
  }

  var formatPower = function(exponent, verbose) {
    if (verbose) {
      return '' + Math.pow(2, exponent);
    } else {
      return '2^' + exponent;
    }
  }

  var init = function() {

    var webGLInfo = {},
      unMaskedInfo = {},
      gl = {},
      context_name = {};

    context_name = webglDetect();

    gl = document.createElement("canvas").getContext(context_name);

    if (context_name && gl !== null) {

      webGLInfo.contextName                     = context_name;
      webGLInfo.version                         = gl.getParameter(gl.VERSION);
      webGLInfo.vendor                          = gl.getParameter(gl.VENDOR);
      webGLInfo.renderer                        = gl.getParameter(gl.RENDERER);
      webGLInfo.shadingLanguageVersion          = gl.getParameter(gl.SHADING_LANGUAGE_VERSION);

      webGLInfo.redBits                         = gl.getParameter(gl.RED_BITS);
      webGLInfo.greenBits                       = gl.getParameter(gl.GREEN_BITS);
      webGLInfo.blueBits                        = gl.getParameter(gl.BLUE_BITS);
      webGLInfo.alphaBits                       = gl.getParameter(gl.ALPHA_BITS);
      webGLInfo.depthBits                       = gl.getParameter(gl.DEPTH_BITS);
      webGLInfo.stencilBits                     = gl.getParameter(gl.STENCIL_BITS);

      webGLInfo.maxRenderBufferSize             = gl.getParameter(gl.MAX_RENDERBUFFER_SIZE);
      webGLInfo.maxCombinedTextureImageUnits    = gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
      webGLInfo.maxCubeMapTextureSize           = gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);
      webGLInfo.maxFragmentUniformVectors       = gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS);
      webGLInfo.maxTextureImageUnits            = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
      webGLInfo.maxTextureSize                  = gl.getParameter(gl.MAX_TEXTURE_SIZE);
      webGLInfo.maxVaryingVectors               = gl.getParameter(gl.MAX_VARYING_VECTORS);
      webGLInfo.maxVertexAttributes             = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
      webGLInfo.maxVertexTextureImageUnits      = gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
      webGLInfo.maxVertexUniformVectors         = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);

      webGLInfo.dbgRenderInfo                   = gl.getExtension("WEBGL_debug_renderer_info");
      webGLInfo.rendererUnmasked                = (webGLInfo.dbgRenderInfo != null)?gl.getParameter(webGLInfo.dbgRenderInfo.UNMASKED_RENDERER_WEBGL):undefined;
      webGLInfo.vendorUnmasked                  = (webGLInfo.dbgRenderInfo != null)?gl.getParameter(webGLInfo.dbgRenderInfo.UNMASKED_VENDOR_WEBGL):undefined;

      webGLInfo.antialias                       = gl.getContextAttributes().antialias ? 'Available' : 'Not available';

      webGLInfo.maxColorBuffers                 = getMaxColorBuffers(gl);
      webGLInfo.maxAnisotropy                   = getMaxAnisotropy(gl);
      webGLInfo.vertexShaderBestPrecision       = getBestFloatPrecision(gl.VERTEX_SHADER,gl);
      webGLInfo.fragmentShaderBestPrecision     = getBestFloatPrecision(gl.FRAGMENT_SHADER,gl);
      webGLInfo.fragmentShaderFloatIntPrecision = getFloatIntPrecision(gl);
      // webGLInfo.extensions                      = gl.getSupportedExtensions();

    }

    return webGLInfo;
  }

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded"]
  };
  
})()
