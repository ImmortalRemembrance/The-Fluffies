!function(e){var r={};function n(o){if(r[o])return r[o].exports;var t=r[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=r,n.d=function(o,t,e){n.o(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:e})},n.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)n.d(e,r,function(o){return t[o]}.bind(null,r));return e},n.n=function(o){var t=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(t,"a",t),t},n.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},n.p="",n(n.s=1)}([,function(o,t){var e=0,r=0,n=new Date,c=function(o){0<o?($("body").css({background:"#333"}),$("i#night").css({transform:"scale(0)"}),$("i#light").css({transform:"scale(1)"}),$("#title").css({color:"#222",background:"#eee"}),$("button").css({color:"#222",border:".5vmin solid #222",background:"transparent"}),$("p:not(#copyright)").css({color:"#bbb"}),$("p:not(#copyright) span, h2 span").css({color:"#eee"})):($("body").css({background:"#fff"}),$("i#night").css({transform:"scale(1)"}),$("i#light").css({transform:"scale(0)"}),$("#title").css({color:"#eee",background:"#222"}),$("button").css({color:"#eee",border:".5vmin solid #eee",background:"transparent"}),$("p:not(#copyright)").css({color:"#666"}),$("p:not(#copyright) span, h2 span").css({color:"#444"}))};e=18<=n.getHours()||n.getHours()<=8?1:0,setInterval(function(){1!==r&&(e=18<=n.getHours()||n.getHours()<=8?1:0)},1e3),$("i#night").click(function(){r=18<=n.getHours()||n.getHours()<=8?1:0,c(e=1)}),$("i#light").click(function(){r=n.getHours()<18&&8<n.getHours()?1:0,c(e=0)}),$("#back, #back button").hover(function(){0<e?$("#back button").css({color:"#eee",background:"#222"}):$("#back button").css({color:"#222",background:"#eee"})},function(){0<(e="rgb(255, 255, 255)"===$("body").css("background-color")?0:1)?$("#back button").css({color:"#222",background:"#eee"}):$("#back button").css({color:"#eee",background:"#222"})}),$("#support, #support button").hover(function(){0<e?$("#support button").css({color:"#eee",background:"#222"}):$("#support button").css({color:"#222",background:"#eee"})},function(){0<(e="rgb(255, 255, 255)"===$("body").css("background-color")?0:1)?$("#support button").css({color:"#222",background:"#eee"}):$("#support button").css({color:"#eee",background:"#222"})}),c(e)}]);