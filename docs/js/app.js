(function(e){function t(t){for(var n,o,i=t[0],u=t[1],s=t[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-3b2c8138":1,"chunk-499f575a":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+".css",a=u.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===a))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){s=p[i],l=s.getAttribute("data-href");if(l===n||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],f.parentNode.removeChild(f),r(c)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/orderit/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"422e":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function o(e,t,r,o,a,c){var i=Object(n["resolveComponent"])("vue-progress-bar"),u=Object(n["resolveComponent"])("router-view");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])(i),Object(n["createVNode"])(u)],64)}r("ab65"),r("422e");var a={name:"app",components:{},mounted:function(){this.$Progress.finish(),this.$router.push({name:"main"})},created:function(){var e=this;this.$Progress.start(),this.$router.beforeEach((function(t,r,n){if(void 0!==t.meta.progress){var o=t.meta.progress;e.$Progress.parseMeta(o)}e.$Progress.start(),n()})),this.$router.afterEach((function(){e.$Progress.finish()}))}};a.render=o;var c=a,i=r("1da1"),u=(r("96cf"),r("d3b7"),r("3ca3"),r("ddb0"),r("b0c0"),r("6c02"));function s(e,t,r,o,a,c){var i=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createBlock"])(i,{to:{name:"main"},custom:""},{default:Object(n["withCtx"])((function(e){var t=e.href,r=e.navigate,o=e.isActive;return[Object(n["createVNode"])("a",{href:t,onClick:r,class:{active:o}},"메인이동",10,["href","onClick"])]})),_:1})}var l={mounted:function(){this.$router.push({name:"main"})}};l.render=s;var p=l,f=Object(u["a"])({history:Object(u["b"])(),base:"/orderit/",routes:[{path:"/:catchAll(.*)",component:p},{path:"/error",name:"error",component:p,props:function(e){return{error:e.query.error}}},{path:"/",component:function(){return r.e("chunk-3b2c8138").then(r.bind(null,"c1d0"))},meta:{requiresAuth:!1,title:"orderit"},children:[{path:"main",name:"main",alias:"/",component:function(){return r.e("chunk-499f575a").then(r.bind(null,"fb47"))},meta:{requiresAuth:!0,title:"orderit"}}]}],scrollBehavior:function(e,t,r){return r||{x:0,y:0}}});f.beforeEach(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.matched.some((function(e){return e.meta.requiresAuth})))try{n()}catch(r){console.error("[route.beforeEach] : "+r.message)}else n();case 1:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}());var h=u["a"].prototype.push;u["a"].prototype.push=function(e){return h.call(this,e).catch((function(e){if("NavigationDuplicated"!==e.name)throw e}))};var d=f,m=r("10b7"),v=r.n(m),b=Object(n["createApp"])(c);b.config.productionTip=!1;var g={failedColor:"#874b4b",thickness:"3px",transition:{speed:"2s",opacity:"0.6s",termination:300},autoRevert:!0,inverse:!1};b.use(v.a,g),b.use(d),b.mount("#app")},ab65:function(e,t,r){}});
//# sourceMappingURL=app.js.map