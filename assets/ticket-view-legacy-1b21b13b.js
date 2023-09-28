!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var n,r={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},l=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(n){f=function(t,e,n){return t[e]=n}}function h(t,e,n,r){var o=e&&e.prototype instanceof j?e:j,i=Object.create(o.prototype),c=new P(r||[]);return a(i,"_invoke",{value:z(t,n,c)}),i}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var d="suspendedStart",m="suspendedYield",v="executing",g="completed",y={};function j(){}function x(){}function b(){}var w={};f(w,l,(function(){return this}));var C=Object.getPrototypeOf,L=C&&C(C(I([])));L&&L!==o&&i.call(L,l)&&(w=L);var O=b.prototype=j.prototype=Object.create(w);function S(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function k(e,n){function r(o,a,c,l){var s=p(e[o],e,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==t(f)&&i.call(f,"__await")?n.resolve(f.__await).then((function(t){r("next",t,c,l)}),(function(t){r("throw",t,c,l)})):n.resolve(f).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,l)}))}l(s.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(i,i):i()}})}function z(t,e,r){var o=d;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:n,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var l=E(c,r);if(l){if(l===y)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var s=p(t,e,r);if("normal"===s.type){if(o=r.done?g:m,s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=g,r.method="throw",r.arg=s.arg)}}}function E(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=p(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[l];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=n,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return x.prototype=b,a(O,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:x,configurable:!0}),x.displayName=f(b,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},r.awrap=function(t){return{__await:t}},S(k.prototype),f(k.prototype,s,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new k(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(O),f(O,u,"Generator"),f(O,l,(function(){return this})),f(O,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},r.values=I,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(M),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),M(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;M(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),y}},r}function n(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(s){return void n(s)}c.done?e(l):Promise.resolve(l).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,l,"next",t)}function l(t){n(a,o,i,c,l,"throw",t)}c(void 0)}))}}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,c=[],l=!0,s=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);l=!0);}catch(t){s=!0,o=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(t,e)||a(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(e,n,r){return(n=function(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,n||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===t(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}System.register(["./chakra-legacy-37df05f3.js","./index-legacy-44151797.js","./react-legacy-9810cbba.js","./use-templates-legacy-9efe724c.js"],(function(t,n){"use strict";var a,c,l,f,h,p,d,m,v,g,y,j,x,b,w,C,L,O,S,k,z,E,N,M,P,I,H,R,A,T,B,F,_,U,V,J,G,D,W,q,Y,Z,K,X,$,Q,tt,et,nt,rt,ot,it,at,ct,lt,st,ut,ft,ht,pt,dt;return{setters:[function(t){a=t.a2,c=t.j,l=t.d,f=t.Z,h=t.E,p=t.a3,d=t.X,m=t.c,v=t.a4,g=t.a5,y=t.s,j=t.a6,x=t.r,b=t.a7,w=t.a8,C=t.t,L=t.v,O=t.a9,S=t.L,k=t.aa,z=t.M,E=t.ab,N=t.p,M=t.q,P=t.e},function(t){I=t.L,H=t.S,R=t.e,A=t.u,T=t.f,B=t.g,F=t.h,_=t.i,U=t.j,V=t.d,J=t.k,G=t.l,D=t.r,W=t.m,q=t.a,Y=t.n,Z=t.o,K=t.p,X=t.q,$=t.t,Q=t.v,tt=t.w,et=t.x,nt=t.I,rt=t.G,ot=t.y,it=t.R,at=t.z,ct=t.E},function(t){lt=t.u,st=t.r,ut=t.n},function(t){ft=t.u,ht=t.R,pt=t.a,dt=t.b}],execute:function(){function n(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}}]})(t)}function mt(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}}]})(t)}function vt(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}}]})(t)}function gt(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}}]})(t)}function yt(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}}]})(t)}function jt(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"}}]})(t)}function xt(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}}]})(t)}function bt(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}}]})(t)}function wt(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(t)}function Ct(t){var e=t.optionalName,r=t.onChange,a=lt().t,d=ft(),m=function(t,n){return[{type:"select",label:a("Language"),value:t,options:Object.entries(I).reduce((function(t,e){return s(s({},t),{},u({},e[0],d(e[1])))}),{}),disabledOptions:Object.keys(I).filter((function(t){return H.includes(t)||e.some((function(e){return e[0]===t}))})).filter((function(e){return e!==t})),onChange:function(e){return g(t,e)}},{type:"input",label:a("Name"),value:n,onChange:function(e){return y(t,e)},validator:function(t){return!!t}}]},v=function(){var t=Object.keys(I).filter((function(t){return!H.includes(t)&&!e.some((function(e){return e[0]===t}))}));t.includes("ko")?r([].concat(i(e),[["ko",""]])):r([].concat(i(e),[[t[0],""]]))},g=function(t,n){r(e.map((function(e){return e[0]===t?[n,e[1]]:e})))},y=function(t,n){r(e.map((function(e){return e[0]===t?[e[0],n]:e})))};return c.jsxs(c.Fragment,{children:[0===e.length&&c.jsx(l,{variant:"ghost",size:"sm",leftIcon:c.jsx(gt,{}),onClick:v,w:"100%",my:2,children:a("Add more translations")}),e.map((function(t,i,l){var s=o(t,2),u=s[0],d=s[1];return c.jsxs(f,{sx:{w:"100%","& > div:first-of-type":{flex:1}},children:[c.jsx(ht,{fields:m(u,d),noLabel:i>0}),i===l.length-1?c.jsx(h,{size:"sm",variant:"ghost","aria-label":a("Add translation"),title:a("Add translation"),onClick:v,icon:c.jsx(gt,{})}):c.jsx(p,{minW:8}),c.jsx(h,{size:"sm",variant:"ghost","aria-label":a("Remove this translation"),title:a("Remove this translation"),onClick:function(){return function(t){r(e.filter((function(e){return e[0]!==t})))}(u)},icon:c.jsx(n,{})})]},u)}))]})}function Lt(){var t=lt().t,e=ft(),n=R(),r=A((function(t){return t.ticket})),o=r.company,i=r.newCompany,a=r.companyName,l=r.companyOptionalName,f=pt(),h=[{type:"select",label:t("Company"),value:o,options:s(s({},f),{},u({},t("New"),{new:t("Add a company...")})),disabledOptions:[""],onChange:function(t){return n(T(t))}},{type:"input",label:t("Company code"),placeholder:"e.g. mtr, gzmtr, shmetro",value:i,onChange:function(t){return n(B(t))},hidden:"new"!==o}],p=H.map((function(t){return{type:"input",label:e(I[t]),value:a[t],onChange:function(e){return n(F({lang:t,name:e}))}}}));return c.jsxs(_,{children:[c.jsx(U,{children:c.jsx(d,{as:"h5",size:"sm",children:t("Railway company")})}),c.jsx(m.div,{px:1,children:c.jsxs(V,{direction:"column",children:[c.jsx(ht,{fields:h}),"new"===o&&c.jsx(ht,{fields:p}),"new"===o&&c.jsx(Ct,{optionalName:l,onChange:function(t){return n(J(t))}})]})})]})}t("default",(function(){var t=lt().t,e=ut(),n=R(),r=o(st.useState(!1),2),i=r[0],a=r[1];return c.jsxs(it,{sx:At,children:[c.jsxs(P,{children:[c.jsx(Lt,{}),c.jsx(Mt,{})]}),c.jsxs(P,{children:[c.jsx(l,{size:"sm",onClick:function(){D.isStandaloneWindow()?e("/"):D.openApp("rmg-templates")},children:t("Back to list")}),c.jsxs(f,{ml:"auto",children:[c.jsx(l,{size:"sm",variant:"outline",onClick:function(){n(at()),D.event(ct.RESET_TICKETS,{})},children:t("Reset")}),c.jsx(l,{size:"sm",colorScheme:"primary",onClick:function(){return a(!0)},children:t("Submit")})]})]}),c.jsx(Rt,{isOpen:i,onClose:function(){return a(!1)}})]})}));var Ot=function(t){return new Promise((function(e){var n=new FileReader;n.onloadend=function(){return e(n.result)},n.readAsText(t)}))},St={position:"relative","& > div":{overflow:"hidden"},"& > div:last-of-type":{flex:1,alignItems:"center",justifyContent:"center",minW:120,"& input":{display:"none"}}};function kt(t){var n=t.company,o=t.templateEntry,a=t.onLineChange,p=t.onNewLineChange,d=t.onMajorFlagChange,m=t.onLineNameChange,j=t.onOptionalNameChange,x=t.onParamChange,b=t.onParamImport,w=t.onRemove,C=o.line,L=o.newLine,O=o.majorUpdate,S=o.templateName,k=o.optionalName,z=o.param,E=lt().t,N=ft(),M=dt(n).templates,P=st.useRef(null),R=function(){var t=r(e().mark((function t(n){var r,o,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=null===(r=n.target.files)||void 0===r?void 0:r[0],console.log("handleFileUpload():: received file",o),o){t.next=4;break}return t.abrupt("return");case 4:if("application/json"===o.type){t.next=8;break}return alert("Invalid file type!"),n.target.value="",t.abrupt("return");case 8:return t.prev=8,t.next=11,Ot(o);case 11:i=t.sent,x(JSON.parse(i)),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(8),alert("Invalid file!"),n.target.value="";case 19:case"end":return t.stop()}}),t,null,[[8,15]])})));return function(e){return t.apply(this,arguments)}}(),A=s(s({"":E("Please select...")},""===n||"new"===n?{}:M.reduce((function(t,e){return s(s({},t),{},u({},e.filename,N(e.name)))}),{})),{},{new:E("Add a line...")}),T=[{type:"select",label:E("Line"),value:C,options:A,disabledOptions:[""],onChange:function(t){return a(t)},minW:150},{type:"input",label:E("Line code"),placeholder:"e.g. twl, gz1, sh1",value:L,onChange:function(t){return p(t)},hidden:"new"!==C},{type:"custom",label:E("Major update"),component:c.jsx(G,{selections:[{label:E("Yes"),value:!0},{label:E("No"),value:!1}],defaultValue:O,onChange:function(t){return d(t)}}),hidden:"new"===C}],B=H.map((function(t){return{type:"input",label:N(I[t]),value:S[t],onChange:function(e){return m(t,e)}}}));return c.jsxs(V,{sx:St,children:[c.jsx(h,{size:"sm",variant:"ghost",icon:c.jsx(wt,{}),"aria-label":E("Remove this line"),title:E("Remove this line"),position:"absolute",top:0,right:0,zIndex:5,onClick:w}),c.jsxs(v,{spacing:0,children:[c.jsx(ht,{fields:[].concat(T,i(B)),minW:110}),c.jsx(Ct,{optionalName:k,onChange:j})]}),c.jsx(v,{children:z?c.jsxs(c.Fragment,{children:[c.jsx(g,{as:jt,boxSize:10}),c.jsxs(y,{as:"i",fontSize:"xs",children:["(",E("Size"),": ",JSON.stringify(z).length," ",E("chars"),")"]}),c.jsx(l,{size:"sm",onClick:function(){return x(void 0)},children:E("Remove")})]}):c.jsxs(c.Fragment,{children:[c.jsx(y,{as:"i",fontSize:"sm",children:E("Import from")}),c.jsxs(f,{spacing:1,children:[c.jsx(l,{size:"sm",onClick:b,children:"RMG"}),c.jsx(l,{size:"sm",onClick:function(){var t;return null===(t=P.current)||void 0===t?void 0:t.click()},children:E("Local")}),c.jsx("input",{ref:P,type:"file",accept:".json",onChange:R})]})]})})]})}var zt="rmg-bridge--",Et={h:500,maxH:"70%","& iframe":{h:"100%",w:"100%"}};function Nt(t){var e=t.templateId,n=t.onClose,r=t.onImport,i=o(st.useState(crypto.randomUUID()),1)[0],a="/rmg/#/import?"+new URLSearchParams({parentComponent:D.getAppName(),parentId:i});return st.useEffect((function(){var t=new BroadcastChannel(zt+i);return t.onmessage=function(t){var e=t.data,o=e.event,i=e.data;console.log("[rmg-templates] Received event from RMG app clip:",o),"CLOSE"===o?n():"IMPORT"===o&&r(i)},function(){t.close()}}),[e]),c.jsx(W,{isOpen:!!e,onClose:n,sx:Et,children:c.jsx("iframe",{src:a,loading:"lazy"})})}function Mt(){var t=lt().t,e=R(),n=A((function(t){return t.ticket})),r=n.company,i=n.templates,a=dt(r),s=a.templates,u=a.isLoading,h=o(st.useState(),2),p=h[0],v=h[1];return c.jsxs(_,{children:[u&&c.jsx(q,{isIndeterminate:!0}),c.jsxs(U,{children:[c.jsx(d,{as:"h5",size:"sm",children:t("Add or update templates")}),c.jsx(j,{hasArrow:!0,label:t("Toggling on 'Major update' will update the uploader field of the template and you are required enter extra justification for it."),children:c.jsx("span",{children:c.jsx(g,{as:mt,ml:1})})})]}),c.jsx(m.div,{px:1,transform:"translateZ(0)",children:i.map((function(t){return c.jsx(kt,{company:r,templateEntry:t,onLineChange:function(n){return function(t,n){var r=s.find((function(t){return t.filename===n}));e(et({id:t,line:n,name:null==r?void 0:r.name}))}(t.id,n)},onNewLineChange:function(n){return e(Y({id:t.id,newLine:n}))},onMajorFlagChange:function(n){return e(Z({id:t.id,majorUpdate:n}))},onLineNameChange:function(n,r){return e(K({id:t.id,lang:n,name:r}))},onOptionalNameChange:function(n){return e(X({id:t.id,optionalName:n}))},onParamChange:function(n){return e($({id:t.id,param:n}))},onParamImport:function(){return v(t.id)},onRemove:function(){return e(Q(t.id))}},t.id)}))}),c.jsx(f,{justifyContent:"flex-end",children:c.jsx(l,{variant:"ghost",size:"sm",leftIcon:c.jsx(gt,{}),onClick:function(){return e(tt())},children:t("Add item")})}),c.jsx(Nt,{templateId:p,onClose:function(){return v(void 0)},onImport:function(t){p&&e($({id:p,param:t})),v(void 0)}})]})}function Pt(t){var e=t.companyErrors,n=t.templateErrors,r=t.onClose,i=lt().t,a=ft();return c.jsxs(c.Fragment,{children:[c.jsxs(x,{children:[c.jsx(y,{children:i("Your inputs contain the following errors. Please fix it before submitting.")}),e.length>0&&c.jsxs(c.Fragment,{children:[c.jsx(d,{as:"h5",size:"sm",my:2,children:i("Railway company")}),c.jsx(b,{"aria-label":"List of company errors",children:e.map((function(t,e){return c.jsx(w,{children:a(nt[t])},e)}))})]}),Object.values(n).flat().length>0&&c.jsxs(c.Fragment,{children:[c.jsx(d,{as:"h5",size:"sm",my:2,children:i("Templates")}),c.jsx(b,{"aria-label":"List of template errors",children:Object.entries(n).map((function(t){var e=o(t,2),n=e[0],r=e[1];return c.jsxs(w,{children:[n,c.jsx(b,{children:r.map((function(t,e){return c.jsx(w,{children:a(nt[t])},e)}))})]},n)}))})]})]}),c.jsx(C,{children:c.jsx(f,{children:c.jsx(l,{colorScheme:"primary",onClick:r,children:i("Go back")})})})]})}function It(t){var e=t.justification,n=t.majorUpdateJustifications,r=t.onJustificationChange,a=t.onMajorUpdateJustificationChange,s=t.onNext,u=lt().t,f=[{type:"textarea",value:e,label:u("Justification"),placeholder:u("Briefly describe your changes and provide justification"),onChange:r}],h=Object.entries(n).map((function(t){var e=o(t,2),n=e[0];return{type:"textarea",value:e[1],label:u("Justification for major update of")+" "+n,placeholder:u("Briefly describe your changes and provide justification"),onChange:function(t){return a(n,t)}}})),p=!e||Object.values(n).some((function(t){return!t}));return c.jsxs(c.Fragment,{children:[c.jsxs(x,{children:[c.jsx(y,{children:u("Please provide suitable source and justification.")}),c.jsx(ht,{fields:[].concat(f,i(h)),minW:"full"})]}),c.jsx(C,{children:c.jsx(l,{colorScheme:"primary",onClick:s,rightIcon:c.jsx(bt,{}),isDisabled:p,children:u("Next")})})]})}function Ht(t){var n,a=t.companyName,s=t.companyBlock,u=t.templateBlocks,f=t.justification,h=t.majorUpdateJustifications,p=t.onPrev,d=t.onClose,m=lt().t,v=L("primary.500","primary.300"),j=["**Justification:** ".concat(f||"(REPLACE ME)"),Object.entries(h).map((function(t){var e=o(t,2),n=e[0],r=e[1];return"- Major update of ".concat(n,": ").concat(r)})).join("\n"),rt,null!==(n=null==s?void 0:s.outerHTML)&&void 0!==n?n:""].concat(i(u.map((function(t){return t.outerHTML})))).join("\n\n"),b=new URLSearchParams({template:"new-templates-request.md",labels:"resources",title:"Resources: New templates of "+a}),k=function(){var t=r(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.clipboard.writeText(j);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return c.jsxs(c.Fragment,{children:[c.jsxs(x,{children:[c.jsx(y,{children:m("Follow the instructions below to open an Issue")+":"}),c.jsxs(O,{children:[c.jsxs(w,{children:[m("Open")," ",c.jsxs(S,{color:v,href:"https://github.com/railmapgen/rmg-templates/issues/new?"+b.toString(),isExternal:!0,children:["Issue: New Templates Request ",c.jsx(g,{as:vt})]})]}),c.jsxs(w,{children:[m("Click copy button and paste into issue body")," ",c.jsx(l,{size:"xs",leftIcon:c.jsx(yt,{}),onClick:k,children:m("Copy")})]})]})]}),c.jsxs(C,{children:[c.jsx(l,{variant:"ghost",onClick:p,mr:"auto",leftIcon:c.jsx(xt,{}),children:m("Previous")}),c.jsx(l,{colorScheme:"primary",onClick:d,children:m("Close")})]})]})}function Rt(t){var e=t.isOpen,n=t.onClose,r=lt().t,a=o(st.useState([]),2),l=a[0],f=a[1],h=o(st.useState({}),2),p=h[0],d=h[1],m=o(st.useState(""),2),v=m[0],g=m[1],y=o(st.useState({}),2),j=y[0],x=y[1],b=o(st.useState(!1),2),w=b[0],C=b[1],L=A((function(t){return t.app})),O=L.coreCompanyConfig,S=L.otherCompanyConfig,P=L.templateList,I=A((function(t){return t.ticket})),H=ot.getCompanyEnglishName(I,[].concat(i(O),i(S))),R=ot.getCompanyBlock(I),T=ot.getTemplateBlocks(I);st.useEffect((function(){if(e){f(ot.getCompanyErrors(I)),d(ot.getTemplateErrors(I));var t=ot.getMajorUpdateNames(I,P).reduce((function(t,e){return s(s({},t),{},u({},e,""))}),{});x(t)}else g(""),x({}),C(!1)}),[e]);var B=l.length>0||Object.values(p).flat().length>0,F=!B&&!w;return c.jsxs(k,{blockScrollOnMount:!1,isOpen:e,onClose:n,scrollBehavior:"inside",children:[c.jsx(z,{}),c.jsxs(E,{children:[c.jsx(N,{children:r("Submit templates")}),c.jsx(M,{}),B&&c.jsx(Pt,{companyErrors:l,templateErrors:p,onClose:n}),F&&c.jsx(It,{justification:v,majorUpdateJustifications:j,onJustificationChange:g,onMajorUpdateJustificationChange:function(t,e){return x((function(n){return s(s({},n),{},u({},t,e))}))},onNext:function(){return C(!0)}}),!B&&w&&c.jsx(Ht,{companyName:H,companyBlock:R,templateBlocks:T,justification:v,majorUpdateJustifications:j,onPrev:function(){return C(!1)},onClose:n})]})]})}var At={width:{base:"100%",md:520},alignSelf:"center","& > div:first-of-type":{flexDirection:"column",flex:1,overflowY:"auto",bg:"inherit"},"& > div:nth-of-type(2)":{my:2}}}}}))}();