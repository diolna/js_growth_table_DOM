parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=t(e))){var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,l=!0,s=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return l=e.done,e},e:function(e){s=!0,o=e},f:function(){try{l||null==a.return||a.return()}finally{if(s)throw o}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var r=document.getElementsByClassName("field")[0];function a(e){return{row:e.getElementsByTagName("tr").length,col:e.rows[0].cells.length}}function o(e){var t=document.getElementsByTagName("tbody")[0],n=e.getElementsByTagName("tr"),r=n[n.length-1];t.append(r.cloneNode(!0))}function l(t){var n,r=e(t.getElementsByTagName("tr"));try{for(r.s();!(n=r.n()).done;){var a=n.value;a.append(a.lastElementChild.cloneNode(!0))}}catch(o){r.e(o)}finally{r.f()}}function s(e){var t=e.getElementsByTagName("tr");t[t.length-1].remove()}function c(t){var n,r=e(t.getElementsByTagName("tr"));try{for(r.s();!(n=r.n()).done;){n.value.lastElementChild.remove()}}catch(a){r.e(a)}finally{r.f()}}document.addEventListener("click",function(e){switch(!0){case e.target.classList.contains("append-row"):o(r);break;case e.target.classList.contains("remove-row"):s(r);break;case e.target.classList.contains("append-column"):l(r);break;case e.target.classList.contains("remove-column"):c(r)}var t=a(r),n=document.getElementsByClassName("remove-column button")[0],i=document.getElementsByClassName("remove-row button")[0],u=document.getElementsByClassName("append-column button")[0],m=document.getElementsByClassName("append-row button")[0];n.disabled=2===t.col,i.disabled=2===t.row,u.disabled=10===t.col,m.disabled=10===t.row});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.984438e9.js.map