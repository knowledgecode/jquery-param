/*
 jquery-param (c) 2015 KNOWLEDGECODE | MIT
*/
(function(h){var e=function(e){var f=function(d,a,c){c="function"===typeof c?c():null===c?"":void 0===c?"":c;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(c)},g=function(d,a,c){var b,e;if("[object Array]"===Object.prototype.toString.call(a))for(b=0,e=a.length;b<e;b++)g(d+"["+("object"===typeof a[b]?b:"")+"]",a[b],c);else if(a&&"[object Object]"===a.toString())for(b in a)a.hasOwnProperty(b)&&(d?g(d+"["+b+"]",a[b],c,f):g(b,a[b],c,f));else if(d)f(c,d,a);else for(b in a)f(c,b,a[b]);return c};
return g("",e,[]).join("&").replace(/%20/g,"+")};"object"===typeof module&&"object"===typeof module.exports?module.exports=e:"function"===typeof define&&define.amd?define([],function(){return e}):h.param=e})(this);
