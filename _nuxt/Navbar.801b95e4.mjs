import{s as se,v as y,u as F,A as le,I as ie,b as ue,a0 as ce,a1 as fe,p as I,w as k,a2 as de,a3 as pe,y as ve,o as D,D as A,L as d,Z as _e}from"./entry.7ce276e3.mjs";/* empty css                                                */var Q;const X=typeof window<"u",me=e=>typeof e=="function",ye=e=>typeof e=="string",L=()=>{};X&&((Q=window==null?void 0:window.navigator)==null?void 0:Q.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function N(e){return typeof e=="function"?e():F(e)}function ge(e,t){function r(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return r}const Y=e=>e();function Oe(e=Y){const t=y(!0);function r(){t.value=!1}function n(){t.value=!0}return{isActive:t,pause:r,resume:n,eventFilter:(...o)=>{t.value&&e(...o)}}}function he(e){return e}function ee(e){return ce()?(fe(e),!0):!1}function we(e){return typeof e=="function"?I(e):y(e)}function te(e,t=!0){le()?ie(e):t?e():ue(e)}function be(e=!1,t={}){const{truthyValue:r=!0,falsyValue:n=!1}=t,a=se(e),o=y(e);function i(l){if(arguments.length)return o.value=l,o.value;{const u=N(r);return o.value=o.value===u?N(n):u,o.value}}return a?i:[o,i]}var R=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,$e=(e,t)=>{var r={};for(var n in e)Pe.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&R)for(var n of R(e))t.indexOf(n)<0&&Se.call(e,n)&&(r[n]=e[n]);return r};function xe(e,t,r={}){const n=r,{eventFilter:a=Y}=n,o=$e(n,["eventFilter"]);return k(e,ge(a,t),o)}var je=Object.defineProperty,Ee=Object.defineProperties,Ie=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,V=(e,t,r)=>t in e?je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ke=(e,t)=>{for(var r in t||(t={}))re.call(t,r)&&V(e,r,t[r]);if(C)for(var r of C(t))ne.call(t,r)&&V(e,r,t[r]);return e},Ne=(e,t)=>Ee(e,Ie(t)),Ce=(e,t)=>{var r={};for(var n in e)re.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&C)for(var n of C(e))t.indexOf(n)<0&&ne.call(e,n)&&(r[n]=e[n]);return r};function De(e,t,r={}){const n=r,{eventFilter:a}=n,o=Ce(n,["eventFilter"]),{eventFilter:i,pause:l,resume:u,isActive:c}=Oe(a);return{stop:xe(e,t,Ne(ke({},o),{eventFilter:i})),pause:l,resume:u,isActive:c}}function Ae(e){var t;const r=N(e);return(t=r==null?void 0:r.$el)!=null?t:r}const b=X?window:void 0;function Le(...e){let t,r,n,a;if(ye(e[0])?([r,n,a]=e,t=b):[t,r,n,a]=e,!t)return L;let o=L;const i=k(()=>Ae(t),u=>{o(),u&&(u.addEventListener(r,n,a),o=()=>{u.removeEventListener(r,n,a),o=L})},{immediate:!0,flush:"post"}),l=()=>{i(),o()};return ee(l),l}function Fe(e,t=!1){const r=y(),n=()=>r.value=Boolean(e());return n(),te(n,t),r}function Me(e,t={}){const{window:r=b}=t,n=Fe(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const o=y(!1),i=()=>{!a||("removeEventListener"in a?a.removeEventListener("change",l):a.removeListener(l))},l=()=>{!n.value||(i(),a=r.matchMedia(we(e).value),o.value=a.matches,"addEventListener"in a?a.addEventListener("change",l):a.addListener(l))};return de(l),ee(()=>i()),o}const M=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T="__vueuse_ssr_handlers__";M[T]=M[T]||{};const Te=M[T];function ae(e,t){return Te[e]||t}function Qe(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var Re=Object.defineProperty,B=Object.getOwnPropertySymbols,Ve=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable,W=(e,t,r)=>t in e?Re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,H=(e,t)=>{for(var r in t||(t={}))Ve.call(t,r)&&W(e,r,t[r]);if(B)for(var r of B(t))Be.call(t,r)&&W(e,r,t[r]);return e};const We={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function He(e,t,r,n={}){var a;const{flush:o="pre",deep:i=!0,listenToStorageChanges:l=!0,writeDefaults:u=!0,mergeDefaults:c=!1,shallow:P,window:x=b,eventFilter:S,onError:g=s=>{console.error(s)}}=n,p=(P?pe:y)(t);if(!r)try{r=ae("getDefaultStorage",()=>{var s;return(s=b)==null?void 0:s.localStorage})()}catch(s){g(s)}if(!r)return p;const _=N(t),$=Qe(_),m=(a=n.serializer)!=null?a:We[$],{pause:f,resume:O}=De(p,()=>h(p.value),{flush:o,deep:i,eventFilter:S});return x&&l&&Le(x,"storage",j),j(),p;function h(s){try{s==null?r.removeItem(e):r.setItem(e,m.write(s))}catch(v){g(v)}}function w(s){if(!(s&&s.key!==e)){f();try{const v=s?s.newValue:r.getItem(e);if(v==null)return u&&_!==null&&r.setItem(e,m.write(_)),_;if(!s&&c){const E=m.read(v);return me(c)?c(E,_):$==="object"&&!Array.isArray(E)?H(H({},_),E):E}else return typeof v!="string"?v:m.read(v)}catch(v){g(v)}finally{O()}}}function j(s){s&&s.key!==e||(p.value=w(s))}}function oe(e){return Me("(prefers-color-scheme: dark)",e)}var Je=Object.defineProperty,J=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable,z=(e,t,r)=>t in e?Je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ge=(e,t)=>{for(var r in t||(t={}))ze.call(t,r)&&z(e,r,t[r]);if(J)for(var r of J(t))Ue.call(t,r)&&z(e,r,t[r]);return e};function Ke(e={}){const{selector:t="html",attribute:r="class",initialValue:n="auto",window:a=b,storage:o,storageKey:i="vueuse-color-scheme",listenToStorageChanges:l=!0,storageRef:u,emitAuto:c}=e,P=Ge({auto:"",light:"light",dark:"dark"},e.modes||{}),x=oe({window:a}),S=I(()=>x.value?"dark":"light"),g=u||(i==null?y(n):He(i,n,o,{window:a,listenToStorageChanges:l})),p=I({get(){return g.value==="auto"&&!c?S.value:g.value},set(f){g.value=f}}),_=ae("updateHTMLAttrs",(f,O,h)=>{const w=a==null?void 0:a.document.querySelector(f);if(!!w)if(O==="class"){const j=h.split(/\s/g);Object.values(P).flatMap(s=>(s||"").split(/\s/g)).filter(Boolean).forEach(s=>{j.includes(s)?w.classList.add(s):w.classList.remove(s)})}else w.setAttribute(O,h)});function $(f){var O;const h=f==="auto"?S.value:f;_(t,r,(O=P[h])!=null?O:h)}function m(f){e.onChanged?e.onChanged(f,$):$(f)}return k(p,m,{flush:"post",immediate:!0}),c&&k(S,()=>m(p.value),{flush:"post"}),te(()=>m(p.value)),p}var qe=Object.defineProperty,Ze=Object.defineProperties,Xe=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,Ye=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable,G=(e,t,r)=>t in e?qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,tt=(e,t)=>{for(var r in t||(t={}))Ye.call(t,r)&&G(e,r,t[r]);if(U)for(var r of U(t))et.call(t,r)&&G(e,r,t[r]);return e},rt=(e,t)=>Ze(e,Xe(t));function nt(e={}){const{valueDark:t="dark",valueLight:r="",window:n=b}=e,a=Ke(rt(tt({},e),{onChanged:(l,u)=>{var c;e.onChanged?(c=e.onChanged)==null||c.call(e,l==="dark"):u(l)},modes:{dark:t,light:r}})),o=oe({window:n});return I({get(){return a.value==="dark"},set(l){l===o.value?a.value="auto":a.value=l?"dark":"light"}})}var K;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(K||(K={}));var at=Object.defineProperty,q=Object.getOwnPropertySymbols,ot=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable,Z=(e,t,r)=>t in e?at(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,lt=(e,t)=>{for(var r in t||(t={}))ot.call(t,r)&&Z(e,r,t[r]);if(q)for(var r of q(t))st.call(t,r)&&Z(e,r,t[r]);return e};const it={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};lt({linear:he},it);const ut={class:"container py-3 md:py-0 max-w-3xl mx-auto flex flex-row items-center justify-between px-5 lg:px-0"},ct=d("a",{title:"Home",class:"text-xl md:text-2xl font-bold no-underline dark:text-green-500",href:"/"},"ELAINA",-1),ft={class:"text-xs md:text-base flex list-none"},dt=d("li",null,[d("a",{title:"About Us",class:"px-2 md:px-4 block py-2 md:py-4 font-bold no-underline dark:text-green-500",href:"/about"},"About")],-1),pt=d("li",null,[d("a",{title:"Project & Client",class:"px-2 md:px-4 block py-2 md:py-4 font-bold no-underline dark:text-green-500",href:"/client"},"Client")],-1),vt=d("li",null,[d("a",{title:"Hire me",class:"px-2 md:px-4 block py-2 md:py-4 font-bold no-underline dark:text-green-500",href:"/contact"},"Contact")],-1),_t={key:0,class:"i-mdi-weather-night align-middle mt-1"},mt={key:1,class:"i-mdi-white-balance-sunny align-middle mt-1 text-yellow-500"},Ot={__name:"Navbar",setup(e){const t=y(!0);ve(()=>{document.body.clientWidth<768&&(t.value=!1)});const r=nt({selector:"body",attribute:"class",valueDark:"dark",valueLight:"light"}),n=be(r);return(a,o)=>(D(),A("nav",null,[d("div",ut,[ct,d("ul",ft,[dt,pt,vt,d("li",null,[d("a",{href:"#",class:"px-2 md:px-4 block py-2 md:py-4 font-bold no-underline",onClick:o[0]||(o[0]=_e(i=>F(n)(),["prevent"]))},[F(r)==!1?(D(),A("div",_t)):(D(),A("div",mt))])])])])]))}};export{Ot as default};
