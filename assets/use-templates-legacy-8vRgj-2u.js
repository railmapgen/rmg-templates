System.register(["./chakra-legacy-DD_EbsbY.js","./react-legacy-MOpOoUDF.js","./index-legacy-rli3tLDc.js"],(function(e,n){"use strict";var a,t,i,r,l,s,o,u,c,d,p,h,m,f,g;return{setters:[e=>{a=e.u,t=e.j,i=e.c,r=e.e,l=e.ac},e=>{s=e.r,o=e.u},e=>{u=e.A,c=e.B,d=e.C,p=e.D,h=e.F,m=e.u,f=e.d,g=e.H}],execute:function(){e({R:function(e){var a=e.fields,i=e.noLabel,o=e.minW;return t.jsx(r,{wrap:"wrap",children:a.map((function(e,a){if(e.hidden)return t.jsx(s.Fragment,{},a);var r=e.minW||o,m="full"===r;return t.jsx(u,{className:m?"mw-full":"",label:e.label,flex:m?void 0:1,minW:m?void 0:r,noLabel:i,oneLine:e.oneLine,children:function(e){switch(e.type){case"input":return t.jsx(h,{placeholder:e.placeholder,defaultValue:e.value,type:e.variant,validator:e.validator,onDebouncedChange:e.onChange,delay:e.debouncedDelay,optionList:e.optionList,isDisabled:e.isDisabled});case"output":return t.jsx(n,{noWrap:!0,children:e.value});case"textarea":return t.jsx(p,{placeholder:e.placeholder,defaultValue:e.value,onDebouncedChange:e.onChange,isDisabled:e.isDisabled});case"slider":return t.jsx(d,{defaultValue:e.value,min:e.min,max:e.max,step:e.step,onThrottledChange:e.onChange,leftIcon:e.leftIcon,rightIcon:e.rightIcon,isDisabled:e.isDisabled});case"select":return t.jsx(c,{defaultValue:e.value,onChange:function(n){var a,t=n.target.value;return null===(a=e.onChange)||void 0===a?void 0:a.call(e,"number"==typeof e.value?Number(t):t.toString())},options:e.options,disabledOptions:e.disabledOptions,isInvalid:e.isInvalid,isDisabled:e.isDisabled});case"switch":return t.jsx(l,{isChecked:e.isChecked,isDisabled:e.isDisabled,onChange:function(n){var a,t=n.target.checked;return null===(a=e.onChange)||void 0===a?void 0:a.call(e,t)}});case"custom":return e.component;default:return t.jsx("div",{})}}(e)},a)}))})},a:function(){const{t:e,i18n:n}=o(),a=v(),{coreCompanyConfig:t,otherCompanyConfig:i}=m((e=>e.app)),r=t.map((e=>[e.id,a(e.name)])).reduce(((e,n)=>({...e,[n[0]]:n[1]})),{"":e("Please select...")}),l=i.map((e=>[e.id,a(e.name)])).sort(((e,a)=>e[1].localeCompare(a[1],n.languages[0]))).reduce(((e,n)=>({...e,[n[0]]:n[1]})),{});return{[e("Core companies")]:r,[e("Other companies")]:l}},b:function(e){const n=f(),{templateList:a}=m((e=>e.app)),[t,i]=s.useState([]),[r,l]=s.useState(!1);return s.useEffect((()=>{e&&"new"!==e?e in a?i(a[e]):(l(!0),fetch("/rmg-templates/resources/templates/"+e+"/00config.json").then((e=>e.json())).then((a=>{i(a),n(g({company:e,templates:a}))})).finally((()=>l(!1)))):i([])}),[e]),{templates:t,isLoading:r}},u:v});var n=function(e){var n=e.children,r=e.noWrap,l=a("RmgOutput",{noWrap:r});return t.jsx(i.output,{sx:l,children:n})};function v(){const{i18n:e}=o();return n=>{var a,t;return null!==(a=null!==(t=e.languages.map((e=>n[e])).find((e=>void 0!==e)))&&void 0!==t?t:n.en)&&void 0!==a?a:"(Translation Error)"}}}}}));