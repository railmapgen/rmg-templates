import{j as t,a8 as O,a9 as $,D as w,as as D,O as j}from"./chakra-H1cJ9d84.js";import{u as M,r as d,E as u,R as b,a as V}from"./index--uegxtbd.js";import{u as k,o as z,r as o}from"./react-LOVzqORn.js";import{P as H,T as W}from"./templates-grid-d3CfmIt5.js";import{u as B}from"./use-templates-Glv5SiyH.js";const F="rmg-templates-bridge--";function K(){const{t:i}=k(),f=B(),[C]=z(),y=C.get("parentId"),r=C.get("parentComponent"),{selectedCompany:a,coreCompanyConfig:v,otherCompanyConfig:R}=M(e=>e.app),[c,m]=o.useState(),[S,g]=o.useState(!1),[_,h]=o.useState(!1),s=o.useRef();o.useEffect(()=>{var n;s.current=new BroadcastChannel(F+y),d.event(u.APP_CLIP_VIEW_OPENED,{parentComponent:r}),console.log("[".concat((n=s.current)==null?void 0:n.name,"] App clip connection established, parentComponent=").concat(r));const e=document.createElement("style");return e.textContent=".rmg-window__header{margin-left: unset;}",document.head.appendChild(e),()=>{var l;(l=s.current)==null||l.close(),document.head.removeChild(e)}},[]),o.useEffect(()=>{m(void 0)},[a]);const L=async()=>{var E,P,x,I;if(!c)return;const{filename:e,name:n}=c;console.log("[".concat((E=s.current)==null?void 0:E.name,"] Emitting IMPORT event, company=").concat(a,", template=").concat(e));const l=(x=(P=[...v,...R].find(p=>p.id===a))==null?void 0:P.name)!=null?x:{},A=f(l)+" "+f(n);try{g(!0);const N=await(await fetch("/rmg-templates/resources/templates/".concat(a,"/").concat(e,".json"))).json();(I=s.current)==null||I.postMessage({event:"IMPORT",meta:{company:a,filename:e,name:A},data:N}),d.event(u.APP_CLIP_VIEW_IMPORT,{parentComponent:r,company:a,filename:e})}catch(p){h(!0)}finally{g(!1),m(void 0)}},T=()=>{var e,n;console.log("[".concat((e=s.current)==null?void 0:e.name,"] Emitting CLOSE event")),(n=s.current)==null||n.postMessage({event:"CLOSE"}),d.event(u.APP_CLIP_VIEW_CLOSED,{parentComponent:r}),m(void 0),h(!1)};return t.jsxs(t.Fragment,{children:[t.jsxs(b,{children:[S&&t.jsx(V,{isIndeterminate:!0}),_&&t.jsxs(O,{status:"error",variant:"solid",size:"xs",pl:3,pr:1,py:1,children:[t.jsx($,{}),i("Unable to import selected template.")]}),t.jsx(H,{}),t.jsx(W,{selectedTemplate:c,onTemplateSelect:m})]}),t.jsx(w,{}),t.jsxs(D,{p:2,justifyContent:"flex-end",children:[t.jsx(j,{size:"sm",onClick:T,children:i("Close")}),t.jsx(j,{size:"sm",colorScheme:"primary",isDisabled:!c,onClick:L,children:i("Import")})]})]})}export{K as default};
