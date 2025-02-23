import{j as e,B as g,o as Y,F as re,p as W,G as b,S as ae,q as E,s as Z,t as ce,u as de,v as X,w as K,T as L,x as T,C as pe,y as me,N as se,l as y,z as ue,r as q,E as he,L as xe,H as j,I as H,J as ge,K as je,O as fe,P as Ce,Q as be,U as ve,V as ye,W as B,X as Se,e as Ne,h as Te,D as Ie,f as Oe}from"./mantine-BbW9TwCE.js";import{L as F,S as J,a as Q,u as D,b as we,c as Re,d as ke,e as Ee,r as Le,f as ee,g as Ae,h as Me,i as _e,j as Pe,k as ze,I as te,R as ne,G as Be,t as k,l as Ue,E as Fe}from"./index-Cz6wt06v.js";import{u as A,a as Je,b as oe}from"./use-templates-BzF9oRiX.js";import{u as v,r as C}from"./react-DOMpNlHD.js";function ie(s){const{optionalName:t,onChange:n}=s,{t:i}=v(),o=A(),m=Object.entries(F).map(([a,l])=>({value:a,label:o(l),disabled:J.includes(a)||t.some(p=>p[0]===a)})),c=()=>{const a=Object.keys(F).filter(l=>!J.includes(l)&&!t.some(p=>p[0]===l));a.includes("ko")?n([...t,["ko",""]]):n([...t,[a[0],""]])},d=(a,l)=>{n(t.map(p=>p[0]===a?[l,p[1]]:p))},r=(a,l)=>{n(t.map(p=>p[0]===a?[p[0],l]:p))},h=a=>{n(t.filter(l=>l[0]!==a))};return t.length===0?e.jsx(g,{leftSection:e.jsx(Y,{}),onClick:c,children:i("Add a name in another language")}):e.jsx(re,{legend:i("Multi-languages"),children:t.map(([a,l],p,I)=>e.jsxs(W,{pt:4,align:"center","data-testid":"entry-card-stack-"+a,children:[e.jsxs(b,{gap:"xs",flex:1,grow:!0,children:[e.jsx(ae,{size:"xs","aria-label":i("Language"),value:a,onChange:S=>d(a,S),data:m,searchable:!0}),e.jsx(E,{size:"xs","aria-label":i("Name"),placeholder:i("Enter name"),value:l,onChange:({currentTarget:{value:S}})=>r(a,S)})]}),e.jsxs(W,{ml:8,wrap:"nowrap",children:[p===I.length-1?e.jsx(Z,{size:"sm",variant:"filled","aria-label":i("Add a name in another language"),title:i("Add a name in another language"),onClick:c,children:e.jsx(Y,{})}):e.jsx(ce,{w:22}),e.jsx(Z,{size:"sm",variant:"outline","aria-label":i("Remove this name"),title:i("Remove this name"),onClick:()=>h(a),ml:4,children:e.jsx(de,{})})]})]},p))})}function De(){const{t:s}=v(),t=A(),n=Q(),{company:i,newCompany:o,companyName:m,companyOptionalName:c}=D(r=>r.ticket),d=Je();return e.jsxs(X,{children:[e.jsx(K,{children:e.jsx(L,{order:2,size:"h4",children:s("Railway company")})}),e.jsxs(T,{py:"xs",gap:"xs",children:[e.jsxs(b,{gap:"xs",grow:!0,children:[e.jsx(ae,{label:s("Company"),value:i,onChange:r=>n(we(r)),data:[...d,{value:"new",label:s("Add a company...")}],searchable:!0}),i==="new"&&e.jsx(E,{label:s("Company code"),placeholder:"e.g. mtr, gzmtr, shmetro",value:o,onChange:({currentTarget:{value:r}})=>n(Re(r))})]}),i==="new"&&e.jsx(b,{gap:"xs",grow:!0,children:J.map(r=>e.jsx(E,{label:t(F[r]),value:m[r],onChange:({currentTarget:{value:h}})=>n(ke({lang:r,name:h}))},r))}),i==="new"&&e.jsx(ie,{optionalName:c,onChange:r=>n(Ee(r))})]})]})}const Ge="_root_2eej5_1",$e="_file_2eej5_12",V={root:Ge,"close-btn":"_close-btn_2eej5_6",file:$e},He=s=>new Promise(t=>{const n=new FileReader;n.onloadend=()=>t(n.result),n.readAsText(s)});function Ve(s){const{company:t,templateEntry:n,onLineChange:i,onNewLineChange:o,onLineNameChange:m,onOptionalNameChange:c,onParamChange:d,onParamImport:r,onRemove:h}=s,{line:a,newLine:l,templateName:p,optionalName:I,param:S}=n,{t:x}=v(),M=A(),{templates:G}=oe(t),_=C.useRef(null),P=async u=>{var f;const N=(f=u.target.files)==null?void 0:f[0];if(console.log("handleFileUpload():: received file",N),!!N){if(N.type!=="application/json"){alert("Invalid file type!"),u.target.value="";return}try{const R=await He(N);d(JSON.parse(R))}catch(R){alert("Invalid file!"),u.target.value=""}}},z=[{value:"",label:x("Please select..."),disabled:!0},...t===""||t==="new"?[]:G.map(u=>({value:u.filename,label:M(u.name)})),{value:"new",label:x("Add a line...")}];return e.jsxs(pe,{withBorder:!0,className:V.root,children:[e.jsx(me,{className:V["close-btn"],"aria-label":x("Remove this line"),title:x("Remove this line"),onClick:h}),e.jsxs(T,{gap:"xs",children:[e.jsxs(b,{gap:"xs",grow:!0,children:[e.jsx(se,{label:x("Line"),value:a,onChange:({currentTarget:{value:u}})=>i(u),data:z}),a==="new"&&e.jsx(E,{label:x("Line code"),placeholder:"e.g. twl, gz1, sh1",value:l,onChange:({currentTarget:{value:u}})=>o(u)})]}),e.jsx(b,{gap:"xs",align:"center",justify:"center",className:V.file,children:S?e.jsxs(e.Fragment,{children:[e.jsx(y,{style:{fontSize:32},children:e.jsx(ue,{})}),e.jsxs(y,{component:"span",fs:"italic",size:"xs",children:["(",JSON.stringify(S).length," ",x("chars"),")"]}),e.jsx(g,{variant:"default",size:"xs",onClick:()=>d(void 0),children:x("Remove")})]}):e.jsxs(e.Fragment,{children:[e.jsx(y,{component:"span",fs:"italic",size:"sm",children:x("Import from")}),e.jsx(g,{variant:"light",size:"xs",onClick:r,children:"RMG"}),e.jsx(g,{variant:"light",size:"xs",onClick:()=>{var u;return(u=_.current)==null?void 0:u.click()},children:x("Local")}),e.jsx("input",{ref:_,type:"file",accept:".json",onChange:P})]})}),e.jsx(b,{gap:"xs",grow:!0,children:J.map(u=>e.jsx(E,{label:M(F[u]),value:p[u],onChange:({currentTarget:{value:N}})=>m(u,N)},u))}),e.jsx(ie,{optionalName:I,onChange:c})]})]})}const Ye="rmg-bridge--";function qe(s){const{templateId:t,onClose:n,onImport:i}=s,[o]=C.useState(crypto.randomUUID()),m="/rmg/#/import?"+new URLSearchParams({parentComponent:q.getAppName(),parentId:o});return C.useEffect(()=>{const c=new BroadcastChannel(Ye+o);return c.onmessage=d=>{const{event:r,data:h}=d.data;console.log("[rmg-templates] Received event from RMG app clip:",r),r==="CLOSE"?n():r==="IMPORT"&&i(h)},()=>{c.close()}},[t]),e.jsx(he,{opened:!!t,onClose:n,styles:{content:{height:500}},children:e.jsx("iframe",{src:m,loading:"lazy"})})}function Xe(){const{t:s}=v(),t=Q(),{company:n,templates:i}=D(a=>a.ticket),{templates:o,isLoading:m}=oe(n),[c,d]=C.useState(),r=(a,l)=>{const p=o.find(I=>I.filename===l);t(ze({id:a,line:l,name:p==null?void 0:p.name}))},h=a=>{c&&t(ee({id:c,param:a})),d(void 0)};return e.jsxs(X,{children:[e.jsx(xe,{visible:m}),e.jsx(K,{children:e.jsx(L,{order:2,size:"h4",children:s("Add or update templates")})}),e.jsxs(T,{py:4,gap:"xs",children:[i.map(a=>e.jsx(Ve,{company:n,templateEntry:a,onLineChange:l=>r(a.id,l),onNewLineChange:l=>t(_e({id:a.id,newLine:l})),onLineNameChange:(l,p)=>t(Me({id:a.id,lang:l,name:p})),onOptionalNameChange:l=>t(Ae({id:a.id,optionalName:l})),onParamChange:l=>t(ee({id:a.id,param:l})),onParamImport:()=>d(a.id),onRemove:()=>t(Le(a.id))},a.id)),e.jsx(g,{variant:"outline",size:"xs",leftSection:e.jsx(Y,{}),ml:"auto",onClick:()=>t(Pe()),children:s("Add item")})]}),e.jsx(qe,{templateId:c,onClose:()=>d(void 0),onImport:h})]})}const Ke="_content_euz2o_1",Qe="_body_euz2o_7",w={content:Ke,body:Qe,"stepper-root":"_stepper-root_euz2o_14","stepper-content":"_stepper-content_euz2o_21","step-body":"_step-body_euz2o_28"};function We(s){const{companyErrors:t,templateErrors:n,onClose:i}=s,{t:o}=v(),m=A();return e.jsxs(e.Fragment,{children:[e.jsxs(T,{gap:"xs",className:w["step-body"],children:[e.jsx(y,{children:o("Your inputs contain the following errors. Please fix it before submitting.")}),t.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(L,{order:3,size:"h5",children:o("Railway company")}),e.jsx(j,{size:"sm",withPadding:!0,"aria-label":"List of company errors",children:t.map((c,d)=>e.jsx(j.Item,{children:m(te[c])},d))})]}),Object.values(n).flat().length>0&&e.jsxs(e.Fragment,{children:[e.jsx(L,{order:3,size:"h5",children:o("Templates")}),e.jsx(j,{size:"sm",withPadding:!0,"aria-label":"List of template errors",children:Object.entries(n).map(([c,d])=>e.jsxs(j.Item,{children:[c,e.jsx(j,{size:"sm",withPadding:!0,children:d.map((r,h)=>e.jsx(j.Item,{children:m(te[r])},h))})]},c))})]})]}),e.jsx(b,{gap:"sm",pt:"xs",children:e.jsx(g,{variant:"default",ml:"auto",onClick:i,children:o("Go back")})})]})}const Ze={hasDiagramInStation:!1,isOpened:!1,soonToBeOpened:!1,source:"",link:"",comments:"",majorUpdateComments:{}},et=()=>Ze,le=s=>{const t=s.isOpened||s.soonToBeOpened;return s.hasDiagramInStation&&t},tt=s=>{const t=le(s),n=s.source==="STATION_UPLOAD_IMAGE"||s.source&&s.link,i=Object.values(s.majorUpdateComments).every(o=>!!o);return!!(t&&n&&s.comments&&i)},at=s=>{const{hasDiagramInStation:t,isOpened:n,soonToBeOpened:i,source:o,link:m,comments:c,majorUpdateComments:d}=s;return"| Item | Value |\n|---|---|\n| Route map in stations | ".concat(t?"Yes":"No"," |\n|    Opening status     | ").concat(n?"Opened":i?"To be opened":"Not yet opened"," |\n| Reference source type | ").concat(o?ne[o].en:"Not selected"," |\n|     Reference link    | ").concat(m," |\n|     Justification     | ").concat(c.replaceAll("\n","<br>")," |\n").concat(Object.entries(d).map(([r,h])=>"| Major update of ".concat(r," | ").concat(h.replaceAll("\n","<br.")," |")).join("\n"))},st=s=>{var t;return!!((t=s.match(/^https?:\/\//))!=null&&t[0])},O="true",U="false";function nt(s){const{justification:t,onJustificationUpdate:n,onNext:i}=s,{t:o}=v(),m=A(),c=[{label:o("Yes"),value:O},{label:o("No"),value:U}],d=[{value:"",label:o("Please select..."),disabled:!0},...Object.entries(ne).map(([a,l],p)=>({value:a,label:"".concat(p+1,". ").concat(m(l))}))],r=le(t),h=tt(t);return e.jsxs(e.Fragment,{children:[e.jsxs(T,{gap:"xs",className:w["step-body"],children:[e.jsx(y,{children:o("Please complete the questionnaire below.")}),e.jsxs(T,{gap:"xs",children:[e.jsx(H,{label:o("Have all of the lines been officially opened?"),data:c,value:t.isOpened?O:U,onChange:a=>n("isOpened",a===O)}),!t.isOpened&&e.jsx(H,{label:o("Are they soon to be opened? Are all of the station names finalised?"),data:c,value:t.soonToBeOpened?O:U,onChange:a=>n("soonToBeOpened",a===O)}),e.jsx(H,{label:o("Is route map (network map) displayed in the stations of these lines?"),data:c,value:t.hasDiagramInStation?O:U,onChange:a=>n("hasDiagramInStation",a===O)})]}),r?e.jsxs(e.Fragment,{children:[e.jsx(y,{children:o("Please provide suitable source and justification.")}),e.jsxs(T,{gap:"xs",children:[e.jsx(se,{label:o("Reference source"),value:t.source,onChange:({currentTarget:{value:a}})=>n("source",a),data:d}),e.jsx(E,{label:o("Reference link"),placeholder:o("Enter a valid URL, e.g.")+" https://en.wikipedia.org",value:t.link,onChange:({currentTarget:{value:a}})=>n("link",a),disabled:t.source==="STATION_UPLOAD_IMAGE",error:t.link&&!st(t.link)?o("URL is invalid"):void 0}),e.jsx(ge,{label:o("Justification"),placeholder:o("Briefly describe your changes and provide justification"),value:t.comments,onChange:({currentTarget:{value:a}})=>n("comments",a),autosize:!0,minRows:3})]})]}):e.jsx(y,{fs:"italic",children:o("Sorry. The templates uploaded do not meet our acceptance criteria.")})]}),e.jsx(b,{gap:"sm",pt:"xs",children:e.jsx(g,{ml:"auto",onClick:i,rightSection:e.jsx(je,{}),disabled:!h,children:o("Next")})})]})}function ot(s){var l;const{companyName:t,companyBlock:n,templateBlocks:i,justification:o,onPrev:m,onClose:c}=s,{t:d}=v(),r=[at(o),Be,(l=n==null?void 0:n.outerHTML)!=null?l:"",...i.map(p=>p.outerHTML)].join("\n\n"),h=new URLSearchParams({template:"new-templates-request.md",labels:"resources",title:"Resources: New templates of "+t}),a=async()=>{await navigator.clipboard.writeText(r)};return e.jsxs(e.Fragment,{children:[e.jsxs(T,{gap:"xs",className:w["step-body"],children:[e.jsx(y,{children:d("Follow the instructions below to open an Issue")+":"}),e.jsxs(j,{type:"ordered",withPadding:!0,children:[e.jsxs(j.Item,{children:[d("Open")," ",e.jsxs(fe,{href:"https://github.com/railmapgen/rmg-templates/issues/new?"+h.toString(),target:"_blank",children:["Issue: New Templates Request ",e.jsx(Ce,{})]})]}),e.jsxs(j.Item,{children:[d("Click copy button and paste into issue body")," ",e.jsx(g,{size:"xs",variant:"light",leftSection:e.jsx(be,{}),onClick:a,children:d("Copy")})]})]})]}),e.jsxs(b,{gap:"sm",pt:"xs",children:[e.jsx(g,{variant:"default",onClick:m,leftSection:e.jsx(ve,{}),children:d("Previous")}),e.jsx(g,{ml:"auto",onClick:c,children:d("Close")})]})]})}function it(s){const{isOpen:t,onClose:n}=s,{t:i}=v(),[o,m]=C.useState([]),[c,d]=C.useState({}),[r,h]=C.useState(et()),[a,l]=C.useState(!1),{coreCompanyConfig:p,otherCompanyConfig:I,templateList:S}=D(f=>f.app),x=D(f=>f.ticket),M=k.getCompanyEnglishName(x,[...p,...I]),G=k.getCompanyBlock(x),_=k.getTemplateBlocks(x),P=(f,R)=>{h($=>({...$,[f]:R}))};C.useEffect(()=>{if(t){m(k.getCompanyErrors(x)),d(k.getTemplateErrors(x));const f=k.getMajorUpdateNames(x,S).reduce((R,$)=>({...R,[$]:""}),{});P("majorUpdateComments",f)}else l(!1)},[t]);const z=o.length>0||Object.values(c).flat().length>0,u=!z&&!a,N=()=>z?0:u?1:2;return e.jsx(ye,{classNames:{content:w.content,body:w.body},opened:t,onClose:n,title:i("Submit templates"),children:e.jsxs(B,{active:N(),classNames:{root:w["stepper-root"],content:w["stepper-content"]},children:[e.jsx(B.Step,{label:i("Validate"),children:e.jsx(We,{companyErrors:o,templateErrors:c,onClose:n})}),e.jsx(B.Step,{label:i("Justify"),children:e.jsx(nt,{justification:r,onJustificationUpdate:P,onNext:()=>l(!0)})}),e.jsx(B.Step,{label:i("Submit"),children:e.jsx(ot,{companyName:M,companyBlock:G,templateBlocks:_,justification:r,onPrev:()=>l(!1),onClose:n})})]})})}function lt(){const{t:s}=v();return e.jsxs(X,{children:[e.jsx(K,{children:e.jsx(L,{order:2,size:"h4",children:s("Acceptance criteria")})}),e.jsxs(Se,{direction:"column",py:"xs",children:[e.jsx(y,{children:s("acceptanceCriteria.preamble")}),e.jsxs(j,{withPadding:!0,children:[e.jsx(j.Item,{children:s("acceptanceCriteria.item1")}),e.jsx(j.Item,{children:s("acceptanceCriteria.item2")})]})]})]})}function mt(){const{t:s}=v(),t=Q(),[n,i]=C.useState(!1),o=()=>{q.openApp({appId:"rmg-templates"})},m=()=>{t(Ue()),q.event(Fe.RESET_TICKETS,{})};return e.jsxs(Ne,{w:{base:"100%",sm:600},style:{alignSelf:"center"},children:[e.jsxs(Te,{direction:"column",px:"xs",style:{overflowY:"auto"},children:[e.jsx(lt,{}),e.jsx(De,{}),e.jsx(Xe,{})]}),e.jsx(Ie,{}),e.jsx(Oe,{children:e.jsxs(b,{flex:1,gap:"sm",children:[e.jsx(g,{variant:"default",onClick:o,children:s("Back to list")}),e.jsx(g,{variant:"default",ml:"auto",onClick:m,children:s("Reset")}),e.jsx(g,{onClick:()=>i(!0),children:s("Submit")})]})}),e.jsx(it,{isOpen:n,onClose:()=>i(!1)})]})}export{mt as default};
