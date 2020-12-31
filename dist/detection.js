(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

window.thisDeviceInfo = require("./thisDeviceInfo");

/*

  USAGE:
  ======

  1. for each module needed, repeat:
  ----------------------------------
    thisDeviceInfo.loadModule(
      moduleName [string],
      module [function],
      (optional) listenersList [array]
    );


  2. finally:
  -----------
    thisDeviceInfo.init({
      throttleInterval: [number] milliseconds
      callbackFn: [function] a callback called at every update cycle to display output
    });


  3. optionally:
  --------------
    add #debug to the URL to disp()lay raw JSON output

*/

thisDeviceInfo.loadModule("navigatorInfo", require('./modules/navigatorInfo'));

thisDeviceInfo.loadModule("screenInfo", require('./modules/screenInfo'));

thisDeviceInfo.loadModule("gyroscopeInfo", require('./modules/gyroscopeInfo'));

thisDeviceInfo.loadModule("motionSensorsInfo", require('./modules/motionSensorsInfo'));

thisDeviceInfo.loadModule("webGLInfo", require('./modules/webGLInfo'));

thisDeviceInfo.loadModule("phonegapDeviceInfo", require('./modules/phonegapDeviceInfo'));

thisDeviceInfo.loadModule("batteryInfo", require('./modules/batteryInfo'));

thisDeviceInfo.loadModule("connectionInfo", require('./modules/connectionInfo'));

thisDeviceInfo.loadModule("mediaCaptureInfo", require('./modules/mediaCaptureInfo'));

thisDeviceInfo.loadModule("ambientLightInfo", require('./modules/ambientLightInfo'));

thisDeviceInfo.loadModule("userAgentInfo", require('./modules/userAgentInfo'));

thisDeviceInfo.loadModule("UALookupInfo", require('./modules/uaLookupInfo'));

thisDeviceInfo.loadModule("IPLookupInfo", require('./modules/ipLookupInfo'));

thisDeviceInfo.loadModule("UIInfo", require('./modules/uiModeInfo'));

thisDeviceInfo.loadModule("iOSClientInfo", require('./modules/iOSClientInfo'));

thisDeviceInfo.loadModule("bluetoothInfo", require('./modules/bluetoothInfo'));

thisDeviceInfo.loadModule("dateTimeInfo", require('./modules/dateTimeInfo'));

thisDeviceInfo.loadModule("GPUInfo", require('./modules/GPUInfo'));

thisDeviceInfo.init({
  callbackFn: require("./template/default/js/output")
});

},{"./modules/GPUInfo":7,"./modules/ambientLightInfo":8,"./modules/batteryInfo":9,"./modules/bluetoothInfo":10,"./modules/connectionInfo":11,"./modules/dateTimeInfo":12,"./modules/gyroscopeInfo":13,"./modules/iOSClientInfo":14,"./modules/ipLookupInfo":15,"./modules/mediaCaptureInfo":16,"./modules/motionSensorsInfo":17,"./modules/navigatorInfo":18,"./modules/phonegapDeviceInfo":19,"./modules/screenInfo":20,"./modules/uaLookupInfo":21,"./modules/uiModeInfo":22,"./modules/userAgentInfo":23,"./modules/webGLInfo":24,"./template/default/js/output":27,"./thisDeviceInfo":28}],2:[function(require,module,exports){
/*!*********************************************************************
 * This Source Code Form is copyright of 51 Degrees Mobile Experts Limited.
 * Copyright 2019 51 Degrees Mobile Experts Limited, 9 Greyfriars Rd,
 * Reading, Berkshire, RG1 1NU.
 *
 * This Source Code Form is the subject of the following patents and patent
 * applications, owned by 51 Degrees Mobile Experts Limited of 9 Greyfriars
 * Rd, Reading, Berkshire, RG1 1NU:
 * GB1905888.2 and EP19192975.1.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0.
 *
 * If a copy of the MPL was not distributed with this file, You can obtain
 * one at http://mozilla.org/MPL/2.0/.
 *
 * This Source Code Form is "Incompatible With Secondary Licenses", as
 * defined by the Mozilla Public License, v. 2.0.
 ********************************************************************** */
module.exports = function getRenderer(n,t){function u(){function s(n){for(var h=50,f=50,a=2,e=[],o=[],c=[],i=[],u,s,l,v,y,r=0;r<=h;++r){var p=r*Math.PI/h,w=Math.sin(p),nt=Math.cos(p);for(u=0;u<=f;++u){var b=u*2*Math.PI/f,tt=Math.sin(b),it=Math.cos(b),k=it*w,d=nt,g=tt*w,rt=1-u/f,ut=1-r/h;e.push(a*k);e.push(a*d);e.push(a*g);o.push(k);o.push(d);o.push(g);c.push(rt);c.push(ut)}}for(r=0;r<h;++r)for(u=0;u<f;++u)s=r*(f+1)+u,l=s+f+1,i.push(s),i.push(l),i.push(s+1),i.push(l),i.push(l+1),i.push(s+1);e=new Float32Array(e);o=new Float32Array(o);c=new Float32Array(c);i=new Uint16Array(i);var ft=n.createBuffer(),et=n.createBuffer(),ot=n.createBuffer();return n.bindBuffer(n.ARRAY_BUFFER,ft),n.bufferData(n.ARRAY_BUFFER,e,n.STATIC_DRAW),v=n.getAttribLocation(t,"c"),n.vertexAttribPointer(v,3,n.FLOAT,!1,0,0),n.enableVertexAttribArray(v),n.bindBuffer(n.ARRAY_BUFFER,et),n.bufferData(n.ARRAY_BUFFER,o,n.STATIC_DRAW),y=n.getAttribLocation(t,"d"),n.vertexAttribPointer(y,3,n.FLOAT,!1,0,0),n.enableVertexAttribArray(y),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,ot),n.bufferData(n.ELEMENT_ARRAY_BUFFER,i,n.STATIC_DRAW),i.length}function h(){var u,f,y,a,h,v,p,w,b,k,d;if((n=l()))return u=n.createShader(n.VERTEX_SHADER),n.shaderSource(u,e),n.compileShader(u),f=n.createShader(n.FRAGMENT_SHADER),n.shaderSource(f,o),n.compileShader(f),t=n.createProgram(),n.attachShader(t,u),n.attachShader(t,f),n.linkProgram(t),n.detachShader(t,u),n.detachShader(t,f),n.deleteShader(u),n.deleteShader(f),n.useProgram(t),y=s(n),n.clearColor(0,0,0,1),n.enable(n.DEPTH_TEST),a=r.create(),r.perspective(a,Math.PI/6,1,.1,100),h=r.create(),r.lookAt(h,[0,0,10],[0,0,0],[0,1,0]),v=r.create(),r.multiply(v,a,h),p=n.getUniformLocation(t,"h"),n.uniformMatrix4fv(p,!1,h),w=n.getUniformLocation(t,"i"),n.uniformMatrix4fv(w,!1,v),b=n.getUniformLocation(t,"e"),n.uniform4fv(b,[10,10,10,1]),k=n.getUniformLocation(t,"f"),n.uniform3fv(k,[.9,.5,.3]),d=n.getUniformLocation(t,"g"),n.uniform3fv(d,[1,1,1]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.drawElements(n.TRIANGLES,y,n.UNSIGNED_SHORT,0),c(),i.toDataURL()}function c(){n.useProgram(null);t&&n.deleteProgram(t)}function l(){i.width=67;i.height=67;var n=i.getContext("webgl")||i.getContext("experimental-webgl");return n&&(n.viewport(0,0,67,67),n.clearColor(0,0,0,1),n.clear(n.COLOR_BUFFER_BIT)),n}var n,t,i,e="attribute vec3 c,d; uniform vec4 e; uniform vec3 f,g;uniform mat4 h,i;varying vec3 j;void main(){vec3 a=normalize(d);vec4 b=h*vec4(c,1.);vec3 k=normalize(vec3(e-b));j=g*f*max(dot(k,a),0.),gl_Position=i*vec4(c,1.);}",o="#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec3 j;void main(){gl_FragColor = vec4(j, 1.0);}",r={create:function(){for(var t=new Array(16),n=0;n<16;n++)t[n]=n%5==0?1:0;return t},perspective:function(n,t,i,r,u){var e=1/Math.tan(t/2),f;return n[0]=e/i,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=e,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,u!=null&&u!==Infinity?(f=1/(r-u),n[10]=(u+r)*f,n[14]=2*u*r*f):(n[10]=-1,n[14]=-2*r),n},lookAt:function(n,t,i,u){var h,c,l,a,v,y,e,o,s,f,p=t[0],w=t[1],b=t[2],k=u[0],d=u[1],g=u[2],nt=i[0],tt=i[1],it=i[2];return Math.abs(p-nt)<1e-6&&Math.abs(w-tt)<1e-6&&Math.abs(b-it)<1e-6?r.identity(n):(e=p-nt,o=w-tt,s=b-it,f=1/Math.hypot(e,o,s),e*=f,o*=f,s*=f,h=d*s-g*o,c=g*e-k*s,l=k*o-d*e,f=Math.hypot(h,c,l),f?(f=1/f,h*=f,c*=f,l*=f):(h=0,c=0,l=0),a=o*l-s*c,v=s*h-e*l,y=e*c-o*h,f=Math.hypot(a,v,y),f?(f=1/f,a*=f,v*=f,y*=f):(a=0,v=0,y=0),n[0]=h,n[1]=a,n[2]=e,n[3]=0,n[4]=c,n[5]=v,n[6]=o,n[7]=0,n[8]=l,n[9]=y,n[10]=s,n[11]=0,n[12]=-(h*p+c*w+l*b),n[13]=-(a*p+v*w+y*b),n[14]=-(e*p+o*w+s*b),n[15]=1,n)},multiply:function(n,t,i){var o=t[0],s=t[1],h=t[2],c=t[3],l=t[4],a=t[5],v=t[6],y=t[7],p=t[8],w=t[9],b=t[10],k=t[11],d=t[12],g=t[13],nt=t[14],tt=t[15],r=i[0],u=i[1],f=i[2],e=i[3];return n[0]=r*o+u*l+f*p+e*d,n[1]=r*s+u*a+f*w+e*g,n[2]=r*h+u*v+f*b+e*nt,n[3]=r*c+u*y+f*k+e*tt,r=i[4],u=i[5],f=i[6],e=i[7],n[4]=r*o+u*l+f*p+e*d,n[5]=r*s+u*a+f*w+e*g,n[6]=r*h+u*v+f*b+e*nt,n[7]=r*c+u*y+f*k+e*tt,r=i[8],u=i[9],f=i[10],e=i[11],n[8]=r*o+u*l+f*p+e*d,n[9]=r*s+u*a+f*w+e*g,n[10]=r*h+u*v+f*b+e*nt,n[11]=r*c+u*y+f*k+e*tt,r=i[12],u=i[13],f=i[14],e=i[15],n[12]=r*o+u*l+f*p+e*d,n[13]=r*s+u*a+f*w+e*g,n[14]=r*h+u*v+f*b+e*nt,n[15]=r*c+u*y+f*k+e*tt,n},identity:function(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}},f=0,u;return i=document.createElement("canvas"),i!=null&&(u=h(),u&&(f=v(u))),f}function a(){function i(){this.samples=[];this.active=0}function r(t){t.terminate();n(t.state)}function u(t){clearTimeout(t.currentTarget.timeout);var i=t.currentTarget.state;t.currentTarget.terminate();i.samples=i.samples.concat(t.data);n(i)}function n(n){n.active--;n.active===0&&(e=n.samples,n.resolve(e))}function f(n,t,f){var o=[],h=new i,s,e;h.resolve=n;h.reject=t;try{for(e=0;e<2;e++)s=new Worker(f),s.state=h,s.onmessage=u,s.onerror=function(n){t(n)},o.push(s);for(e=0;e<o.length;e++)h.active++,o[e].postMessage(80),o[e].timeout=setTimeout(r,4e3,o[e])}catch(c){t(new Error(c))}}function o(n,t,i){fetch(i,{mode:"same-origin"}).then(function(i){if(i.ok)f(n,t,i.url);else{var r=new Error("Url could not be reached");r.response=i;t(r)}}).catch(function(n){t(n)})}return new Promise(function(n,i){e!=null?n(e):setTimeout(function(){o(n,i,t)},1e3)})}function f(t){return a().then(function(n){var i=0,r;n.length>0&&(r=n.reduce(function(n,t){return t+n}),i=r/n.length);c(t,i,0)}).catch(function(){n(t.x)})}function o(t){return a().then(function(n){var i=0,r,u;n.length>0&&(r=n.reduce(function(n,t){return t+n}),u=n.length>0?r/n.length:0,i=n.reduce(function(n,t){return n+Math.pow(t-u,2)},0)/(n.length-1));c(t,i,0)}).catch(function(){n(t.x)})}function v(n){for(var t=2166136261,i=0;i<n.length;++i)t^=n.charCodeAt(i),t+=(t<<1)+(t<<4)+(t<<7)+(t<<8)+(t<<24);return t>>>0}function i(){function r(n){n.width=67;n.height=67;var t=n.getContext("2d",{alpha:!0});if(t!=null)return t.imageSmoothingQuality="low",t.imageSmoothingEnabled=!0,t.globalCompositeOperation="source-over",t.globalAlpha=1,t.miterLimit=Infinity,t.filter="none",t.lineCap="butt",t.lineDashOffset=0,t.lineJoin="miter",t.font="10pt Arial",t.lineWidth=2,t.setLineDash!==undefined&&t.setLineDash([10,20]),t.shadowColor="black",t.shadowOffsetX=-3,t.shadowOffsetY=-5,t.translate(n.width/2,n.height/2),t.rotate(.8901179),t.fillStyle="green",t.textAlign="center",t.textBaseline="middle",t.fillText("*51Degrees*",0,0),t.beginPath(),t.shadowColor="yellow",t.shadowBlur=1,t.shadowOffsetX=1,t.shadowOffsetY=1,t.strokeStyle="red",t.fillStyle="rgba(0, 0, 255, 0.6)",t.ellipse===undefined?t.arc(0,0,25,0,2*Math.PI):t.ellipse(0,0,25,15,Math.PI/4,0,2*Math.PI),t.fill(),t.stroke(),n.toDataURL()}var t=0,i=document.createElement("canvas"),n;return i!=null&&(n=r(i),n&&(t=v(n))),t}function h(){return window.screen.height*window.devicePixelRatio}function y(n){return window.matchMedia(n).matches}function p(n,t){for(var i=0;i<t.length;i++)if(y("("+n+": "+t[i]+")"))return t[i];return"n/a"}function r(){return p("color-gamut",["p3","srgb"])}function w(){var n=/iPhone|iPad|Macintosh/.exec(navigator.userAgent);return n&&n.length>0?n[0]:""}function c(t,i,r){for(var u,o,f,e=0;e<t.n.length;e++)if(u=l[t.n[e]],u.r){for(o=0;o<u.r.length;o++)if(f=u.r[o],(f.a===null||i>=f.a)&&(f.b===null||i<=f.b)){s(u,0);return}}else if(u.v&&u.v.indexOf(i)!=-1){s(u,0);return}t.n.length>0&&r<10&&setTimeout(function(){s(t,r+1)},10);n(t.x)}function s(t,i){if(t.m){var r=t.m(t);r||r===""?r.then||c(t,r,i):t.x&&n(t.x)}else n(t.x)}var l=[{x:"Unknown",m:function(n){return w(n)},n:[4,2,1,3]},{x:"Apple A7 GPU|Apple A8 GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A12 GPU|Apple A13 GPU|Apple A14 GPU",m:function(n){return h(n)},n:[15,10,11,12,14,6,7,13,8,9,5],v:["iPhone"]},{x:"Apple A7 GPU|Apple A8 GPU|Apple A9X GPU|Apple A10X GPU|Apple A9 GPU|Apple A12X GPU|Apple A10 GPU|Apple A12 GPU|Apple A8X GPU",m:function(n){return h(n)},n:[19,20,18,17,16],v:["iPad"]},{x:"Apple A9X GPU|Apple A10X GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A12X GPU|Apple A12 GPU|Apple A8 GPU|Apple A8X GPU|Apple A13 GPU|Apple A14 GPU",m:function(n){return h(n)},n:[19,15,20,18,10,11,12,14,17,22,25,23,13,24,9,21],v:["Macintosh"]},{x:"Apple A10 GPU",v:["iPod Touch"]},{x:"Apple A7 GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A8 GPU|Apple A13 GPU",m:function(n){return r(n)},n:[27,26],v:[1136]},{x:"Apple A8 GPU|Apple A10 GPU|Apple A11 GPU|Apple A9 GPU",m:function(n){return r(n)},n:[28,29],v:[2001]},{x:"Apple A8 GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU",m:function(n){return r(n)},n:[30,31],v:[2208]},{x:"Apple A8 GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A13 GPU",m:function(n){return r(n)},n:[32,33],v:[1334]},{x:"Apple A11 GPU|Apple A12 GPU|Apple A13 GPU|Apple A14 GPU",m:function(n){return u(n)},n:[38,35,36,37,34],v:[2436]},{x:"Apple A12 GPU|Apple A13 GPU",m:function(n){return u(n)},n:[36,34],v:[2688]},{x:"Apple A12 GPU|Apple A13 GPU",m:function(n){return u(n)},n:[40,39],v:[1624]},{x:"Apple A12 GPU|Apple A13 GPU",m:function(n){return u(n)},n:[40,39],v:[1792]},{x:"Apple A11 GPU|Apple A12 GPU|Apple A14 GPU",m:function(n){return u(n)},n:[41,34,37],v:[2079]},{x:"Apple A14 GPU",v:[2532]},{x:"Apple A14 GPU",v:[2778]},{x:"Apple A7 GPU|Apple A8 GPU|Apple A9X GPU|Apple A10X GPU|Apple A9 GPU|Apple A12X GPU|Apple A10 GPU|Apple A12 GPU|Apple A8X GPU",m:function(n){return r(n)},n:[43,42],v:[2048]},{x:"Apple A9X GPU|Apple A10X GPU|Apple A12X GPU",m:function(n){return r(n)},n:[44,45],v:[2732]},{x:"Apple A10X GPU|Apple A12 GPU",m:function(n){return i(n)},n:[47,46],v:[2224]},{x:"Apple A12X GPU",v:[2388]},{x:"Apple A10 GPU|Apple A12 GPU",m:function(n){return i(n)},n:[48,49],v:[2160]},{x:"Apple A9X GPU|Apple A10X GPU|Apple A9 GPU|Apple A12X GPU|Apple A10 GPU|Apple A12 GPU|Apple A8 GPU|Apple A8X GPU",m:function(n){return r(n)},n:[43,50],v:[2048]},{x:"Apple A9 GPU|Apple A10 GPU|Apple A11 GPU",m:function(n){return r(n)},n:[51,31],v:[2208]},{x:"Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A13 GPU",m:function(n){return r(n)},n:[51,33],v:[1334]},{x:"Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A13 GPU",m:function(n){return r(n)},n:[52,27],v:[1136]},{x:"Apple A10 GPU|Apple A11 GPU|Apple A9 GPU",m:function(n){return r(n)},n:[51,29],v:[2001]},{x:"Apple A7 GPU|Apple A9 GPU|Apple A8 GPU",m:function(n){return i(n)},n:[53,55,54,56],v:["srgb"]},{x:"Apple A10 GPU|Apple A11 GPU|Apple A13 GPU",m:function(n){return u(n)},n:[57,35,58],v:["p3"]},{x:"Apple A8 GPU|Apple A9 GPU",m:function(n){return i(n)},n:[59,60],v:["srgb"]},{x:"Apple A10 GPU|Apple A11 GPU",m:function(n){return i(n)},n:[61,62],v:["p3"]},{x:"Apple A8 GPU|Apple A9 GPU",m:function(n){return i(n)},n:[63,64],v:["srgb"]},{x:"Apple A10 GPU|Apple A11 GPU",m:function(n){return i(n)},n:[61,65],v:["p3"]},{x:"Apple A8 GPU|Apple A9 GPU",m:function(n){return i(n)},n:[66,64],v:["srgb"]},{x:"Apple A10 GPU|Apple A11 GPU|Apple A13 GPU",m:function(n){return u(n)},n:[57,35,40],v:["p3"]},{x:"Apple A12 GPU",v:[958581112,4085158452]},{x:"Apple A11 GPU",v:[411650080,1220644697]},{x:"Apple A13 GPU",v:[4193218782]},{x:"Apple A14 GPU",v:[105985484]},{x:"Apple A14 GPU",v:[3403189785]},{x:"Apple A12 GPU",v:[4085158452]},{x:"Apple A13 GPU",v:[352823931,4193218782]},{x:"Apple A11 GPU",v:[411650080]},{x:"Apple A7 GPU|Apple A8 GPU|Apple A9X GPU|Apple A9 GPU|Apple A10 GPU|Apple A8X GPU",m:function(n){return i(n)},n:[70,67,71,72,73,68,69,53],v:["srgb"]},{x:"Apple A10X GPU|Apple A9X GPU|Apple A12X GPU|Apple A12 GPU",m:function(n){return i(n)},n:[76,74,75],v:["p3"]},{x:"Apple A9X GPU",v:["srgb"]},{x:"Apple A10X GPU|Apple A12X GPU",m:function(n){return i(n)},n:[46,77],v:["p3"]},{x:"Apple A10X GPU",v:[2114570256,3129316290]},{x:"Apple A12 GPU",v:[1349146759,2917249763]},{x:"Apple A10 GPU",v:[2114570256]},{x:"Apple A12 GPU",v:[1349146759]},{x:"Apple A9X GPU|Apple A9 GPU|Apple A10 GPU|Apple A8 GPU|Apple A8X GPU",m:function(n){return i(n)},n:[70,80,78,79,68,69],v:["srgb"]},{x:"Apple A9 GPU",v:["srgb"]},{x:"Apple A9 GPU|Apple A10 GPU",m:function(n){return i(n)},n:[81,56],v:["srgb"]},{x:"Apple A7 GPU",v:[857422828,1915583345]},{x:"Apple A9 GPU",v:[46663968,3129316290]},{x:"Apple A8 GPU",v:[839732043,3816812018,4125234388]},{x:"Apple A9 GPU",v:[2114570256]},{x:"Apple A10 GPU",v:[583354101,3458129248]},{x:"Apple A13 GPU",v:[352823931,3403189785,4193218782]},{x:"Apple A8 GPU",v:[1411440593,1924197914,4125234388]},{x:"Apple A9 GPU",v:[2114570256,3129316290]},{x:"Apple A10 GPU",v:[2114570256,3129316290]},{x:"Apple A11 GPU",v:[1349146759,2917249763]},{x:"Apple A8 GPU",v:[1411440593,1913250432,3074367344,4125234388]},{x:"Apple A9 GPU",v:[46663968,2114570256,3129316290]},{x:"Apple A11 GPU",v:[2917249763,3237505312]},{x:"Apple A8 GPU",v:[3128296539,3816812018,4125234388]},{x:"Apple A8 GPU",v:[2656686317,3710391565]},{x:"Apple A9X GPU|Apple A9 GPU|Apple A10 GPU",m:function(n){return f(n)},n:[84,85,82,83],v:[3129316290]},{x:"Apple A9 GPU|Apple A9X GPU|Apple A10 GPU",m:function(n){return f(n)},n:[88,86,89,87],v:[2114570256]},{x:"Apple A10 GPU",v:[46663968]},{x:"Apple A8 GPU|Apple A8X GPU",m:function(n){return f(n)},n:[91,90],v:[4125234388]},{x:"Apple A8 GPU|Apple A8X GPU",m:function(n){return u(n)},n:[92,93,94],v:[4005673483]},{x:"Apple A8 GPU|Apple A8X GPU",v:[1350183384,1361285941,3816812018]},{x:"Apple A10X GPU|Apple A9X GPU",m:function(n){return f(n)},n:[95,96],v:[3129316290]},{x:"Apple A9X GPU|Apple A10X GPU",m:function(n){return f(n)},n:[97,98],v:[2114570256]},{x:"Apple A12X GPU|Apple A12 GPU",v:[1349146759,2917249763]},{x:"Apple A12X GPU",v:[1349146759,2917249763]},{x:"Apple A8 GPU|Apple A8X GPU",m:function(n){return u(n)},n:[99,93],v:[4005673483]},{x:"Apple A8 GPU|Apple A8X GPU",v:[1361285941]},{x:"Apple A8X GPU",v:[1350183384,3816812018,4125234388]},{x:"Apple A9 GPU",v:[46663968]},{x:"Apple A10 GPU",r:[{a:13.66,b:16.36}]},{x:"Apple A9 GPU|Apple A9X GPU",m:function(n){return o(n)},n:[100],r:[{a:19.06,b:21.29}]},{x:"Apple A9 GPU",r:[{a:22.45,b:25.26}]},{x:"Apple A9 GPU",r:[{a:21.59,b:22.44}]},{x:"Apple A10 GPU",r:[{a:13.78,b:16.67}]},{x:"Apple A9X GPU|Apple A10 GPU",r:[{a:16.68,b:18.55}]},{x:"Apple A9 GPU",r:[{a:21.35,b:34.09}]},{x:"Apple A9 GPU|Apple A9X GPU",m:function(n){return o(n)},n:[101],r:[{a:19.54,b:21.34}]},{x:"Apple A8 GPU|Apple A8X GPU",m:function(n){return o(n)},n:[102,103],r:[{a:27.91,b:30.91}]},{x:"Apple A8 GPU",r:[{a:30.92,b:31.88}]},{x:"Apple A8X GPU",v:[1783160115]},{x:"Apple A8 GPU",v:[3928382683]},{x:"Apple A8 GPU|Apple A8X GPU",m:function(n){return o(n)},n:[104,105,106],v:[3403189785]},{x:"Apple A10X GPU",r:[{a:14.49,b:15.29}]},{x:"Apple A9X GPU",r:[{a:16.34,b:387.31}]},{x:"Apple A10X GPU",r:[{a:13.91,b:15.11}]},{x:"Apple A9X GPU",r:[{a:16.64,b:36.84}]},{x:"Apple A8X GPU",v:[1783160115,3403189785]},{x:"Apple A9X GPU|Apple A9 GPU",r:[{a:.26,b:115.16}]},{x:"Apple A9X GPU|Apple A9 GPU",r:[{a:.79,b:331.46}]},{x:"Apple A8X GPU",r:[{a:.26,b:5.67}]},{x:"Apple A8 GPU",r:[{a:6.13,b:177.99}]},{x:"Apple A8X GPU",r:[{a:.53,b:13.31}]},{x:"Apple A8 GPU",r:[{a:46.91,b:82.82}]},{x:"Apple A8 GPU",r:[{a:83.08,b:2952.42}]}],e=null;s(l[0],0)};
},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(t){return 10>t?"0"+t:t}function this_value(){return this.valueOf()}function quote(t){return rx_escapable.lastIndex=0,rx_escapable.test(t)?'"'+t.replace(rx_escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,u,f,a=gap,i=e[t];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(t)),"function"==typeof rep&&(i=rep.call(e,t,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,f=[],"[object Array]"===Object.prototype.toString.apply(i)){for(u=i.length,r=0;u>r;r+=1)f[r]=str(r,i)||"null";return o=0===f.length?"[]":gap?"[\n"+gap+f.join(",\n"+gap)+"\n"+a+"]":"["+f.join(",")+"]",gap=a,o}if(rep&&"object"==typeof rep)for(u=rep.length,r=0;u>r;r+=1)"string"==typeof rep[r]&&(n=rep[r],o=str(n,i),o&&f.push(quote(n)+(gap?": ":":")+o));else for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o=str(n,i),o&&f.push(quote(n)+(gap?": ":":")+o));return o=0===f.length?"{}":gap?"{\n"+gap+f.join(",\n"+gap)+"\n"+a+"}":"{"+f.join(",")+"}",gap=a,o}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","  ":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;r>n;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n=walk(o,r),void 0!==n?o[r]=n:delete o[r]);return reviver.call(t,e,o)}var j;if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();
},{}],5:[function(require,module,exports){
module.exports = function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last,
      deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date,
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
};
},{}],6:[function(require,module,exports){
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
          callback(xmlHttp.responseText);
        } else {
          console.log("**** Async request to " + this._url + " FAILED (" + xmlHttp.status + ")");
        }
      }
    };
    xmlHttp.open(method, url, true); // true for asynchronous
    xmlHttp.timeout = timeout || 5000;
    xmlHttp.send(params);

}

},{}],7:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  /*

    not as reliable as 51degrees script (in /lib/) --- it reports the wrong GPU for many devices..

   */


  /* private vars and methods... */

  var detectGPU = require('./../node_modules/detect-gpu/dist/detect-gpu.umd.js');

  detectGPU.getGPUTier().then(function(GPUInfo){
      
    console.log("GPUInfo has completed the GPU benchmark",GPUInfo)
    var GPUInfoEvent = new CustomEvent("__GPUInfoEvent", {
      detail: GPUInfo,
      bubbles: true,
      cancelable: true
    });
    dispatchEvent(GPUInfoEvent);

  })

  var init = function(event) {

    if (typeof event !== "undefined") {
      if (typeof event.detail !== "undefined" && event.type == "__GPUInfoEvent") {
        return event.detail;
      }
    }

  };

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["__GPUInfoEvent"]
  };
})();

},{"./../node_modules/detect-gpu/dist/detect-gpu.umd.js":25}],8:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  /* private vars and methods... */

  function getAmbientLight(event) {

    var ambientLightInfoEvent,
        detail = {
          luminosity: false,
          illuminance: false
        };

    if (event && event.target && typeof event.target.illuminance !== "undefined") {
      detail.illuminance = event.target.illuminance + " lux";
    } 

    // ambient light media queries
    if (typeof window.matchMedia == "function") {
              
      if (window.matchMedia("(luminosity: dim)").matches) {
        detail.luminosity = "dark";
      }

      if (window.matchMedia("(luminosity: normal)").matches) {
        detail.luminosity = "bright";
      }

      if (window.matchMedia("(luminosity: washed)").matches) {
        detail.luminosity = "very bright";
      }

    }

    ambientLightInfoEvent = new CustomEvent("__AmbientLightInfoEvent", {
      detail: detail,
      bubbles: true,
      cancelable: true
    });
    dispatchEvent(ambientLightInfoEvent);

    return detail;

  }


  var init = function(event) {

    if ("AmbientLightSensor" in window) {
      if (typeof event !== "undefined") {
        if (typeof event.detail !== "undefined" && event.type == "__AmbientLightInfoEvent") {
          return event.detail;
        }
      }
    } else {
      return {
        error: "ambient light sensor is not supported"
      }
    }

  };


  // ambient light sensor 
  if ("AmbientLightSensor" in window) {
  
    console.log("AmbientLight seems supported...");

    var lightSensor = new AmbientLightSensor({frequency:10});

    console.log("...adding AmbientLight event listener");
    lightSensor.addEventListener("reading",getAmbientLight);
    console.log("...Starting AmbientLight sensor");
    lightSensor.start();  
    
  } else {
    console.log("AmbientLightSensor is not supported")        
  }



  /* public methods... */
  return {
    init : init,
    defaultListeners : ["__AmbientLightInfoEvent","reading"]
  };
  
})();

},{}],9:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  /* private vars and methods... */

  function addListeners(battery) {

    battery.addEventListener("levelchange", function() {
      readBattery(battery);
    });

    battery.addEventListener('chargingchange', function() {
      readBattery(battery);
    });

    battery.addEventListener('chargingtimechange', function() {
      readBattery(battery);
    });

    battery.addEventListener('dischargingtimechange', function() {
      readBattery(battery);
    });

    readBattery(battery);

  }



  function readBattery(battery) {

    var batteryInfoEvent,
        detail = {};

    if (typeof battery !== "undefined") {

      if ( typeof battery.charging !== "undefined") {
          detail.batteryStatus = battery.charging ? 'Adapter' : 'Battery';
      }

      if (typeof battery.level !== "undefined") {

        if (battery.level == 1 && battery.charging) {
          /* could be a device without battery plugged in, don't report the 100% level */
        } else {
          detail.batteryLevel = parseFloat(battery.level * 100).toFixed(0) + '%';
        }

      }
    }

    batteryInfoEvent = new CustomEvent("__BatteryInfoEvent", {
      detail: detail,
      bubbles: true,
      cancelable: true
    });
    dispatchEvent(batteryInfoEvent);


    return detail;

  }


  var init = function(event) {

    if (typeof event !== "undefined") {
      if (typeof event.detail !== "undefined" && event.type == "__BatteryInfoEvent") {
        return event.detail;
      }
    }

  };



  if (navigator.battery) {
    readBattery(navigator.battery);
  } else if (navigator.getBattery) {
    navigator.getBattery().then(addListeners);
  }


  /* public methods... */
  return {
    init : init,
    defaultListeners : ["__BatteryInfoEvent","dischargingtimechange","chargingtimechange","chargingchange","levelchange"]
  };
  
})();

},{}],10:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  /* private vars and methods... */
  try {
    if (navigator.bluetooth && navigator.bluetooth.getAvailability) {
      navigator.bluetooth.getAvailability().then(
        function(value) {
          
          console.log("bluetooth detection supported, result: ",value);
  
          var BluetoothInfoEvent = new CustomEvent("__BluetoothInfoEvent", {
            detail: {
              radio_present: value
            },
            bubbles: true,
            cancelable: true
          })
          dispatchEvent(BluetoothInfoEvent);   
                
        }, 
        function(error) {

          console.log("bluetooth detection failed, reason: ",error);

          var BluetoothInfoEvent = new CustomEvent("__BluetoothInfoEvent", {
            detail: {
              error: error
            },
            bubbles: true,
            cancelable: true
          })
          dispatchEvent(BluetoothInfoEvent); 
        }
      );
    } else {
      console.log("bluetooth detection is not supported");
    }
  } catch(e) {
    console.log("bluetooth detection error",e);
  }


  
  var init = function(event) {

    if (
      typeof navigator.bluetooth !== "undefined"
      && 
      typeof navigator.bluetooth.getAvailability !== "undefined"
    ) {
      // bluetooth detection supported
      if (
        typeof event != "undefined" 
        && 
        typeof event.detail != "undefined" 
        && 
        event.type == "__BluetoothInfoEvent"
      ) {
        // bt detection event
        return event.detail;
      }
    } else {
      return {
        error: "bluetooth detection not supported"
      }
    }



  }


  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded","__BluetoothInfoEvent", "availabilitychanged"]
  };
})();


},{}],11:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  try{
    if (typeof window.navigator.connection !== "undefined" && typeof window.navigator.connection.addEventListener == "function") {
      navigator.connection.addEventListener('change', function(event) { detectConnection(event); });
    }
  } catch(e) { console.log("Unable to add an event listener to connection object")}


  /* private vars and methods... */
  function detectConnection(event) {

    "use strict";

    var connection = {
                        "status" : (window.navigator.onLine)?"Connected":"Disconnected"
                      };
    var connectionInfoEvent;

    if ('connection' in navigator) {

      if ('type' in navigator.connection) {
        if (navigator.connection.type.toLowerCase() !== "unknown" ) {
          connection.connectionType = navigator.connection.type;

          if ('effectiveType' in navigator.connection) {
             connection.connectionActuallyFeels = navigator.connection.effectiveType;
          }

          if ('downlinkMax' in navigator.connection) {
            if (navigator.connection.downlinkMax.toString().toLowerCase() !== "infinity" ) {
              connection.connectionMaxSpeed = "Up to "+navigator.connection.downlinkMax.toString() + " Mbits/s";
            }
          }
        }
      }

      if ('rtt' in navigator.connection) {
        connection.roundTripTime = navigator.connection.rtt + " ms";
      }

      if ('downlink' in navigator.connection) {
        if (navigator.connection.downlink.toString().toLowerCase() !== "infinity" ) {
          connection.speed = navigator.connection.downlink.toString() + " Mbits/s";
        }
      }

      connectionInfoEvent = new CustomEvent("__ConnectionInfoEvent", {
        detail: connection,
        bubbles: true,
        cancelable: true
      });
      dispatchEvent(connectionInfoEvent);

    };



    return connection;

  }

  var init = function(event) {

    if (typeof event !== "undefined") {
      if (typeof event.detail !== "undefined" && event.type == "__ConnectionInfoEvent") {
        return event.detail;
      }
    }

    return detectConnection();

  };


  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded","__ConnectionInfoEvent","online","offline"]
  };
})();

},{}],12:[function(require,module,exports){

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


},{}],13:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  /* private vars and methods... */

  var init = function(event) {

    if (window.DeviceOrientationEvent && event) {

      try {

        if (event.gamma || event.beta || event.alpha) {
          if (event.gamma !== null && event.beta !== null && event.alpha !== null ) {
            return {
              alpha : event.alpha.toFixed(2),
              beta : event.beta.toFixed(2),
              gamma : event.gamma.toFixed(2)
            };
          }
        }

      } catch(e) {
        console.log("ERROR: Unrecognized event format",e,event);
      }

    }



  }

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["deviceorientation"]
  };

})();

},{}],14:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  if (!!navigator.platform && !(/iPad|iPhone|iPod/.test(navigator.platform))) {
    return false;
  }  

  var getRenderer = require("../lib/51degrees/renderer.min.js");

  getRenderer(function(renderer) { 
    
    console.log("WebGL detection getRenderer() completed",renderer);

    var WebGLRendererInfoEvent = new CustomEvent("__WebGLRendererInfoEvent", {
      detail: renderer,
      bubbles: true,
      cancelable: true
    });
    
    setTimeout(function() { 
      console.log("delayed getRenderer event dispatched",renderer);
      dispatchEvent(WebGLRendererInfoEvent); 
    },500);
    
  });


  /* private vars and methods... */


  var webgl = false;

  var checkWebGL = function(fragment) {
    if (!webgl) { 
      return false; 
    } else {
      return (webgl.indexOf(fragment) >= 0)
    }
  }
  

  var init = function(event) {

    if (typeof event == "undefined" || typeof event.detail == "undefined" || event.type !== "__WebGLRendererInfoEvent") {
      return false; 
    } else {
      webgl = event.detail.toLowerCase();    
    }
    

    var devices = [
      {
        name: "Apple iPhone 5 series",
        type: "Smartphone",  
        release_date: "September 2013",      
        tests: [
          (window.screen.width == 320),
          (window.screen.height == 568),
          (window.devicePixelRatio == 2),
          checkWebGL("a7 gpu")
        ]
      },
  
  
      {
        name: "Apple iPhone 6",
        type: "Smartphone",  
        zoom: true,      
        release_date: "September 2014",
        tests: [
          (window.screen.width == 320),
          (window.screen.height == 568),
          (window.devicePixelRatio == 2),
          checkWebGL("a8 gpu")
        ]
      },
      {
        name: "Apple iPhone 6",
        type: "Smartphone",  
        release_date: "September 2014",        
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 667),
          (window.devicePixelRatio == 2),
          checkWebGL("a8 gpu")
        ]
      },
      {
        name: "Apple iPhone 6 Plus",
        type: "Smartphone",  
        zoom: true,
        release_date: "September 2014",        
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 667),
          (window.devicePixelRatio == 3),
          checkWebGL("a8 gpu")
        ]
      },
      {
        name: "Apple iPhone 6 Plus",
        type: "Smartphone",  
        release_date: "September 2014",        
        tests: [
          (window.screen.width == 414),
          (window.screen.height == 736),
          (window.devicePixelRatio == 3),
          checkWebGL("a8 gpu")
        ]
      },
      
      
      {
        name: "Apple iPhone 6S",
        type: "Smartphone",  
        zoom: true,      
        release_date: "September 2015",        
        tests: [
          (window.screen.width == 320),
          (window.screen.height == 568),
          (window.devicePixelRatio == 2),
          checkWebGL("a9 gpu")
        ]
      },
      {
        name: "Apple iPhone 6S",
        type: "Smartphone",  
        release_date: "September 2015",        
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 667),
          (window.devicePixelRatio == 2),
          checkWebGL("a9 gpu")
        ]
      },
      {
        name: "Apple iPhone 6S Plus",
        type: "Smartphone",  
        zoom: true,
        release_date: "September 2015",        
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 667),
          (window.devicePixelRatio == 3),
          checkWebGL("a9 gpu")
        ]
      },
      {
        name: "Apple iPhone 6S Plus",
        release_date: "September 2015",        
        type: "Smartphone",  
        tests: [
          (window.screen.width == 414),
          (window.screen.height == 736),
          (window.devicePixelRatio == 3),
          checkWebGL("a9 gpu")
        ]
      },
  
      
      {
        name: "Apple iPhone 7",
        type: "Smartphone",  
        zoom: true,      
        release_date: "September 2016",        
        tests: [
          (window.screen.width == 320),
          (window.screen.height == 568),
          (window.devicePixelRatio == 2),
          checkWebGL("a10 gpu")
        ]
      },
      {
        name: "Apple iPhone 7",
        type: "Smartphone",  
        release_date: "September 2016",        
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 667),
          (window.devicePixelRatio == 2),
          checkWebGL("a10 gpu")
        ]
      },
      {
        name: "Apple iPhone 7 Plus",
        type: "Smartphone",  
        zoom: true,
        release_date: "September 2016",        
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 667),
          (window.devicePixelRatio == 3),
          checkWebGL("a10 gpu")
        ]
      },
      {
        name: "Apple iPhone 7 Plus",
        type: "Smartphone",  
        release_date: "September 2016",        
        tests: [
          (window.screen.width == 414),
          (window.screen.height == 736),
          (window.devicePixelRatio == 3),
          checkWebGL("a10 gpu")
        ]
      },


      {
        name: "Apple iPhone 8",
        type: "Smartphone",     
        zoom: true,      
        release_date: "September 2017",             
        tests: [
          (window.screen.width == 320),
          (window.screen.height == 568),
          (window.devicePixelRatio == 2),
          checkWebGL("a11 gpu")
        ]
      },
      {
        name: "Apple iPhone 8",
        type: "Smartphone",  
        release_date: "September 2017",                
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 667),
          (window.devicePixelRatio == 2),
          checkWebGL("a11 gpu")
        ]
      },
      {
        name: "Apple iPhone 8 Plus",
        type: "Smartphone",  
        zoom: true,
        release_date: "September 2017",             
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 667),
          (window.devicePixelRatio == 3),
          checkWebGL("a11 gpu")
        ]
      },
      {
        name: "Apple iPhone 8 Plus",
        type: "Smartphone", 
        release_date: "September 2017",              
        tests: [
          (window.screen.width == 414),
          (window.screen.height == 736),
          (window.devicePixelRatio == 3),
          checkWebGL("a11 gpu")
        ]
      },  
      
      {
        name: "Apple iPhone X",
        type: "Smartphone",  
        release_date: "November 2017",             
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 812),
          (window.devicePixelRatio == 3),
          checkWebGL("a11 gpu")
        ]
      },
  
      {
        name: "Apple iPhone XS",
        type: "Smartphone",  
        release_date: "September 2018",            
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 812),
          (window.devicePixelRatio == 3),
          checkWebGL("a12 gpu")
        ]
      },

      {
        name: "Apple iPhone XS Max",
        type: "Smartphone",  
        release_date: "September 2018",            
        tests: [
          (window.screen.width == 414),
          (window.screen.height == 896),
          (window.devicePixelRatio == 3),
          checkWebGL("a12 gpu")
        ]
      }, 
      {
        name: "Apple iPhone XR",
        type: "Smartphone",  
        release_date: "September 2018",                    
        tests: [
          (window.screen.width == 414),
          (window.screen.height == 896),
          (window.devicePixelRatio == 2),
          checkWebGL("a12 gpu")
        ]
      },    
      

      {
        name: "Apple iPhone 11",
        type: "Smartphone",  
        release_date: "September 2018",                    
        tests: [
          (window.screen.width == 414),
          (window.screen.height == 896),
          (window.devicePixelRatio == 2),
          checkWebGL("a13 gpu")
        ]
      },
      {
        name: "Apple iPhone 11 Pro",
        type: "Smartphone",  
        release_date: "September 2019",            
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 812),
          (window.devicePixelRatio == 3),
          checkWebGL("a13 gpu")
        ]
      },
      {
        name: "Apple iPhone 11 Pro Max",
        type: "Smartphone",  
        release_date: "September 2019",            
        tests: [
          (window.screen.width == 414),
          (window.screen.height == 896),
          (window.devicePixelRatio == 3),
          checkWebGL("a13 gpu")
        ]
      },
      

      {
        name: "Apple iPhone SE (2020)",
        type: "Smartphone",       
        release_date: "April 2020",             
        tests: [
          (window.screen.width == 375),
          (window.screen.height == 667),
          (window.devicePixelRatio == 2),
          checkWebGL("a13 gpu")
        ]
      },      
      

      {
        name: "Apple iPhone 12 mini",
        type: "Smartphone",  
        release_date: "November 2020",                    
        tests: [
          (window.screen.width == 360),
          (window.screen.height == 780),
          (window.devicePixelRatio == 3),
          checkWebGL("a14 gpu")
        ]
      },    
      {
        name: "Apple iPhone 12 / 12 Pro",
        type: "Smartphone",  
        release_date: "October 2020",                    
        tests: [
          (window.screen.width == 390),
          (window.screen.height == 844),
          (window.devicePixelRatio == 3),
          checkWebGL("a14 gpu")
        ]
      },    
      {
        name: "Apple iPhone 12 Pro Max",
        type: "Smartphone",  
        release_date: "November 2020",            
        tests: [
          (window.screen.width == 428),
          (window.screen.height == 926),
          (window.devicePixelRatio == 3),
          checkWebGL("a14 gpu")
        ]
      },   
      
  
    ];
    
    var ok;
    for (var i = 0; i < devices.length; i++) {
      ok = 0;
      for (var j = 0; j < devices[i].tests.length; j++) {
        if (!devices[i].tests[j]) { continue; }
        ok++;
      }
      
      debugger;

      if (ok == devices[i].tests.length) {
        return {
          complete_device_name : devices[i].name,
          release_date: devices[i].release_date,
          form_factory: devices[i].type,
          zoom: !!devices[i].zoom,
          gpu_renderer: event.detail
        }
      } else {
        return {
          fail: ":( An unrecognized device width a "+window.screen.width+"x"+window.screen.height+" screen @"+window.devicePixelRatio+"X",
          gpu_renderer: event.detail
        }
      }
    }
    return false;
  }

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["__WebGLRendererInfoEvent"]
  };
})();


},{"../lib/51degrees/renderer.min.js":2}],15:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  /* private vars and methods... */

  var init = function(event) {
    if (typeof event !== "undefined") {
      if (typeof event.detail !== "undefined" && event.type == "__IPLookupInfoEvent") {
        return event.detail;
      }
    }
  }

  var httpGetAsync = require("../lib/xhttpGetAsync/xhttpGetAsync");

  httpGetAsync(
    "https://thisdeviceinfo.herokuapp.com/iplookup",
    function(responseText) {

      var IPLookupInfoEvent,
          detail = responseText;


      if (window.JSON && window.JSON.parse) {
        detail = JSON.parse(responseText);
      }

      IPLookupInfoEvent = new CustomEvent("__IPLookupInfoEvent", {
        detail: detail,
        bubbles: true,
        cancelable: true
      });
      dispatchEvent(IPLookupInfoEvent);

      return detail;

    },
    "GET",
    null,
    10000
  );

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded","__IPLookupInfoEvent", "__ConnectionInfoEvent"]
  };
})();

},{"../lib/xhttpGetAsync/xhttpGetAsync":6}],16:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  /* private vars and methods... */


  function detectMediaInputs(devices) {

    var mediaCaptureInfoEvent,
        kind,
        detail = {};

    devices.forEach(function(device) {

      switch (device.kind.toLowerCase()) {

        case "audioinput":
          kind = "Microphones";
          break;

        case "videoinput":
          kind = "Cameras";
          break;

        case "audiooutput":
          kind = "Speakers";
          break;

        default:
          kind = device.kind;

      }

      if (!detail[kind]) { detail[kind] = 0; }
      detail[kind]++;
    });

    mediaCaptureInfoEvent = new CustomEvent("__MediaCaptureInfoEvent", {
      detail: detail,
      bubbles: true,
      cancelable: true
    });
    dispatchEvent(mediaCaptureInfoEvent);

    return detail;

  }


  var init = function(event) {

    if (typeof event !== "undefined") {
      if (typeof event.detail !== "undefined" && event.type == "__MediaCaptureInfoEvent") {
        return event.detail;
      }
    }

  };

  if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
    navigator.mediaDevices.enumerateDevices().then(detectMediaInputs);
  }

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["__MediaCaptureInfoEvent"]
  };
})();

},{}],17:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  /* private vars and methods... */

  var init = function(event) {

    if (window.DeviceMotionEvent && event) {

      try {
        var accelerometer, acceleration, includingGravity;

        if (!!event.acceleration) {
          acceleration = event.acceleration;
          includingGravity = false;
        } else {
          acceleration = event.accelerationIncludingGravity;
          includingGravity = true;
        }

        if(acceleration.x || acceleration.y || acceleration.z) {
          if (acceleration.x !== null && acceleration.y !== null && acceleration.z !== null ) {
            return {
              x: acceleration.x.toFixed(2),
              y: acceleration.y.toFixed(2),
              z: acceleration.z.toFixed(2),
              includingGravity: includingGravity
            };
          }
        }

      } catch(e) {
        console.log("ERROR: Unrecognized event format",e,event);
      }

    }



  }

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["devicemotion"]
  };

})();

},{}],18:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  /* private vars and methods... */

  var flashSupported = function() {

    var UNDEF = "undefined",
        SHOCKWAVE_FLASH = "Shockwave Flash",
        SHOCKWAVE_FLASH_AX = "ShockwaveFlash.ShockwaveFlash",
        FLASH_MIME_TYPE = "application/x-shockwave-flash",
        win = window,
        doc = document,
        nav = navigator,
        playerVersion = false,
        d = null;

    function toInt(str) {
        return parseInt(str, 10);
    }

    if (typeof nav.plugins !== UNDEF && typeof nav.plugins[SHOCKWAVE_FLASH] === "object") {
        d = nav.plugins[SHOCKWAVE_FLASH].description;
        // nav.mimeTypes["application/x-shockwave-flash"].enabledPlugin indicates whether plug-ins are enabled or disabled in Safari 3+
        if (d && (typeof nav.mimeTypes !== UNDEF && nav.mimeTypes[FLASH_MIME_TYPE] && nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)) {
          d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
          playerVersion = [0, 0, 0];
          playerVersion[0] = toInt(d.replace(/^(.*)\..*$/, "$1"));
          playerVersion[1] = toInt(d.replace(/^.*\.(.*)\s.*$/, "$1"));
          playerVersion[2] = /[a-zA-Z]/.test(d) ? toInt(d.replace(/^.*[a-zA-Z]+(.*)$/, "$1")) : 0;
          playerVersion = playerVersion.join(".");
        }
    } else if (typeof win.ActiveXObject !== UNDEF) {
      try {
        var a = new ActiveXObject(SHOCKWAVE_FLASH_AX);
        if (a) { // a will return null when ActiveX is disabled
          d = a.GetVariable("$version");
          if (d) {
            d = d.split(" ")[1].split(",");
            playerVersion = [toInt(d[0]), toInt(d[1]), toInt(d[2])];
            playerVersion = playerVersion.join(".");
          }
        }
      }
      catch (e) {};
    };

    return playerVersion;

  }

  var init = function() {

    return {
      userAgent           : window.navigator.userAgent,
      vendor              : window.navigator.vendor,
      platform            : window.navigator.platform,
      language            : window.navigator.language,
      appMode             : !!window.navigator.standalone,
      framedMode          : (self!=top),
      hardwareConcurrency : window.navigator.hardwareConcurrency,
      deviceMemory        : (navigator.deviceMemory?navigator.deviceMemory+"Gb": undefined),
      cookieEnabled       : window.navigator.cookieEnabled,
      javaEnabled         : (typeof window.navigator.javaEnabled == "function")?window.navigator.javaEnabled():false,
      flashSupported      : flashSupported()
    }
  }

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded"]
  };
})();

},{}],19:[function(require,module,exports){
module.exports = (function(){

      "use strict";

      /* private vars and methods... */


      var init = function() {
        return {
          phonegapVersion:  window.phonegap,
          deviceName:       window.device,
          UUID:             window.uuid
        }
      }

      /* public methods... */
      return {
        init : init,
        defaultListeners : ["deviceready"]
      };
  })()

},{}],20:[function(require,module,exports){
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
},{}],21:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  /* private vars and methods... */

  var init = function(event) {
    if (typeof event !== "undefined") {
      if (typeof event.detail !== "undefined" && event.type == "__UALookupInfoEvent") {
        return event.detail;
      }
    }
  }

  var httpGetAsync = require("../lib/xhttpGetAsync/xhttpGetAsync");

  httpGetAsync(
    "https://thisdeviceinfo.herokuapp.com/ualookup",
    function(responseText) {

      var UALookupInfoEvent,
          detail = responseText;


      if (window.JSON && window.JSON.parse) {
        detail = JSON.parse(responseText);
      }

      UALookupInfoEvent = new CustomEvent("__UALookupInfoEvent", {
        detail: detail,
        bubbles: true,
        cancelable: true
      });
      dispatchEvent(UALookupInfoEvent);

      return detail;

    },
    "GET",
    null,
    10000
  );

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded","__UALookupInfoEvent"]
  };
})();

},{"../lib/xhttpGetAsync/xhttpGetAsync":6}],22:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  /* private vars and methods... */
  var otherFunction = function () {
  }


  var init = function(event) {

    var uimode = {};

    if (typeof window.matchMedia == "function") {
        
        if (window.matchMedia("screen and (prefers-color-scheme: dark)").matches) {
            uimode.theme = "dark ";
        }

        if (window.matchMedia("screen and (prefers-color-scheme: light)").matches) {
            uimode.theme = "light";
        }  

        return uimode;

    }

  }

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded"]
  };
})();


},{}],23:[function(require,module,exports){
module.exports = (function() {

  "use strict";

  var init = function(event) {

    var parsedUa = require("ua-parser-js")(),
        parsedUaInfo = {};

    try{
      parsedUaInfo.os = parsedUa.os.name +" "+parsedUa.os.version;
    } catch(e){}

    try{
      parsedUaInfo.osName = parsedUa.os.name;
    } catch(e){}

    try{
      parsedUaInfo.osVersion = parsedUa.os.version;
    } catch(e){}

    try{
      parsedUaInfo.browser = parsedUa.browser.name;
    } catch(e){}

    try{
      parsedUaInfo.browserVersion = parsedUa.browser.version;
    } catch(e){}    

    try{
      parsedUaInfo.cpu = parsedUa.cpu.architecture;
    } catch(e){}

    try{
        parsedUaInfo.browser_full  = (parsedUa.browser.name || "");
        parsedUaInfo.browser_full += " "  + (parsedUa.browser.version || "");
        parsedUaInfo.browser_full += " (" + (parsedUa.engine.name || "");
        parsedUaInfo.browser_full += " "  + (parsedUa.engine.version || "") + ")";
    } catch(e) {}

    try{
      if (!!parsedUa.device.model || !!parsedUa.device.vendor || !!parsedUa.device.type) {
        parsedUaInfo.device = (parsedUa.device.vendor || "") +" "+(parsedUa.device.model || ""); + " ("+ (parsedUa.device.type || "") +")";
      }
    } catch(e){}

    try{
      if (!!parsedUa.device.type ) {
        parsedUaInfo.deviceType = parsedUa.device.type || "";
      }
    } catch(e){}

    try{
      if (!!parsedUa.device.vendor ) {
        parsedUaInfo.deviceVendor = parsedUa.device.vendor || "";
      }
    } catch(e){}

    try{
      if (!!parsedUa.device.model ) {
        parsedUaInfo.deviceModel = parsedUa.device.model || "";
      }
    } catch(e){}

    return parsedUaInfo;
  }

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded"]
  };
})();

},{"ua-parser-js":26}],24:[function(require,module,exports){
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

    var webGLInfoEvent = new CustomEvent("__WebGLInfoEvent", {
      detail: webGLInfo,
      bubbles: true,
      cancelable: true
    });
    dispatchEvent(webGLInfoEvent);

    return webGLInfo;
  }

  /* public methods... */
  return {
    init : init,
    defaultListeners : ["DOMContentLoaded"]
  };
  
})()

},{}],25:[function(require,module,exports){
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).DetectGPU={})}(this,(function(e){"use strict";function r(e,r,n,t){return new(n||(n=Promise))((function(o,a){function i(e){try{l(t.next(e))}catch(e){a(e)}}function d(e){try{l(t.throw(e))}catch(e){a(e)}}function l(e){var r;e.done?o(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,d)}l((t=t.apply(e,r||[])).next())}))}function n(e,r){var n,t,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:d(0),throw:d(1),return:d(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function d(a){return function(d){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,t&&(o=2&a[0]?t.return:a[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,a[1])).done)return o;switch(t=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,t=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=r.call(e,i)}catch(e){a=[6,e],t=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,d])}}}var t=["geforce 320m","geforce 8600","geforce 8600m gt","geforce 8800 gs","geforce 8800 gt","geforce 9400","geforce 9400m g","geforce 9400m","geforce 9600m gt","geforce 9600m","geforce fx go5200","geforce gt 120","geforce gt 130","geforce gt 330m","geforce gtx 285","google swiftshader","intel g41","intel g45","intel gma 4500mhd","intel gma x3100","intel hd 3000","intel q45","legacy","mali-2","mali-3","mali-4","quadro fx 1500","quadro fx 4","quadro fx 5","radeon hd 2400","radeon hd 2600","radeon hd 4670","radeon hd 4850","radeon hd 4870","radeon hd 5670","radeon hd 5750","radeon hd 6290","radeon hd 6300","radeon hd 6310","radeon hd 6320","radeon hd 6490m","radeon hd 6630m","radeon hd 6750m","radeon hd 6770m","radeon hd 6970m","radeon r9 200","sgx 543","sgx543"],o=function(e){return e=e.toLowerCase().replace(/angle \((.+)\)*$/,"$1").replace(/\s+([0-9]+gb|direct3d.+$)|\(r\)| \([^\)]+\)$/g,"")};var a="undefined"==typeof window,i=function(){if(!a){var e=window.navigator,r=e.userAgent,n=e.platform,t=e.maxTouchPoints,o=/(iphone|ipod|ipad)/i.test(r),i="iPad"===n||"MacIntel"===n&&t>0&&!window.MSStream;return{isIpad:i,isMobile:/android/i.test(r)||o||i,isSafari12:/Version\/12.+Safari/.test(r)}}}(),d=function(e,r,n){return"apple gpu"===r?function(e,r,n){var t=[r];if(n){var o=e.createShader(35633),a=e.createShader(35632),d=e.createProgram();if(a&&o&&d){e.shaderSource(o,"\n      precision highp float;\n      attribute vec3 aPosition;\n      varying float vvv;\n      void main() {\n        vvv = 0.31622776601683794;\n        gl_Position = vec4(aPosition, 1.0);\n      }\n    "),e.shaderSource(a,"\n      precision highp float;\n      varying float vvv;\n      void main() {\n        vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * vvv;\n        enc = fract(enc);\n        enc -= enc.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);\n        gl_FragColor = enc;\n      }\n    "),e.compileShader(o),e.compileShader(a),e.attachShader(d,o),e.attachShader(d,a),e.linkProgram(d),e.detachShader(d,o),e.detachShader(d,a),e.deleteShader(o),e.deleteShader(a),e.useProgram(d);var l=e.createBuffer();e.bindBuffer(34962,l),e.bufferData(34962,new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),35044);var c=e.getAttribLocation(d,"aPosition");e.vertexAttribPointer(c,3,5126,!1,0,0),e.enableVertexAttribArray(c),e.clearColor(1,1,1,1),e.clear(16384),e.viewport(0,0,1,1),e.drawArrays(4,0,3);var u=new Uint8Array(4);e.readPixels(0,0,1,1,6408,5121,u),e.deleteProgram(d),e.deleteBuffer(l),t={801621810:(null==i?void 0:i.isIpad)?["apple a12x gpu"]:["apple a11 gpu","apple a12 gpu","apple a13 gpu"],8016218135:(null==i?void 0:i.isIpad)?["apple a9x gpu","apple a10 gpu","apple a10x gpu"]:["apple a9 gpu","apple a10 gpu"]}[u.join("")]||t}}return t}(e,r,n):[r]},l=[],c=[],u=function(e,r){if(e===r)return 0;var n=e;e.length>r.length&&(e=r,r=n);for(var t=e.length,o=r.length;t>0&&e.charCodeAt(~-t)===r.charCodeAt(~-o);)t--,o--;for(var a,i=0;i<t&&e.charCodeAt(i)===r.charCodeAt(i);)i++;if(o-=i,0===(t-=i))return o;for(var d,u,f=0,s=0,h=0;s<t;)c[s]=e.charCodeAt(i+s),l[s]=++s;for(;h<o;)for(a=r.charCodeAt(i+h),d=h++,f=h,s=0;s<t;s++)u=a===c[s]?d:d+1,d=l[s],f=l[s]=d>f?u>f?f+1:u:u>d?d+1:u;return f};e.getGPUTier=function(e){var l=void 0===e?{}:e,c=l.mobileTiers,f=void 0===c?[0,15,30,60]:c,s=l.desktopTiers,h=void 0===s?[0,15,30,60]:s,p=l.override,v=void 0===p?{}:p,g=l.glContext,m=l.failIfMajorPerformanceCaveat,b=void 0!==m&&m,w=l.benchmarksURL,x=void 0===w?"https://unpkg.com/detect-gpu@3.0.0/dist/benchmarks":w;return r(void 0,void 0,void 0,(function(){var e,l,c,s,p,m,w,y,A,S,P,C,E,L,M,_,B,k,I,T,U,j,O,R,D;return n(this,(function(N){switch(N.label){case 0:if(e={},a)return[2,{tier:0,type:"SSR"}];if(l=v.isIpad,c=void 0===l?!!(null==i?void 0:i.isIpad):l,s=v.isMobile,p=void 0===s?!!(null==i?void 0:i.isMobile):s,m=v.screenSize,w=void 0===m?window.screen:m,y=v.loadBenchmarks,A=void 0===y?function(e){return r(void 0,void 0,void 0,(function(){var r;return n(this,(function(n){switch(n.label){case 0:return[4,fetch(x+"/"+e).then((function(e){return e.json()}))];case 1:return(r=n.sent()).shift(),[2,r]}}))}))}:y,S=v.renderer,P=function(e){for(var r=0,n=p?["adreno","apple","mali-t","mali","nvidia","powervr"]:["intel","amd","radeon","nvidia","geforce"];r<n.length;r++){var t=n[r];if(e.indexOf(t)>-1)return t}},C=function(t){return r(void 0,void 0,void 0,(function(){var r,o,a,i,d,l,f,s,h,v,g,m,b,x,y,S,C,E,L,M,_,B,k,I,T,U;return n(this,(function(n){switch(n.label){case 0:if(!(r=P(t)))return[2];a=e[o=(p?"m":"d")+"-"+r+".json"]=e[o]||A(o),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,a];case 2:return i=n.sent(),[3,4];case 3:return d=n.sent(),console.log(d),[2];case 4:if(l=function(e){var r,n=(e=e.replace(/\([^\)]+\)/,"")).match(/[\d]+/)||e.match(/(\W|^)([a-zA-Z]{1,3})(\W|$)/g);return null!==(r=null==n?void 0:n.join("").replace(/\W|amd/g,""))&&void 0!==r?r:""}(t),f="apple"===r,(s=i.filter((function(e){return e[1]===l}))).length||(s=i.filter((function(e){return e[0].indexOf(t)>-1}))),0===(h=s.length))return[2];for(v=h>1?s.map((function(e){return[e,u(t,e[0])]})).sort((function(e,r){return e[1]-r[1]}))[0][0]:s[0],g=v[0],m=v[3],b=Number.MAX_VALUE,y=window.devicePixelRatio,S=w.width*y*(w.height*y),f&&p&&(m=m.filter((function(e){var r,n=e[3];return(null!==(r=null==n?void 0:n.indexOf(c?"ipad":"iphone"))&&void 0!==r?r:-1)>-1}))),C=0,E=m;C<E.length;C++)L=E[C],M=L[0],_=L[1],B=M*_,(k=Math.abs(S-B))<b&&(b=k,x=L);return T=(I=x)[2],U=I[3],[2,[b,T,g,U]]}}))}))},E=function(e,r,n,t,o){return{device:o,fps:t,gpu:n,isMobile:p,tier:e,type:r}},S)S=o(S),L=[S];else{if(!(M=g||function(e,r){void 0===r&&(r=!1);var n={alpha:!1,antialias:!1,depth:!1,failIfMajorPerformanceCaveat:r,powerPreference:"high-performance",stencil:!1};e&&delete n.powerPreference;var t=window.document.createElement("canvas"),o=t.getContext("webgl",n)||t.getContext("experimental-webgl",n);return null!=o?o:void 0}(null==i?void 0:i.isSafari12,b)))return[2,E(0,"WEBGL_UNSUPPORTED")];if((_=M.getExtension("WEBGL_debug_renderer_info"))&&(S=M.getParameter(_.UNMASKED_RENDERER_WEBGL)),!S)return[2,E(1,"FALLBACK")];S=o(S),L=d(M,S,p)}return[4,Promise.all(L.map(C))];case 1:if(!(B=N.sent().filter((function(e){return!!e}))).length)return[2,(k=t.filter((function(e){return S.indexOf(e)>-1}))[0])?E(0,"BLOCKLISTED",k):E(1,"FALLBACK")];if(I=B.sort((function(e,r){var n=e[0],t=void 0===n?Number.MAX_VALUE:n,o=r[0];return t-(void 0===o?Number.MAX_VALUE:o)}))[0],T=I[1],U=I[2],j=I[3],-1===T)return[2,E(0,"BLOCKLISTED",U,T,j)];for(O=p?f:h,R=0,D=0;D<O.length;D++)T>=O[D]&&(R=D);return[2,E(R,"BENCHMARK",U,T,j)]}}))}))},Object.defineProperty(e,"__esModule",{value:!0})}));


},{}],26:[function(require,module,exports){
/*!
 * UAParser.js v0.7.23
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '0.7.23',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major', // deprecated
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded';


    ///////////
    // Helper
    //////////


    var util = {
        extend : function (regexes, extensions) {
            var mergedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    mergedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    mergedRegexes[i] = regexes[i];
                }
            }
            return mergedRegexes;
        },
        has : function (str1, str2) {
          if (typeof str1 === "string") {
            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
          } else {
            return false;
          }
        },
        lowerize : function (str) {
            return str.toLowerCase();
        },
        major : function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g,'').split(".")[0] : undefined;
        },
        trim : function (str) {
          return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        }
    };


    ///////////////
    // Map helper
    //////////////


    var mapper = {

        rgx : function (ua, arrays) {

            var i = 0, j, k, p, q, matches, match;

            // loop through all regexes maps
            while (i < arrays.length && !matches) {

                var regex = arrays[i],       // even sequence (0,2,4,..)
                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
                j = k = 0;

                // try matching uastring with regexes
                while (j < regex.length && !matches) {

                    matches = regex[j++].exec(ua);

                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length == 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        this[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        this[q[0]] = q[1];
                                    }
                                } else if (q.length == 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length == 4) {
                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                this[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
        },

        str : function (str, map) {

            for (var i in map) {
                // check if array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (util.has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (util.has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
        }
    };


    ///////////////
    // String map
    //////////////


    var maps = {

        browser : {
            oldsafari : {
                version : {
                    '1.0'   : '/8',
                    '1.2'   : '/1',
                    '1.3'   : '/3',
                    '2.0'   : '/412',
                    '2.0.2' : '/416',
                    '2.0.3' : '/417',
                    '2.0.4' : '/419',
                    '?'     : '/'
                }
            }
        },

        device : {
            amazon : {
                model : {
                    'Fire Phone' : ['SD', 'KF']
                }
            },
            sprint : {
                model : {
                    'Evo Shift 4G' : '7373KT'
                },
                vendor : {
                    'HTC'       : 'APA',
                    'Sprint'    : 'Sprint'
                }
            }
        },

        os : {
            windows : {
                version : {
                    'ME'        : '4.90',
                    'NT 3.11'   : 'NT3.51',
                    'NT 4.0'    : 'NT4.0',
                    '2000'      : 'NT 5.0',
                    'XP'        : ['NT 5.1', 'NT 5.2'],
                    'Vista'     : 'NT 6.0',
                    '7'         : 'NT 6.1',
                    '8'         : 'NT 6.2',
                    '8.1'       : 'NT 6.3',
                    '10'        : ['NT 6.4', 'NT 10.0'],
                    'RT'        : 'ARM'
                }
            }
        }
    };


    //////////////
    // Regex map
    /////////////


    var regexes = {

        browser : [[

            // Presto based
            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
            /(opera\s[mobiletab]{3,6}).+version\/([\w\.-]+)/i,                  // Opera Mobi/Tablet
            /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
            /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80
            ], [NAME, VERSION], [

            /(opios)[\/\s]+([\w\.]+)/i                                          // Opera mini on iphone >= 8.0
            ], [[NAME, 'Opera Mini'], VERSION], [

            /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
            ], [[NAME, 'Opera'], VERSION], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer
            // Trident based
            /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
                                                                                // Avant/IEMobile/SlimBrowser
            /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,                      // Baidu Browser
            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

            // Webkit/KHTML based
            /(rekonq)\/([\w\.]*)/i,                                             // Rekonq
            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i
                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            ], [NAME, VERSION], [

            /(konqueror)\/([\w\.]+)/i                                           // Konqueror
            ], [[NAME, 'Konqueror'], VERSION], [

            /(trident).+rv[:\s]([\w\.]{1,9}).+like\sgecko/i                     // IE11
            ], [[NAME, 'IE'], VERSION], [

            /(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i                          // Microsoft Edge
            ], [[NAME, 'Edge'], VERSION], [

            /(yabrowser)\/([\w\.]+)/i                                           // Yandex
            ], [[NAME, 'Yandex'], VERSION], [

            /(Avast)\/([\w\.]+)/i                                               // Avast Secure Browser
            ], [[NAME, 'Avast Secure Browser'], VERSION], [

            /(AVG)\/([\w\.]+)/i                                                 // AVG Secure Browser
            ], [[NAME, 'AVG Secure Browser'], VERSION], [

            /(puffin)\/([\w\.]+)/i                                              // Puffin
            ], [[NAME, 'Puffin'], VERSION], [

            /(focus)\/([\w\.]+)/i                                               // Firefox Focus
            ], [[NAME, 'Firefox Focus'], VERSION], [

            /(opt)\/([\w\.]+)/i                                                 // Opera Touch
            ], [[NAME, 'Opera Touch'], VERSION], [

            /((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i         // UCBrowser
            ], [[NAME, 'UCBrowser'], VERSION], [

            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [

            /(windowswechat qbcore)\/([\w\.]+)/i                                // WeChat Desktop for Windows Built-in Browser
            ], [[NAME, 'WeChat(Win) Desktop'], VERSION], [

            /(micromessenger)\/([\w\.]+)/i                                      // WeChat
            ], [[NAME, 'WeChat'], VERSION], [

            /(brave)\/([\w\.]+)/i                                               // Brave browser
            ], [[NAME, 'Brave'], VERSION], [

            /(whale)\/([\w\.]+)/i                                               // Whale browser
            ], [[NAME, 'Whale'], VERSION], [

            /(qqbrowserlite)\/([\w\.]+)/i                                       // QQBrowserLite
            ], [NAME, VERSION], [

            /(QQ)\/([\d\.]+)/i                                                  // QQ, aka ShouQ
            ], [NAME, VERSION], [

            /m?(qqbrowser)[\/\s]?([\w\.]+)/i                                    // QQBrowser
            ], [NAME, VERSION], [

            /(baiduboxapp)[\/\s]?([\w\.]+)/i                                    // Baidu App
            ], [NAME, VERSION], [

            /(2345Explorer)[\/\s]?([\w\.]+)/i                                   // 2345 Browser
            ], [NAME, VERSION], [

            /(MetaSr)[\/\s]?([\w\.]+)/i                                         // SouGouBrowser
            ], [NAME], [

            /(LBBROWSER)/i                                                      // LieBao Browser
            ], [NAME], [

            /xiaomi\/miuibrowser\/([\w\.]+)/i                                   // MIUI Browser
            ], [VERSION, [NAME, 'MIUI Browser']], [

            /;fbav\/([\w\.]+);/i                                                // Facebook App for iOS & Android with version
            ], [VERSION, [NAME, 'Facebook']], [
            
            /FBAN\/FBIOS|FB_IAB\/FB4A/i                                         // Facebook App for iOS & Android without version
            ], [[NAME, 'Facebook']], [

            /safari\s(line)\/([\w\.]+)/i,                                       // Line App for iOS
            /android.+(line)\/([\w\.]+)\/iab/i                                  // Line App for Android
            ], [NAME, VERSION], [

            /headlesschrome(?:\/([\w\.]+)|\s)/i                                 // Chrome Headless
            ], [VERSION, [NAME, 'Chrome Headless']], [

            /\swv\).+(chrome)\/([\w\.]+)/i                                      // Chrome WebView
            ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [

            /((?:oculus|samsung)browser)\/([\w\.]+)/i
            ], [[NAME, /(.+(?:g|us))(.+)/, '$1 $2'], VERSION], [                // Oculus / Samsung Browser

            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i        // Android Browser
            ], [VERSION, [NAME, 'Android Browser']], [

            /(sailfishbrowser)\/([\w\.]+)/i                                     // Sailfish Browser
            ], [[NAME, 'Sailfish Browser'], VERSION], [

            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i
                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /(dolfin)\/([\w\.]+)/i                                              // Dolphin
            ], [[NAME, 'Dolphin'], VERSION], [

            /(qihu|qhbrowser|qihoobrowser|360browser)/i                         // 360
            ], [[NAME, '360 Browser']], [

            /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
            ], [[NAME, 'Chrome'], VERSION], [

            /(coast)\/([\w\.]+)/i                                               // Opera Coast
            ], [[NAME, 'Opera Coast'], VERSION], [

            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, 'Firefox']], [

            /version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i                      // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [

            /version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i                   // Safari & Safari Mobile
            ], [VERSION, NAME], [

            /webkit.+?(gsa)\/([\w\.]+)\s.*(mobile\s?safari|safari)(\/[\w\.]+)/i // Google Search Appliance on iOS
            ], [[NAME, 'GSA'], VERSION], [

            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [

            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,

                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,                       // Other Firefox-based
            /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,                        // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
            /(links)\s\(([\w\.]+)/i,                                            // Links
            /(gobrowser)\/?([\w\.]*)/i,                                         // GoBrowser
            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
            ], [NAME, VERSION]
        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, util.lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32
            ], [[ARCHITECTURE, 'ia32']], [

            // PocketPC mistakenly identified as PowerPC
            /windows\s(ce|mobile);\sppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, util.lowerize]]
        ],

        device : [[

            /\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i                        // iPad/PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [

            /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

            /(apple\s{0,1}tv)/i                                                 // Apple TV
            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple'], [TYPE, SMARTTV]], [

            /(archos)\s(gamepad2?)/i,                                           // Archos
            /(hp).+(touchpad)/i,                                                // HP TouchPad
            /(hp).+(tablet)/i,                                                  // HP Tablet
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
            /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(kf[A-z]+)(\sbuild\/|\)).+silk\//i                                 // Kindle Fire HD
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
            /(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i                    // Fire Phone
            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [
            /android.+aft([bms])\sbuild/i                                       // Fire TV
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, SMARTTV]], [

            /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
            ], [MODEL, VENDOR, [TYPE, MOBILE]], [
            /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [

            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
            /(asus)-?(\w+)/i                                                    // Asus
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
                                                                                // Asus Tablets
            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i
            ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [

            /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
            /(sony)?(?:sgp.+)\sbuild\//i
            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
            /android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]], [

            /\s(ouya)\s/i,                                                      // Ouya
            /(nintendo)\s([wids3u]+)/i                                          // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [

            /android.+;\s(shield)\sbuild/i                                      // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [

            /(playstation\s[34portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [

            /(sprint\s(\w+))/i                                                  // Sprint Phones
            ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [

            /(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,                    // HTC
            /(zte)-(\w*)/i,                                                     // ZTE
            /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i
                                                                                // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            /(nexus\s9)/i                                                       // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

            /d\/huawei([\w\s-]+)[;\)]/i,                                        // Huawei
            /android.+\s(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?)/i

            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [

            /android.+(bah2?-a?[lw]\d{2})/i                                     // Huawei MediaPad
            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, TABLET]], [

            /(microsoft);\s(lumia[\s\w]+)/i                                     // Microsoft Lumia
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

                                                                                // Motorola
            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
            /mot[\s-]?(\w*)/i,
            /(XT\d{3,4}) build\//i,
            /(nexus\s6)/i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
            /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

            /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i            // HbbTV devices
            ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [

            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [

            /\(dtv[\);].+(aquos)/i                                              // Sharp
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [

            /android.+((sch-i[89]0\d|shw-m380s|SM-P605|SM-P610|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
            /((SM-T\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
            /smart-tv.+(samsung)/i
            ], [VENDOR, [TYPE, SMARTTV], MODEL], [
            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
            /sec-((sgh\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [

            /sie-(\w*)/i                                                        // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [

            /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
            /(nokia)[\s_-]?([\w-]*)/i
            ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [

            /android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i                   // Acer
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            /android.+([vl]k\-?\d{3})\s+build/i                                 // LG Tablet
            ], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [
            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
            /linux;\snetcast.+smarttv/i,                                        // LG SmartTV
            /lg\snetcast\.tv-201\d/i
            ], [[VENDOR, 'LG'], MODEL, [TYPE, SMARTTV]], [
            /(nexus\s[45])/i,                                                   // LG
            /lg[e;\s\/-]+(\w*)/i,
            /android.+lg(\-?[\d\w]+)\s+build/i
            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

            /(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i             // Lenovo tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [
            /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [
            /(lenovo)[_\s-]?([\w-]+)/i
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /linux;.+((jolla));/i                                               // Jolla
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [

            /android.+;\s(oppo)\s?([\w\s]+)\sbuild/i                            // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, 'Chromecast'], [VENDOR, 'Google'], [TYPE, SMARTTV]], [

            /android.+;\s(glass)\s\d/i                                          // Google Glass
            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [

            /android.+;\s(pixel c)[\s)]/i                                       // Google Pixel C
            ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [

            /android.+;\s(pixel( [2-9]a?)?( xl)?)[\s)]/i                        // Google Pixel
            ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [

            /android.+;\s(\w+)\s+build\/hm\1/i,                                 // Xiaomi Hongmi 'numeric' models
            /android.+(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,                // Xiaomi Hongmi
            /android.+(redmi[\s\-_]?(?:note|k)?(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i,      
                                                                                // Xiaomi Redmi
            /android.+(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i    
                                                                                // Xiaomi Mi
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [
            /android.+(mi[\s\-_]?(?:pad)(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i     // Mi Pad tablets
            ],[[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, TABLET]], [
            /android.+;\s(m[1-5]\snote)\sbuild/i                                // Meizu
            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [
            /(mz)-([\w-]{2,})/i
            ], [[VENDOR, 'Meizu'], MODEL, [TYPE, MOBILE]], [

            /android.+a000(1)\s+build/i,                                        // OnePlus
            /android.+oneplus\s(a\d{4})[\s)]/i
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            /android.+[;\/]\s*(RCT[\d\w]+)\s+build/i                            // RCA Tablets
            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [

            /android.+[;\/\s](Venue[\d\s]{2,7})\s+build/i                       // Dell Venue Tablets
            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i                         // Verizon Tablet
            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [

            /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i     // Barnes & Noble Tablet
            ], [[VENDOR, 'Barnes & Noble'], MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i                           // Barnes & Noble Tablet
            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [

            /android.+;\s(k88)\sbuild/i                                         // ZTE K Series Tablet
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(gen\d{3})\s+build.*49h/i                         // Swiss GEN Mobile
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [

            /android.+[;\/]\s*(zur\d{3})\s+build/i                              // Swiss ZUR Tablet
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [

            /android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i                         // Zeki Tablets
            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [

            /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
            /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i        // Dragon Touch Tablet
            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i                            // Insignia Tablets
            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [

            /android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i                    // NextBook Tablets
            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i
            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [                    // Voice Xtreme Phones

            /android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i                     // LvTel Phones
            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [

            /android.+;\s(PH-1)\s/i
            ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [                // Essential PH-1

            /android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i          // Envizen Tablets
            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i          // Le Pan Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*(Trio[\s\w\-\.]+)\s+build/i                       // MachSpeed Tablets
            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i                // Trinity Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*TU_(1491)\s+build/i                               // Rotor Tablets
            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [

            //android.+(KS(.+))\s+build/i                                        // Amazon Kindle Tablets
            //], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [

            /android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i                      // Gigaset Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [
                                                                                // Android Phones from Unidentified Vendors
            /android .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i
            ], [MODEL, [TYPE, MOBILE]], [
                                                                                // Android Tablets from Unidentified Vendors
            /android .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i
            ], [MODEL, [TYPE, TABLET]], [

            /\s(tablet|tab)[;\/]/i,                                             // Unidentifiable Tablet
            /\s(mobile)(?:[;\/]|\ssafari)/i                                     // Unidentifiable Mobile
            ], [[TYPE, util.lowerize], VENDOR, MODEL], [

            /[\s\/\(](smart-?tv)[;\)]/i                                         // SmartTV
            ], [[TYPE, SMARTTV]], [

            /(android[\w\.\s\-]{0,9});.+build/i                                 // Generic Android Device
            ], [MODEL, [VENDOR, 'Generic']]
        ],

        engine : [[

            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, 'EdgeHTML']], [

            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
            ], [VERSION, [NAME, 'Blink']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                                                                                // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]{1,9}).+(gecko)/i                                       // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows based
            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,                   // Windows Phone
            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

            // Mobile/Embedded OS
            /\((bb)(10);/i                                                      // BlackBerry 10
            ], [[NAME, 'BlackBerry'], VERSION], [
            /(blackberry)\w*\/?([\w\.]*)/i,                                     // Blackberry
            /(tizen|kaios)[\/\s]([\w\.]+)/i,                                    // Tizen/KaiOS
            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i
                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki/Sailfish OS
            ], [NAME, VERSION], [
            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i                  // Symbian
            ], [[NAME, 'Symbian'], VERSION], [
            /\((series40);/i                                                    // Series 40
            ], [NAME], [
            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
            ], [[NAME, 'Firefox OS'], VERSION], [

            // Google Chromecast
            /crkey\/([\d\.]+)/i                                                 // Google Chromecast
            ], [VERSION, [NAME, 'Chromecast']], [

            // Console
            /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation

            // GNU/Linux based
            /(mint)[\/\s\(]?(\w*)/i,                                            // Mint
            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
            /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
            /(hurd|linux)\s?([\w\.]*)/i,                                        // Hurd/Linux
            /(gnu)\s?([\w\.]*)/i                                                // GNU
            ], [NAME, VERSION], [

            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Solaris
            /(sunos)\s?([\w\.\d]*)/i                                            // Solaris
            ], [[NAME, 'Solaris'], VERSION], [

            // BSD based
            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i                    // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
            ], [NAME, VERSION],[

            /(haiku)\s(\w+)/i                                                   // Haiku
            ], [NAME, VERSION],[

            /cfnetwork\/.+darwin/i,
            /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i             // iOS
            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [

            /(mac\sos\sx)\s?([\w\s\.]*)/i,
            /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Other
            /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,                             // Solaris
            /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,                                // AIX
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS/Fuchsia
            /(unix)\s?([\w\.]*)/i                                               // UNIX
            ], [NAME, VERSION]
        ]
    };


    /////////////////
    // Constructor
    ////////////////
    var UAParser = function (uastring, extensions) {

        if (typeof uastring === 'object') {
            extensions = uastring;
            uastring = undefined;
        }

        if (!(this instanceof UAParser)) {
            return new UAParser(uastring, extensions).getResult();
        }

        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

        this.getBrowser = function () {
            var browser = { name: undefined, version: undefined };
            mapper.rgx.call(browser, ua, rgxmap.browser);
            browser.major = util.major(browser.version); // deprecated
            return browser;
        };
        this.getCPU = function () {
            var cpu = { architecture: undefined };
            mapper.rgx.call(cpu, ua, rgxmap.cpu);
            return cpu;
        };
        this.getDevice = function () {
            var device = { vendor: undefined, model: undefined, type: undefined };
            mapper.rgx.call(device, ua, rgxmap.device);
            return device;
        };
        this.getEngine = function () {
            var engine = { name: undefined, version: undefined };
            mapper.rgx.call(engine, ua, rgxmap.engine);
            return engine;
        };
        this.getOS = function () {
            var os = { name: undefined, version: undefined };
            mapper.rgx.call(os, ua, rgxmap.os);
            return os;
        };
        this.getResult = function () {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return ua;
        };
        this.setUA = function (uastring) {
            ua = uastring;
            return this;
        };
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = {
        NAME    : NAME,
        MAJOR   : MAJOR, // deprecated
        VERSION : VERSION
    };
    UAParser.CPU = {
        ARCHITECTURE : ARCHITECTURE
    };
    UAParser.DEVICE = {
        MODEL   : MODEL,
        VENDOR  : VENDOR,
        TYPE    : TYPE,
        CONSOLE : CONSOLE,
        MOBILE  : MOBILE,
        SMARTTV : SMARTTV,
        TABLET  : TABLET,
        WEARABLE: WEARABLE,
        EMBEDDED: EMBEDDED
    };
    UAParser.ENGINE = {
        NAME    : NAME,
        VERSION : VERSION
    };
    UAParser.OS = {
        NAME    : NAME,
        VERSION : VERSION
    };

    ///////////
    // Export
    //////////


    // check js environment
    if (typeof(exports) !== UNDEF_TYPE) {
        // nodejs env
        if (typeof module !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if (typeof(define) === 'function' && define.amd) {
            define(function () {
                return UAParser;
            });
        } else if (window) {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = window && (window.jQuery || window.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (uastring) {
            parser.setUA(uastring);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : this);

},{}],27:[function(require,module,exports){
module.exports = function() {

  "use strict";

  var path = [],
    maxDepth = 5,
    outputHTML = "",
    outputContainer;

  var _div_ = document.createElement('div'),
      _dl_  = document.createElement('dl'),
      _dt_  = document.createElement('dt'),
      _dd_  = document.createElement('dd'),
      _h1_  = document.createElement('h1'),
      _span_  = document.createElement('span');

  outputContainer = document.getElementById("results");

  if (!!outputContainer) {
    outputContainer.innerHTML = createHTML(window.thisDeviceInfo["results"]).innerHTML;
    console.log("output rendered.");
  } else {
    console.log("ERROR: output container not found");
  };



  function createHTML(results) {

      function capitalize(string) {
        return string[0].toUpperCase() +  string.slice(1);
      }

      function createGroup(id,property,value,className) {

        var DL    = _dl_.cloneNode(false);
        var DT    = _dt_.cloneNode(false);
        var DD    = _dd_.cloneNode(false);
        var SPAN  = _span_.cloneNode(false);
        var content = value.split("\n");


        if (typeof id == "string" && typeof property == "string" && typeof value == "string") {

          DL.setAttribute("id",id);

          if (typeof className != "undefined") {
            DL.setAttribute("class",className);
          }

          if (property == "") { property = " \u00A0"; };
          DT.appendChild(document.createTextNode(property || ''));
          DL.appendChild(DT);

          for(var i=0;i<content.length;i++) {
           DD.appendChild(document.createTextNode(content[i] || ''));
           if (content.length > 1) { 
             DD.appendChild(document.createElement("br"));           
           }
          }

          DL.appendChild(DD);

          return DL;

        } else {

          return SPAN

        }
      }

      var defaultValue = "N/D";
      var container  = _div_.cloneNode(false);


      // Device Name
      var deviceName = defaultValue;
      
      try {

        deviceName = {};

        // Complete device name and release date
        if (results.userAgentInfo) {

          if (results.userAgentInfo && results.userAgentInfo.osName) {
            deviceName.complete_name = "Generic " + results.userAgentInfo.osName + " device";
          }          

          if (results.userAgentInfo.device) {
            deviceName.complete_name = results.userAgentInfo.device;
            deviceName.os_type = results.userAgentInfo.osName + " device";
          }
          
        }
 
        if (results.UALookupInfo && results.UALookupInfo.success && results.UALookupInfo.data) { // if ualookup
 
          if (results.UALookupInfo.data.form_factor) { // if form_factor
 
            if (results.userAgentInfo && results.userAgentInfo.browser && results.userAgentInfo.osName) { // if device os and browser

              deviceName.os_type = results.userAgentInfo.osName + " " + results.UALookupInfo.data.form_factor.toLowerCase();

              if (results.UALookupInfo.data.complete_device_name) {

                if (results.UALookupInfo.data.complete_device_name.indexOf(results.userAgentInfo.browser) == -1) { // device name is not browser name

                  // complete device name from ualookup if reliable
                  deviceName.complete_name = results.UALookupInfo.data.complete_device_name; 
                  
                  deviceName.marketing_name = deviceName.complete_name.substr(deviceName.complete_name.indexOf("("));
                  
                  if (
                    results.userAgentInfo.deviceVendor 
                    && 
                    (deviceName.marketing_name.toLowerCase().indexOf(results.userAgentInfo.deviceVendor.toLowerCase()) < 0)
                  ) {
                    deviceName.complete_name = deviceName.complete_name.replace("(","("+results.userAgentInfo.deviceVendor+" ");
                  }

                } // device name is not browser name

              } // if ualookup device name

            } // if device os and browser

          } // if form factor

          // relase date 
          if (
            deviceName.complete_name.toLowerCase().indexOf("generic") == -1
            && 
            deviceName.complete_name.toLowerCase().indexOf("apple iphone") == -1            
          ) { // if not generic
            
            if (results.UALookupInfo.data.release_date) { // if release date 

              deviceName.date = "Released ";  
  
              var release_date = results.UALookupInfo.data.release_date.split("_");
              var release_year = release_date[0];
              var release_month = release_date[1];
  
              if (release_month) { // if month
                deviceName.date += release_month + " ";   
              }              
  
              if (release_year) { // if year
                deviceName.date += release_year;  
              }
  
            } // if release_date
            
          } // if device name is not generic
          
        } // if ualookup

        if (results.userAgentInfo && results.userAgentInfo.osName.toLowerCase() == "ios") {

          if (results.iOSClientInfo && results.iOSClientInfo.complete_device_name) {
            deviceName.complete_name = results.iOSClientInfo.complete_device_name || false;
            deviceName.date = results.iOSClientInfo.release_date || false;
          }

        } 

        var complete_device_name = "";        

        if (deviceName.complete_name) {
          complete_device_name += deviceName.complete_name;
        }

        if (deviceName.os_type) {
          complete_device_name += "\n"+deviceName.os_type
        }

        if (deviceName.date) {
          complete_device_name += "\n"+deviceName.date
        }        
  
        container.appendChild(createGroup("deviceName","Device name",complete_device_name,"wide"));

      } catch(e) {console.log(e); }    


      // User Agent string
      var userAgent = defaultValue;
      try {
        userAgent = results.navigatorInfo.userAgent;
        container.appendChild(createGroup("userAgent","User Agent:",userAgent,"wide"));
      } catch(e) {console.log(e);}


      // Hardware 
      var deviceHardware = defaultValue;
      try {

        // first column:
        deviceHardware = [];

        if (results.navigatorInfo.platform) {
          deviceHardware.push(results.navigatorInfo.platform + " hardware platform");
        }
        
        if ( parseInt(results.navigatorInfo.hardwareConcurrency) == 1) {
          deviceHardware.push("\nSingle-core CPU");
        } else if(parseInt(results.navigatorInfo.hardwareConcurrency) > 1) {
          deviceHardware.push("\nMulti-core CPU ("+results.navigatorInfo.hardwareConcurrency+" cores)");
        }

        if (results.userAgentInfo && results.userAgentInfo.cpu) {
          deviceHardware.push(results.userAgentInfo.cpu);
        }          

        if (results.navigatorInfo.deviceMemory) {
          deviceHardware.push("\nAt least " + results.navigatorInfo.deviceMemory + " of RAM memory");
        }        

        if (results.webGLInfo && (results.webGLInfo.rendererUnmasked || results.webGLInfo.vendorUnmasked)) {

          if (results.iOSClientInfo && results.iOSClientInfo.gpu_renderer) {
            deviceHardware.push("\nGraphics "+results.iOSClientInfo.gpu_renderer);

          } else if (results.webGLInfo.rendererUnmasked) {
            
            deviceHardware.push("\nGraphics "+results.webGLInfo.rendererUnmasked);
          }
  
          if (results.webGLInfo.vendorUnmasked) {
            deviceHardware.push("by " + results.webGLInfo.vendorUnmasked);
          }

        }

        if (results.batteryInfo) {

          if (results.batteryInfo.batteryStatus) {
            switch (results.batteryInfo.batteryStatus) {
              case "Battery": 
                deviceHardware.push("\nRunning on battery");
              break;
              case "Adapter":
                deviceHardware.push("\nPlugged-in to power outlet");              
              break;
              default:
              break;
            }
          }

          if (results.batteryInfo.batteryLevel) {
            deviceHardware.push("\nBattery level " + results.batteryInfo.batteryLevel); 
          }
          
        }         

        deviceHardware = deviceHardware.join(" ");
        container.appendChild(createGroup("deviceHardware","Hardware",deviceHardware));


        // second column
        
        deviceHardware = [];
        
        if (results.mediaCaptureInfo) {

          if (results.mediaCaptureInfo.Microphones) {
            deviceHardware.push(results.mediaCaptureInfo.Microphones+" microphone"+(results.mediaCaptureInfo.Microphones>1?"s":"")+"\n");
          }
  
          if (results.mediaCaptureInfo.Cameras) {
            deviceHardware.push(results.mediaCaptureInfo.Cameras+" camera"+(results.mediaCaptureInfo.Cameras>1?"s":"")+"\n");
          }    
  
          if (results.mediaCaptureInfo.Speakers) {
            deviceHardware.push(results.mediaCaptureInfo.Speakers+" speaker"+(results.mediaCaptureInfo.Speakers>1?"s":"")+"\n");
          } 

        }

        if (results.bluetoothInfo && results.bluetoothInfo.radio_present) {
          deviceHardware.push("Bluetooth\n");
        }          


        var ambientLight = defaultValue;

        if (results.ambientLightInfo) {
           
          ambientLight = "";

          if (results.ambientLightInfo.illuminance) {
            ambientLight += results.ambientLightInfo.illuminance;
          } 
          
          if (results.ambientLightInfo.luminosity) {
            if (results.ambientLightInfo.illuminance) {
              ambientLight += ", ";  
            }
            ambientLight += results.ambientLightInfo.luminosity;            
          }

          deviceHardware.push("A light sensor (reading " + ambientLight+")");
        } 

        deviceHardware = deviceHardware.join(" ");   

        container.appendChild(createGroup("deviceHardware2","Hardware",deviceHardware,"continuation"));

      } catch(e) { console.log(e); }


      // Operating System
      var deviceOS = [];
      try {
      
        if (results.userAgentInfo && results.userAgentInfo.deviceVendor) {
          deviceOS.push(results.userAgentInfo.deviceVendor );
        } 

        if (results.userAgentInfo && results.userAgentInfo.os) {
          deviceOS.push(results.userAgentInfo.os);
        } 
      } catch(e) { console.log(e);}

      try {

        if (results.navigatorInfo && results.navigatorInfo.language) {
          deviceOS.push("\nLanguage: "+results.navigatorInfo.language);
        }     

      } catch(e) { console.log(e);}
  
      try {

        if (results.iOSClientInfo && results.iOSClientInfo.zoom) {
          deviceOS.push("\nUI zoom mode enabled");
        }     
            
      } catch(e) { console.log(e);}

      try {

        if (results.UIInfo && results.UIInfo.theme) {
          deviceOS.push("\nUI theme: "+results.UIInfo.theme);
        }     
            
      } catch(e) { console.log(e);}      

      deviceOS = deviceOS.join(" ");
      container.appendChild(createGroup("deviceOS","Operating System",deviceOS));

      deviceOS = [];

      try {

        if (results.dateTimeInfo) {

          // if (results.dateTimeInfo.date) {
          //   deviceOS.push("Date: "+results.dateTimeInfo.date);
          // }

          var timezone = "";
          if (results.dateTimeInfo.timezone) {
            timezone += results.dateTimeInfo.timezone;            
          }
          if (results.dateTimeInfo.timezoneOffset) {
            timezone += " ("+results.dateTimeInfo.timezoneOffset+")";
          }
          if (typeof results.dateTimeInfo.daylightSavingTime !== "undefined") {
            timezone += "\nDaylight saving: "+(results.dateTimeInfo.daylightSavingTime?"yes":"no");
          }          

          deviceOS.push("Timezone: "+timezone);

        }     
            
      } catch(e) { console.log(e);} 

      deviceOS = deviceOS.join(" ");   
      container.appendChild(createGroup("deviceOS2","Operating System",deviceOS,"continuation"));


      // Browser 
      var deviceBrowser = defaultValue;
      try {
        deviceBrowser = [];
        
        if (results.userAgentInfo && results.userAgentInfo.browser_full) {
          deviceBrowser.push(results.userAgentInfo.browser_full);          
        }        

        if (results.navigatorInfo) {
          
          if (results.navigatorInfo.cookieEnabled){
            deviceBrowser.push("\n" + "Accepting cookies"); 
          } else {
            deviceBrowser.push("\n" + "Not accepting cookies"); 
          }
          
          if (results.navigatorInfo.javaEnabled) {
            deviceBrowser.push("\n" + "Runs Java"); 
          }

          if (results.navigatorInfo.flashSupported) {
            deviceBrowser.push("\n" + "Runs Adobe Flash"); 
          }

        } 

        deviceBrowser = deviceBrowser.join(" "); 
        
        container.appendChild(createGroup("deviceBrowser","Browser",deviceBrowser,"wide"));
      } catch(e) {}


      // Display
      var displayRes_HW = defaultValue;
      try {
        displayRes_HW = [];
        if (results.screenInfo.screenWidth && results.screenInfo.pixelRatio) {
          displayRes_HW.push(Math.round(results.screenInfo.screenWidth * results.screenInfo.pixelRatio) + " x " + Math.round(results.screenInfo.screenHeight * results.screenInfo.pixelRatio) + " pixels\n");
        }

        if (results.screenInfo.screenRatio) {
          displayRes_HW.push(results.screenInfo.screenRatio.approximated.str +" aspect ratio\n");
        }

        if (results.screenInfo.pixelRatio >= 2) {
          displayRes_HW.push("High resolution (@" + (Math.round(results.screenInfo.pixelRatio * 100) / 100) + "X)\n" );
        }        

        if (results.screenInfo.hasOwnProperty("touch")) {
          if (results.screenInfo.touch) {
            displayRes_HW.push("Touchscreen: yes");
          } else {
            displayRes_HW.push("Touchscreen: no");
          }
        }

        displayRes_HW = displayRes_HW.join(" ");
        container.appendChild(createGroup("displayRes_HW","Display",displayRes_HW));
      } catch(e) {}


      // Viewport
      var displayRes_CSS = defaultValue;
      if (results.screenInfo) {

        try {
          displayRes_CSS = [];
          displayRes_CSS.push("Viewport " + (results.screenInfo.screenWidth) + " x " + (results.screenInfo.screenHeight + " CSS pixels \n"));
          displayRes_CSS.push("Available " + (results.screenInfo.innerWidth) + " x " + (results.screenInfo.innerHeight + " CSS pixels\n")); 
          if (results.screenInfo.scrollY > 0) {
            displayRes_CSS.push("Scrolled " + Math.ceil(results.screenInfo.scrollY) + " pixels" );
          } 
          displayRes_CSS = displayRes_CSS.join(" ");
          container.appendChild(createGroup("displayRes_CSS","",displayRes_CSS,"continuation"));        
        } catch(e) {console.log(".---------------",e)}
  
      }


      // Orientation
      var displayOrientation = defaultValue;
      try {

        displayOrientation = [];        
        switch(results.screenInfo.orientation.defaultOrientation.toLowerCase()) {

          case "landscape":
            displayOrientation.push("Landscape by default");
          break;

          case "portrait":
            displayOrientation.push("Portrait by default");
          break;

        };

        var angle = results.screenInfo.orientation.currentOrientation;
        switch(angle) {

          case 0:
            displayOrientation.push("");
          break;

          case 180:
          case 360:
            displayOrientation[displayOrientation.length-1] +=",";
            displayOrientation.push("currently upside down");
          break;

          default:
            if (typeof angle == "number" ) {

              displayOrientation[displayOrientation.length-1] +=",";

              if (Math.abs(angle) > 180) {
                angle = 180 - angle;
              }

              if (angle < 0) {
                displayOrientation.push("currently rotated by " + Math.abs(angle) + " degrees to the right");
              } else {
                displayOrientation.push("currently rotated by " + Math.abs(angle) + " degrees to the left");
              }

            }
          break;

        }
     
        if (results.gyroscopeInfo && results.gyroscopeInfo.alpha) {
          
          displayOrientation.push("\nGyroscope rotation:");
          displayOrientation.push("α " + results.gyroscopeInfo.alpha+",");
          displayOrientation.push("β " + results.gyroscopeInfo.beta+",");
          displayOrientation.push("γ " + results.gyroscopeInfo.gamma);          
        }

        if (results.motionSensorsInfo && results.motionSensorsInfo.x) {
          
          displayOrientation.push("\nMotion:");
          displayOrientation.push("x " + results.motionSensorsInfo.x+",");
          displayOrientation.push("y " + results.motionSensorsInfo.y+",");
          displayOrientation.push("z " + results.motionSensorsInfo.z);          
        }
        
        displayOrientation = displayOrientation.join(" ");
        container.appendChild(createGroup("displayOrientation","Orientation",displayOrientation,"wide"));

      } catch(e) {console.log(e);}


      // Connection
      var connectionInfo = defaultValue;
      try {

        connectionInfo = [];

        if (results.connectionInfo && results.connectionInfo.status) {
          if (results.connectionInfo.status.toLowerCase() == "connected") {
            
            connectionInfo.push("Connected");

            if (results.connectionInfo.connectionType) {
              switch(results.connectionInfo.connectionType.toLowerCase()) {
                case "cellular": 
                  connectionInfo.push("(mobile data)");
                  break;
                case "wifi": 
                  connectionInfo.push("(Wi-Fi)");
                  break;
                case "bluetooth": 
                  connectionInfo.push("(Bluetooth)");
                  break;
                case "ethernet": 
                  connectionInfo.push("(LAN cable)");
                  break;
                case "wimax": 
                  connectionInfo.push("(WiMAX)");
                  break;
                default:
                  break;
              }

            }              

            if (results.connectionInfo.speed) {
              connectionInfo.push("at "+results.connectionInfo.speed);
            }  
            
            if (results.connectionInfo.roundTripTime) {
              connectionInfo.push("with ~"+results.connectionInfo.roundTripTime+" latency\n");
            }              
            
            if (results.IPLookupInfo && results.IPLookupInfo.success && results.IPLookupInfo.data) {

              if (results.IPLookupInfo.data.query) {
                connectionInfo.push("IP address: "+results.IPLookupInfo.data.query+"\n");
              }

              if (results.IPLookupInfo.data.isp) {
                connectionInfo.push("Provider: "+results.IPLookupInfo.data.isp);
              } 
              if (results.IPLookupInfo.data.as) {
                connectionInfo.push("("+results.IPLookupInfo.data.as+")");
              } 
              
            }

          } else {
            connectionInfo.push("Disconnected");
          }

          connectionInfo = connectionInfo.join(" ");          
        }
        container.appendChild(createGroup("ConnectionInfo","Network",connectionInfo,"wide"));
      } catch(e) {console.log(e);}


      // Geolocation
      var locationInfo = defaultValue;
      try {
        
        locationInfo = [];

        if (results.IPLookupInfo && results.IPLookupInfo.success && results.IPLookupInfo.data) {

          if (results.IPLookupInfo.data.city) {
            locationInfo.push(results.IPLookupInfo.data.city);
          }

          if (results.IPLookupInfo.data.regionName) {
            if (results.IPLookupInfo.data.city) {
              locationInfo[locationInfo.length-1] +=",";
            }
            locationInfo.push(results.IPLookupInfo.data.regionName);
          }
          
          if (results.IPLookupInfo.data.country) {
            if (results.IPLookupInfo.data.city || results.IPLookupInfo.data.regionName) {
              locationInfo[locationInfo.length-1] +=",";
            }
            locationInfo.push(results.IPLookupInfo.data.country);
          }     
          
          locationInfo.push("\n");
          
          if (results.IPLookupInfo.data.lat) {
            locationInfo.push("Approximate location: " + results.IPLookupInfo.data.lat + " lat, " + results.IPLookupInfo.data.lon + " lon");
          }        
          
          locationInfo = locationInfo.join(" ");
          container.appendChild(createGroup("locationInfo","Geolocation",locationInfo,"wide"));
        }

      } catch(e) {console.log(e); container.appendChild(createGroup("errorInfo","Error",e,"wide")); }    

      return container;

  }

}

},{}],28:[function(require,module,exports){
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
          document.body.innerHTML = '<div style="background:black;color: #FFF;white-space:pre-wrap;font:12px/1.2em monospace;">'+JSON.stringify(this.results,null,2)+'</div>';
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

},{"./lib/injectJsCss/injectJsCss":3,"./lib/json2/json2.min":4,"./lib/throttle/throttle":5}]},{},[1]);
