!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,c=[],l=!0,u=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);l=!0);}catch(s){u=!0,o=s}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(t,e)||r(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */i=function(){return e};var e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(P){s=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),c=new S(r||[]);return o(a,"_invoke",{value:C(t,n,c)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(P){return{type:"throw",arg:P}}}e.wrap=f;var p={};function d(){}function m(){}function v(){}var y={};s(y,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(k([])));b&&b!==n&&r.call(b,c)&&(y=b);var w=v.prototype=d.prototype=Object.create(y);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,n){function i(o,a,c,l){var u=h(e[o],e,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==t(f)&&r.call(f,"__await")?n.resolve(f.__await).then((function(t){i("next",t,c,l)}),(function(t){i("throw",t,c,l)})):n.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return i("throw",t,c,l)}))}l(u.arg)}var a;o(this,"_invoke",{value:function(t,e){function r(){return new n((function(n,r){i(t,e,n,r)}))}return a=a?a.then(r,r):r()}})}function C(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return z()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=O(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=h(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function O(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=h(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function k(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:z}}function z(){return{value:void 0,done:!0}}return m.prototype=v,o(w,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:m,configurable:!0}),m.displayName=s(v,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},j(x.prototype),s(x.prototype,l,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new x(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(w),s(w,u,"Generator"),s(w,c,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}function a(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(u){return void n(u)}c.done?e(l):Promise.resolve(l).then(r,o)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){a(i,r,o,c,l,"next",t)}function l(t){a(i,r,o,c,l,"throw",t)}c(void 0)}))}}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(e,n,r){return(n=function(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,n||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===t(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}System.register(["./vendor-legacy-c182158d.js","./index-legacy-ebc2257e.js","./use-templates-legacy-3ca94129.js"],(function(t,r){"use strict";var o,a,l,f,h,p,d,m,v,y,g,b,w,j,x,C,O,L,E,S,k,z,P,N,M,T,I,_,A,B,H,R,U,J,F,G,V,W,D,Y,q,K,$,Q,X,Z,tt,et,nt,rt,ot,it,at,ct,lt;return{setters:[function(t){o=t.u,a=t.S,l=t.L,f=t.j,h=t.M,p=t.a,d=t.H,m=t.N,v=t.w,y=t.O,g=t.Q,b=t.U,w=t.i,j=t.V,x=t.W,C=t.X,O=t.x,L=t.y,E=t.Y,S=t.Z,k=t._,z=t.$,P=t.a0,N=t.a1,M=t.a2,T=t.a3,I=t.a4,_=t.c,A=t.a5,B=t.a6,H=t.a7,R=t.a8,U=t.a9,J=t.t,F=t.K,G=t.r},function(t){V=t.a,W=t.u,D=t.b,Y=t.c,q=t.d,K=t.e,$=t.f,Q=t.g,X=t.h,Z=t.r,tt=t.i,et=t.j,nt=t.t,rt=t.k},function(t){ot=t.u,it=t.a,at=t.I,ct=t.G,lt=t.E}],execute:function(){function r(){var t=o(),e=t.t,n=t.i18n,r=ot(),i=V(),c=W((function(t){return t.app})).companyConfig,y=W((function(t){return t.ticket})),g=y.company,b=y.newCompany,w=y.companyName,j=u(u({},c.map((function(t){return[t.id,r(t.name)]})).sort((function(t,e){return t[1].localeCompare(e[1],n.languages[0])})).reduce((function(t,e){return u(u({},t),{},s({},e[0],e[1]))}),{"":e("Please select...")})),{},{new:e("Add a company...")}),x=[{type:"select",label:e("Company"),value:g,options:j,disabledOptions:[""],onChange:function(t){return i(D(t))}},{type:"input",label:e("Company code"),placeholder:"e.g. mtr, gzmtr, shmetro",value:b,onChange:function(t){return i(Y(t))},hidden:"new"!==g}],C=a.map((function(t){return{type:"input",label:r(l[t]),value:w[t],onChange:function(e){return i(q({lang:t,name:e}))}}}));return f(h,{as:"section",children:[p(d,{as:"h5",size:"sm",mb:2,children:e("Railway company")}),f(m,{direction:"column",children:[p(v,{fields:x}),"new"===g&&p(v,{fields:C})]})]})}t("default",(function(){var t=o().t,n=J(),i=V(),a=e(_.useState(!1),2),c=a[0],l=a[1];return f(F,{sx:Pt,children:[f(j,{children:[p(r,{}),p(Lt,{})]}),f(j,{children:[p(L,{size:"sm",onClick:function(){G.isStandaloneWindow()?n("/"):G.openApp("rmg-templates")},children:t("Back to list")}),f(O,{ml:"auto",children:[p(L,{size:"sm",variant:"outline",onClick:function(){i(rt()),G.event(lt.RESET_TICKETS,{})},children:t("Reset")}),p(L,{size:"sm",colorScheme:"primary",onClick:function(){return l(!0)},children:t("Submit")})]})]}),p(zt,{isOpen:c,onClose:function(){return l(!1)}})]})}));var ut=function(t){return new Promise((function(e){var n=new FileReader;n.onloadend=function(){return e(n.result)},n.readAsText(t)}))},st={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ft=y.createContext&&y.createContext(st),ht=globalThis&&globalThis.__assign||function(){return ht=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},ht.apply(this,arguments)},pt=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function dt(t){return t&&t.map((function(t,e){return y.createElement(t.tag,ht({key:e},t.attr),dt(t.child))}))}function mt(t){return function(e){return y.createElement(vt,ht({attr:ht({},t.attr)},e),dt(t.child))}}function vt(t){var e=function(e){var n,r=t.attr,o=t.size,i=t.title,a=pt(t,["attr","size","title"]),c=o||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),y.createElement("svg",ht({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,r,a,{className:n,style:ht(ht({color:t.color||e.color},e.style),t.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&y.createElement("title",null,i),t.children)};return void 0!==ft?y.createElement(ft.Consumer,null,(function(t){return e(t)})):e(st)}function yt(t){return mt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}}]})(t)}function gt(t){return mt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}}]})(t)}function bt(t){return mt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}}]})(t)}function wt(t){return mt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}}]})(t)}function jt(t){return mt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}}]})(t)}function xt(t){return mt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}}]})(t)}function Ct(t){return mt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(t)}function Ot(t){var e=t.company,r=t.templateEntry,h=t.onLineChange,d=t.onNewLineChange,y=t.onMajorFlagChange,w=t.onLineNameChange,j=t.onParamChange,x=t.onRemove,C=r.line,O=r.newLine,L=r.majorUpdate,E=r.templateName,S=o().t,k=ot(),z=it(e).templates,P=function(){var t=c(i().mark((function t(e){var n,r,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=null===(n=e.target.files)||void 0===n?void 0:n[0],console.log("handleFileUpload():: received file",r),r){t.next=4;break}return t.abrupt("return");case 4:if("application/json"===r.type){t.next=8;break}return alert("Invalid file type!"),e.target.value="",t.abrupt("return");case 8:return t.prev=8,t.next=11,ut(r);case 11:o=t.sent,j(JSON.parse(o)),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(8),alert("Invalid file!"),e.target.value="";case 19:case"end":return t.stop()}}),t,null,[[8,15]])})));return function(e){return t.apply(this,arguments)}}(),N=u(u({"":S("Please select...")},""===e||"new"===e?{}:z.reduce((function(t,e){return u(u({},t),{},s({},e.filename,k(e.name)))}),{})),{},{new:S("Add a line...")}),M=[{type:"select",label:S("Line"),value:C,options:N,disabledOptions:[""],onChange:function(t){return h(t)},minW:150},{type:"custom",label:S("Configuration file"),component:p(g,{variant:"flushed",size:"xs",type:"file",accept:".json",onChange:P}),minW:250},{type:"input",label:S("Line code"),placeholder:"e.g. twl, gz1, sh1",value:O,onChange:function(t){return d(t)},hidden:"new"!==C},{type:"switch",label:S("Major update"),isChecked:L,onChange:function(t){return y(t)},hidden:"new"===C,oneLine:!0}],T=a.map((function(t){return{type:"input",label:k(l[t]),value:E[t],onChange:function(e){return w(t,e)},minW:"en"===t?260:void 0}}));return f(m,{position:"relative",direction:"column",children:[p(b,{size:"sm",variant:"ghost",icon:p(Ct,{}),"aria-label":S("Remove this line"),title:S("Remove this line"),position:"absolute",top:0,right:0,zIndex:5,onClick:x}),p(v,{fields:[].concat(M,n(T)),minW:110})]})}function Lt(){var t=o().t,e=V(),n=W((function(t){return t.ticket})),r=n.company,i=n.templates,a=it(r),c=a.templates,l=a.isLoading;return f(h,{as:"section",mt:3,position:"relative",children:[l&&p(w,{isIndeterminate:!0}),f(j,{children:[p(d,{as:"h5",size:"sm",mb:2,children:t("Add or update templates")}),p(x,{hasArrow:!0,label:t("Toggling on 'Major update' will update the uploader field of the template and you are required enter extra justification for it."),children:p("span",{children:p(C,{as:yt,ml:1})})})]}),i.map((function(t){return p(Ot,{company:r,templateEntry:t,onLineChange:function(n){return function(t,n){var r=c.find((function(t){return t.filename===n}));e(et({id:t,line:n,name:null==r?void 0:r.name}))}(t.id,n)},onNewLineChange:function(n){return e(K({id:t.id,newLine:n}))},onMajorFlagChange:function(n){return e($({id:t.id,majorUpdate:n}))},onLineNameChange:function(n,r){return e(Q({id:t.id,lang:n,name:r}))},onParamChange:function(n){return e(X({id:t.id,param:n}))},onRemove:function(){return e(Z(t.id))}},t.id)})),p(O,{justifyContent:"flex-end",children:p(L,{variant:"ghost",size:"sm",leftIcon:p(bt,{}),onClick:function(){return e(tt())},children:t("Add item")})})]})}function Et(t){var n=t.companyErrors,r=t.templateErrors,i=t.onClose,a=o().t,c=ot();return f(E,{children:[f(S,{children:[p(k,{children:a("Your inputs contain the following errors. Please fix it before submitting.")}),n.length>0&&f(E,{children:[p(d,{as:"h5",size:"sm",my:2,children:a("Railway company")}),p(z,{"aria-label":"List of company errors",children:n.map((function(t,e){return p(P,{children:c(at[t])},e)}))})]}),Object.values(r).flat().length>0&&f(E,{children:[p(d,{as:"h5",size:"sm",my:2,children:a("Templates")}),p(z,{"aria-label":"List of template errors",children:Object.entries(r).map((function(t){var n=e(t,2),r=n[0],o=n[1];return f(P,{children:[r,p(z,{children:o.map((function(t,e){return p(P,{children:c(at[t])},e)}))})]},r)}))})]})]}),p(N,{children:p(O,{children:p(L,{colorScheme:"primary",onClick:i,children:a("Go back")})})})]})}function St(t){var r=t.justification,i=t.majorUpdateJustifications,a=t.onJustificationChange,c=t.onMajorUpdateJustificationChange,l=t.onNext,u=o().t,s=[{type:"textarea",value:r,label:u("Justification"),placeholder:u("Briefly describe your changes and provide justification"),onChange:a}],h=Object.entries(i).map((function(t){var n=e(t,2),r=n[0];return{type:"textarea",value:n[1],label:u("Justification for major update of")+" "+r,placeholder:u("Briefly describe your changes and provide justification"),onChange:function(t){return c(r,t)}}})),d=!r||Object.values(i).some((function(t){return!t}));return f(E,{children:[f(S,{children:[p(k,{children:u("Please provide suitable source and justification.")}),p(v,{fields:[].concat(s,n(h)),minW:"full"})]}),p(N,{children:p(L,{colorScheme:"primary",onClick:l,rightIcon:p(xt,{}),isDisabled:d,children:u("Next")})})]})}function kt(t){var r,a=t.companyName,l=t.companyBlock,u=t.templateBlocks,s=t.justification,h=t.majorUpdateJustifications,d=t.onPrev,m=t.onClose,v=o().t,y=M("primary.500","primary.300"),g=["**Justification:** ".concat(s||"(REPLACE ME)"),Object.entries(h).map((function(t){var n=e(t,2),r=n[0],o=n[1];return"- Major update of ".concat(r,": ").concat(o)})).join("\n"),ct,null!==(r=null==l?void 0:l.outerHTML)&&void 0!==r?r:""].concat(n(u.map((function(t){return t.outerHTML})))).join("\n\n"),b=new URLSearchParams({template:"new-templates-request.md",label:"resources",title:"Resources: New templates of "+a}),w=function(){var t=c(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.clipboard.writeText(g);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return f(E,{children:[f(S,{children:[p(k,{children:v("Follow the instructions below to open an Issue")+":"}),f(T,{children:[f(P,{children:[v("Open")," ",f(I,{color:y,href:"https://github.com/railmapgen/rmg-templates/issues/new?"+b.toString(),isExternal:!0,children:["Issue: New Templates Request ",p(C,{as:gt})]})]}),f(P,{children:[v("Click copy button and paste into issue body")," ",p(L,{size:"xs",leftIcon:p(wt,{}),onClick:w,children:v("Copy")})]})]})]}),f(N,{children:[p(L,{variant:"ghost",onClick:d,mr:"auto",leftIcon:p(jt,{}),children:v("Previous")}),p(L,{colorScheme:"primary",onClick:m,children:v("Close")})]})]})}function zt(t){var n=t.isOpen,r=t.onClose,i=o().t,a=e(_.useState([]),2),c=a[0],l=a[1],h=e(_.useState({}),2),d=h[0],m=h[1],v=e(_.useState(""),2),y=v[0],g=v[1],b=e(_.useState({}),2),w=b[0],j=b[1],x=e(_.useState(!1),2),C=x[0],O=x[1],L=W((function(t){return t.app})),E=L.companyConfig,S=L.templateList,k=W((function(t){return t.ticket})),z=nt.getCompanyEnglishName(k,E),P=nt.getCompanyBlock(k),N=nt.getTemplateBlocks(k);_.useEffect((function(){if(n){l(nt.getCompanyErrors(k)),m(nt.getTemplateErrors(k));var t=nt.getMajorUpdateNames(k,S).reduce((function(t,e){return u(u({},t),{},s({},e,""))}),{});j(t)}else g(""),j({}),O(!1)}),[n]);var M=c.length>0||Object.values(d).flat().length>0,T=!M&&!C;return f(A,{blockScrollOnMount:!1,isOpen:n,onClose:r,scrollBehavior:"inside",children:[p(B,{}),f(H,{children:[p(R,{children:i("Submit templates")}),p(U,{}),M&&p(Et,{companyErrors:c,templateErrors:d,onClose:r}),T&&p(St,{justification:y,majorUpdateJustifications:w,onJustificationChange:g,onMajorUpdateJustificationChange:function(t,e){return j((function(n){return u(u({},n),{},s({},t,e))}))},onNext:function(){return O(!0)}}),!M&&C&&p(kt,{companyName:z,companyBlock:P,templateBlocks:N,justification:y,majorUpdateJustifications:w,onPrev:function(){return O(!1)},onClose:r})]})]})}var Pt={px:2,pt:2,width:{base:"100%",md:520},"& > div:first-of-type":{flexDirection:"column",flex:1,overflowY:"auto"},"& > div:nth-of-type(2)":{my:2}}}}}))}();
