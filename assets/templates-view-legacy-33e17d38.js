!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}System.register(["./chakra-legacy-9aec1c6b.js","./index-legacy-7f897ed4.js","./use-templates-legacy-0972d734.js","./react-legacy-342a61a3.js"],(function(e,t){"use strict";var o,i,c,s,u,l,a,p,f,m,y,d,b,j,h,g,v,x,O,w,S,P,C;return{setters:[function(e){o=e.j,i=e.X,c=e.r,s=e.F,u=e.p,l=e.Y,a=e.W,p=e.Z,f=e._,m=e.$},function(e){y=e.u,d=e.a,b=e.s,j=e.R,h=e.b,g=e.r,v=e.c,x=e.d},function(e){O=e.u,w=e.E,S=e.a},function(e){P=e.u,C=e.k}],execute:function(){function t(){var e=P(),t=e.t,s=e.i18n,u=O(),l=y(),a=C(),p=d((function(e){return e.app})),f=p.companyConfig,m=p.selectedCompany,v=f.map((function(e){return[e.id,u(e.name)]})).sort((function(e,t){return e[1].localeCompare(t[1],s.languages[0])})).reduce((function(e,t){return n(n({},e),{},r({},t[0],t[1]))}),{"":t("Please select...")}),x=[{type:"select",label:t("Company"),value:m,options:v,disabledOptions:[""],onChange:function(e){return l(b(e))}}];return o.jsxs(j,{children:[o.jsx(h,{fields:x}),o.jsx(i,{ml:"auto",children:o.jsx(c,{variant:"solid",size:"sm",colorScheme:"primary",onClick:function(){g.isStandaloneWindow()?a("/new"):g.openApp("rmg-templates-upload"),g.event(w.UPLOAD_TEMPLATES,{})},children:t("Upload templates")})})]})}e("default",(function(){return o.jsxs(x,{children:[o.jsx(t,{}),o.jsx(D,{})]})}));var k={flexDirection:"column",p:2,"& h2":{mb:2}};function D(){var e=P().t,t=O(),n=d((function(e){return e.app})).selectedCompany,r=S(n).templates;return r.length?o.jsx(l,{minChildWidth:220,spacing:2,maxH:"100%",overflowY:"scroll",children:r.map((function(n){return o.jsxs(v,{sx:k,children:[o.jsx(a,{as:"h2",size:"md",children:t(n.name)}),o.jsxs(u,{fontSize:"sm",children:[e("Uploader"),": ",o.jsxs(p,{size:"sm",borderRadius:"full",onClick:function(){return window.open("https://github.com/railmapgen/rmg-templates/issues?q=is:issue+author:".concat(n.uploadBy),"_blank")},cursor:"pointer",children:[o.jsx(f,{src:"https://github.com/".concat(n.uploadBy,".png"),size:"xs",ml:-1,mr:2}),o.jsx(m,{children:n.uploadBy})]})]})]},n.filename)}))}):o.jsx(s,{h:"100%",w:"100%",alignItems:"center",justifyContent:"center",children:o.jsx(u,{as:"i",children:"No templates available in selected company."})})}}}}))}();
