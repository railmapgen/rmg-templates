import{j as s,g as b,G as f,S as T,B as _,r as d,h as C,L as v,i as P,C as m,k as A,T as S,l as E,m as G,n as x}from"./mantine-BbW9TwCE.js";import{u as g,h as N}from"./react-DOMpNlHD.js";import{u,s as R,E as k}from"./index-Cz6wt06v.js";import{a as z,u as B,b as L}from"./use-templates-BzF9oRiX.js";function q(){const{t:r}=g(),c=N(),{selectedCompany:a}=u(t=>t.app),n=z(),i=()=>{d.openApp({appId:"rmg-templates-upload"}),d.event(k.UPLOAD_TEMPLATES,{})};return s.jsx(b,{children:s.jsxs(f,{gap:"xs",flex:1,align:"flex-end",children:[s.jsx(T,{label:r("Company"),value:a,onChange:t=>t&&c(R(t)),data:n,searchable:!0}),s.jsx(_,{variant:"filled",ml:"auto",onClick:i,children:r("Upload templates")})]})})}const O="_grid_11zxy_1",M="_card_11zxy_10",U="_selected_11zxy_15",o={grid:O,card:M,selected:U};function I(r){const{selectedTemplate:c,onTemplateSelect:a}=r,{t:n}=g(),i=B(),{selectedCompany:t}=u(l=>l.app),{templates:p}=L(t);return s.jsxs(C,{children:[s.jsx(v,{visible:!p.length,loaderProps:{children:n("No templates available in selected company.")}}),s.jsx(P,{cols:{base:1,xs:2,sm:3,md:4,lg:5,xl:6},classNames:{root:o.grid},children:p.map(l=>{const{filename:h,name:j,authors:y}=l;return s.jsxs(m,{className:A(o.card,c===l&&o.selected),withBorder:!0,onClick:()=>a==null?void 0:a(l),children:[s.jsx(m.Section,{px:"sm",py:"xs",children:s.jsx(S,{size:"h4",children:i(j)})}),s.jsx(E,{span:!0,children:n("Authors")}),s.jsx(G,{children:y.map(e=>a?s.jsx(x,{src:"https://github.com/".concat(e,".png"),alt:e,name:e,title:e,color:"initials"},e):s.jsx(x,{component:"a",href:"https://github.com/railmapgen/rmg-templates/issues?q=is:issue+author:".concat(e),target:"_blank",src:"https://github.com/".concat(e,".png"),alt:e,name:e,title:n("View all templates authored by")+" "+e,color:"initials"},e))})]},h)})})]})}export{q as P,I as T};
