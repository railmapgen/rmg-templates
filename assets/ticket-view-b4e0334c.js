import{u as S,S as K,L as Q,j as d,M as X,a as t,H as I,N as Z,w as B,O as x,Q as ie,U as oe,i as se,V as F,W as re,X as ee,x as _,y as C,Y as T,Z as V,_ as G,$ as A,a0 as O,a1 as W,a2 as le,a3 as ce,a4 as de,c as j,a5 as me,a6 as ue,a7 as he,a8 as pe,a9 as fe,t as ge,K as ve,r as J}from"./vendor-53f1dbd3.js";import{a as D,u as k,b as ye,c as Ce,d as be,e as we,f as Me,g as Se,h as je,r as xe,i as Le,j as Ee,t as N,k as Ne}from"./index-e3cabd5d.js";import{u as $,a as te,I as q,G as ze,E as Te}from"./use-templates-154acd22.js";function Oe(){const{t:e,i18n:a}=S(),n=$(),s=D(),{companyConfig:o}=k(l=>l.app),{company:m,newCompany:c,companyName:r}=k(l=>l.ticket),i={...o.map(l=>[l.id,n(l.name)]).sort((l,f)=>l[1].localeCompare(f[1],a.languages[0])).reduce((l,f)=>({...l,[f[0]]:f[1]}),{"":e("Please select...")}),new:e("Add a company...")},u=[{type:"select",label:e("Company"),value:m,options:i,disabledOptions:[""],onChange:l=>s(ye(l))},{type:"input",label:e("Company code"),placeholder:"e.g. mtr, gzmtr, shmetro",value:c,onChange:l=>s(Ce(l)),hidden:m!=="new"}],p=K.map(l=>({type:"input",label:n(Q[l]),value:r[l],onChange:f=>s(be({lang:l,name:f}))}));return d(X,{as:"section",children:[t(I,{as:"h5",size:"sm",mb:2,children:e("Railway company")}),d(Z,{direction:"column",children:[t(B,{fields:u}),m==="new"&&t(B,{fields:p})]})]})}const ke=e=>new Promise(a=>{const n=new FileReader;n.onloadend=()=>a(n.result),n.readAsText(e)});var ae={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Y=x.createContext&&x.createContext(ae),M=globalThis&&globalThis.__assign||function(){return M=Object.assign||function(e){for(var a,n=1,s=arguments.length;n<s;n++){a=arguments[n];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},M.apply(this,arguments)},Ie=globalThis&&globalThis.__rest||function(e,a){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&a.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(e);o<s.length;o++)a.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(n[s[o]]=e[s[o]]);return n};function ne(e){return e&&e.map(function(a,n){return x.createElement(a.tag,M({key:n},a.attr),ne(a.child))})}function L(e){return function(a){return x.createElement(Be,M({attr:M({},e.attr)},a),ne(e.child))}}function Be(e){var a=function(n){var s=e.attr,o=e.size,m=e.title,c=Ie(e,["attr","size","title"]),r=o||n.size||"1em",i;return n.className&&(i=n.className),e.className&&(i=(i?i+" ":"")+e.className),x.createElement("svg",M({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,c,{className:i,style:M(M({color:e.color||n.color},n.style),e.style),height:r,width:r,xmlns:"http://www.w3.org/2000/svg"}),m&&x.createElement("title",null,m),e.children)};return Y!==void 0?x.createElement(Y.Consumer,null,function(n){return a(n)}):a(ae)}function Re(e){return L({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}}]})(e)}function He(e){return L({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}}]})(e)}function Pe(e){return L({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}}]})(e)}function Ue(e){return L({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}}]})(e)}function Ae(e){return L({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}}]})(e)}function Je(e){return L({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}}]})(e)}function Fe(e){return L({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(e)}function _e(e){const{company:a,templateEntry:n,onLineChange:s,onNewLineChange:o,onMajorFlagChange:m,onLineNameChange:c,onParamChange:r,onRemove:i}=e,{line:u,newLine:p,majorUpdate:l,templateName:f}=n,{t:g}=S(),b=$(),{templates:z}=te(a),w=async h=>{var y;const v=(y=h.target.files)==null?void 0:y[0];if(console.log("handleFileUpload():: received file",v),!!v){if(v.type!=="application/json"){alert("Invalid file type!"),h.target.value="";return}try{const E=await ke(v);r(JSON.parse(E))}catch(E){alert("Invalid file!"),h.target.value=""}}},R={"":g("Please select..."),...a===""||a==="new"?{}:z.reduce((h,v)=>({...h,[v.filename]:b(v.name)}),{}),new:g("Add a line...")},H=[{type:"select",label:g("Line"),value:u,options:R,disabledOptions:[""],onChange:h=>s(h),minW:150},{type:"custom",label:g("Configuration file"),component:t(ie,{variant:"flushed",size:"xs",type:"file",accept:".json",onChange:w}),minW:250},{type:"input",label:g("Line code"),placeholder:"e.g. twl, gz1, sh1",value:p,onChange:h=>o(h),hidden:u!=="new"},{type:"switch",label:g("Major update"),isChecked:l,onChange:h=>m(h),hidden:u==="new",oneLine:!0}],P=K.map(h=>({type:"input",label:b(Q[h]),value:f[h],onChange:v=>c(h,v),minW:h==="en"?260:void 0}));return d(Z,{position:"relative",direction:"column",children:[t(oe,{size:"sm",variant:"ghost",icon:t(Fe,{}),"aria-label":g("Remove this line"),title:g("Remove this line"),position:"absolute",top:0,right:0,zIndex:5,onClick:i}),t(B,{fields:[...H,...P],minW:110})]})}function Ve(){const{t:e}=S(),a=D(),{company:n,templates:s}=k(r=>r.ticket),{templates:o,isLoading:m}=te(n),c=(r,i)=>{const u=o.find(p=>p.filename===i);a(Ee({id:r,line:i,name:u==null?void 0:u.name}))};return d(X,{as:"section",mt:3,position:"relative",children:[m&&t(se,{isIndeterminate:!0}),d(F,{children:[t(I,{as:"h5",size:"sm",mb:2,children:e("Add or update templates")}),t(re,{hasArrow:!0,label:e("Toggling on 'Major update' will update the uploader field of the template and you are required enter extra justification for it."),children:t("span",{children:t(ee,{as:Re,ml:1})})})]}),s.map(r=>t(_e,{company:n,templateEntry:r,onLineChange:i=>c(r.id,i),onNewLineChange:i=>a(we({id:r.id,newLine:i})),onMajorFlagChange:i=>a(Me({id:r.id,majorUpdate:i})),onLineNameChange:(i,u)=>a(Se({id:r.id,lang:i,name:u})),onParamChange:i=>a(je({id:r.id,param:i})),onRemove:()=>a(xe(r.id))},r.id)),t(_,{justifyContent:"flex-end",children:t(C,{variant:"ghost",size:"sm",leftIcon:t(Pe,{}),onClick:()=>a(Le()),children:e("Add item")})})]})}function Ge(e){const{companyErrors:a,templateErrors:n,onClose:s}=e,{t:o}=S(),m=$();return d(T,{children:[d(V,{children:[t(G,{children:o("Your inputs contain the following errors. Please fix it before submitting.")}),a.length>0&&d(T,{children:[t(I,{as:"h5",size:"sm",my:2,children:o("Railway company")}),t(A,{"aria-label":"List of company errors",children:a.map((c,r)=>t(O,{children:m(q[c])},r))})]}),Object.values(n).flat().length>0&&d(T,{children:[t(I,{as:"h5",size:"sm",my:2,children:o("Templates")}),t(A,{"aria-label":"List of template errors",children:Object.entries(n).map(([c,r])=>d(O,{children:[c,t(A,{children:r.map((i,u)=>t(O,{children:m(q[i])},u))})]},c))})]})]}),t(W,{children:t(_,{children:t(C,{colorScheme:"primary",onClick:s,children:o("Go back")})})})]})}function We(e){const{justification:a,majorUpdateJustifications:n,onJustificationChange:s,onMajorUpdateJustificationChange:o,onNext:m}=e,{t:c}=S(),r=[{type:"textarea",value:a,label:c("Justification"),placeholder:c("Briefly describe your changes and provide justification"),onChange:s}],i=Object.entries(n).map(([p,l])=>({type:"textarea",value:l,label:c("Justification for major update of")+" "+p,placeholder:c("Briefly describe your changes and provide justification"),onChange:f=>o(p,f)})),u=!a||Object.values(n).some(p=>!p);return d(T,{children:[d(V,{children:[t(G,{children:c("Please provide suitable source and justification.")}),t(B,{fields:[...r,...i],minW:"full"})]}),t(W,{children:t(C,{colorScheme:"primary",onClick:m,rightIcon:t(Je,{}),isDisabled:u,children:c("Next")})})]})}function De(e){var g;const{companyName:a,companyBlock:n,templateBlocks:s,justification:o,majorUpdateJustifications:m,onPrev:c,onClose:r}=e,{t:i}=S(),u=le("primary.500","primary.300"),p=[`**Justification:** ${o||"(REPLACE ME)"}`,Object.entries(m).map(([b,z])=>`- Major update of ${b}: ${z}`).join(`
`),ze,(g=n==null?void 0:n.outerHTML)!=null?g:"",...s.map(b=>b.outerHTML)].join(`

`),l=new URLSearchParams({template:"new-templates-request.md",label:"resources",title:"Resources: New templates of "+a}),f=async()=>{await navigator.clipboard.writeText(p)};return d(T,{children:[d(V,{children:[t(G,{children:i("Follow the instructions below to open an Issue")+":"}),d(ce,{children:[d(O,{children:[i("Open")," ",d(de,{color:u,href:"https://github.com/railmapgen/rmg-templates/issues/new?"+l.toString(),isExternal:!0,children:["Issue: New Templates Request ",t(ee,{as:He})]})]}),d(O,{children:[i("Click copy button and paste into issue body")," ",t(C,{size:"xs",leftIcon:t(Ue,{}),onClick:f,children:i("Copy")})]})]})]}),d(W,{children:[t(C,{variant:"ghost",onClick:c,mr:"auto",leftIcon:t(Ae,{}),children:i("Previous")}),t(C,{colorScheme:"primary",onClick:r,children:i("Close")})]})]})}function $e(e){const{isOpen:a,onClose:n}=e,{t:s}=S(),[o,m]=j.useState([]),[c,r]=j.useState({}),[i,u]=j.useState(""),[p,l]=j.useState({}),[f,g]=j.useState(!1),{companyConfig:b,templateList:z}=k(y=>y.app),w=k(y=>y.ticket),R=N.getCompanyEnglishName(w,b),H=N.getCompanyBlock(w),P=N.getTemplateBlocks(w);j.useEffect(()=>{if(a){m(N.getCompanyErrors(w)),r(N.getTemplateErrors(w));const y=N.getMajorUpdateNames(w,z).reduce((E,U)=>({...E,[U]:""}),{});l(y)}else u(""),l({}),g(!1)},[a]);const h=o.length>0||Object.values(c).flat().length>0,v=!h&&!f;return d(me,{blockScrollOnMount:!1,isOpen:a,onClose:n,scrollBehavior:"inside",children:[t(ue,{}),d(he,{children:[t(pe,{children:s("Submit templates")}),t(fe,{}),h&&t(Ge,{companyErrors:o,templateErrors:c,onClose:n}),v&&t(We,{justification:i,majorUpdateJustifications:p,onJustificationChange:u,onMajorUpdateJustificationChange:(y,E)=>l(U=>({...U,[y]:E})),onNext:()=>g(!0)}),!h&&f&&t(De,{companyName:R,companyBlock:H,templateBlocks:P,justification:i,majorUpdateJustifications:p,onPrev:()=>g(!1),onClose:n})]})]})}const qe={px:2,pt:2,width:{base:"100%",md:520},"& > div:first-of-type":{flexDirection:"column",flex:1,overflowY:"auto"},"& > div:nth-of-type(2)":{my:2}};function Xe(){const{t:e}=S(),a=ge(),n=D(),[s,o]=j.useState(!1),m=()=>{J.isStandaloneWindow()?a("/"):J.openApp("rmg-templates")},c=()=>{n(Ne()),J.event(Te.RESET_TICKETS,{})};return d(ve,{sx:qe,children:[d(F,{children:[t(Oe,{}),t(Ve,{})]}),d(F,{children:[t(C,{size:"sm",onClick:m,children:e("Back to list")}),d(_,{ml:"auto",children:[t(C,{size:"sm",variant:"outline",onClick:c,children:e("Reset")}),t(C,{size:"sm",colorScheme:"primary",onClick:()=>o(!0),children:e("Submit")})]})]}),t($e,{isOpen:s,onClose:()=>o(!1)})]})}export{Xe as default};