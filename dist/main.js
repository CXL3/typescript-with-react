(()=>{"use strict";var e,r={};function t(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e=(new(n((function e(){var r,t;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),t="Hello world",(r="greeting")in this?Object.defineProperty(this,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):this[r]=t})))).greeting,console.log(e)})();