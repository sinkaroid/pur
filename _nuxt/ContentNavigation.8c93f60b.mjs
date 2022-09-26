import{f,v as s,x as v,C as L,D as I,E as A,i as p,p as m,d as e,_ as r,t as D,F as R,h as V,G as g}from"./entry.f059b2a1.mjs";import{u as c}from"./asyncData.68fa2c80.mjs";import{h,j as y,u as b}from"./ContentQuery.4fb29f9c.mjs";import{w as x,u as S}from"./utils.29596f1c.mjs";/* empty css                                                */import"./ContentDoc.f8bf1b4d.mjs";import"./ContentList.65ba57a4.mjs";import"./ContentRenderer.d29003e1.mjs";import"./ContentRendererMarkdown.a87ea85d.mjs";import"./ContentSlot.42aa8e2e.mjs";import"./DocumentDrivenEmpty.46100c09.mjs";import"./DocumentDrivenNotFound.1b15ee9e.mjs";import"./Markdown.ee008b62.mjs";import"./ProseCode.0f9cdbf7.mjs";import"./client-only.f861baf7.mjs";import"./_plugin-vue_export-helper.7287ed4b.mjs";const j=t=>{let _=t;typeof(_==null?void 0:_.params)=="function"&&(_=_.params());const o=x(_?`/navigation/${h(_)}.json`:"/navigation");return $fetch(o,{method:"GET",responseType:"json",params:{_params:y(_||{}),previewToken:b("previewToken").value}})};const C=f({emits:{error(t){return!0}},setup(t,{slots:_,emit:o}){const a=s(null),n=v();return L(i=>{if(!n.isHydrating)return o("error",i),a.value=i,!1}),()=>{var i,u;return a.value?(i=_.error)==null?void 0:i.call(_,{error:a}):(u=_.default)==null?void 0:u.call(_)}}}),$=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),w=f({name:"ServerPlaceholder",render(){return I("div")}}),N=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),B=f({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t){const _=k({duration:t.duration,throttle:t.throttle}),o=v();return o.hook("page:start",_.start),o.hook("page:finish",_.finish),A(()=>_.clear),()=>p("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${_.progress.value}%`,height:`${t.height}px`,opacity:_.isLoading.value?1:0,background:t.color,backgroundSize:`${100/_.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}})}});function k(t){const _=s(0),o=s(!1),a=m(()=>1e4/t.duration);let n=null,i=null;function u(){d(),_.value=0,o.value=!0,t.throttle?i=setTimeout(E,t.throttle):E()}function l(){_.value=100,T()}function d(){clearInterval(n),clearTimeout(i),n=null,i=null}function P(O){_.value=Math.min(100,_.value+O)}function T(){d(),setTimeout(()=>{o.value=!1,setTimeout(()=>{_.value=0},400)},500)}function E(){n=setInterval(()=>{P(a.value)},100)}return{progress:_,isLoading:o,start:u,finish:l,clear:d}}const q=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));e(()=>r(()=>import("./Card.1eb4f34f.mjs"),["_nuxt/Card.1eb4f34f.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./Footer.0fc4cbbe.mjs"),["_nuxt/Footer.0fc4cbbe.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./Navbar.078f6cc5.mjs"),["_nuxt/Navbar.078f6cc5.mjs","_nuxt/Navbar.87089911.css","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./TabContent.92f1f960.mjs"),["_nuxt/TabContent.92f1f960.mjs","_nuxt/TabContent.vue_vue_type_script_setup_true_lang.d82c4221.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./TabPane.b7b4ea07.mjs"),["_nuxt/TabPane.b7b4ea07.mjs","_nuxt/TabPane.vue_vue_type_script_setup_true_lang.052a66f6.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./Tabs.88668be3.mjs"),["_nuxt/Tabs.88668be3.mjs","_nuxt/Tabs.vue_vue_type_script_setup_true_lang.83665e1c.mjs","_nuxt/TabPane.vue_vue_type_script_setup_true_lang.052a66f6.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./UnoIcon.d55a661d.mjs"),["_nuxt/UnoIcon.d55a661d.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ContentDoc.f8bf1b4d.mjs"),["_nuxt/ContentDoc.f8bf1b4d.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css","_nuxt/ContentRenderer.d29003e1.mjs","_nuxt/ContentRendererMarkdown.a87ea85d.mjs","_nuxt/ContentQuery.4fb29f9c.mjs","_nuxt/asyncData.68fa2c80.mjs","_nuxt/utils.29596f1c.mjs"]).then(t=>t.default||t));e(()=>r(()=>import("./ContentList.65ba57a4.mjs"),["_nuxt/ContentList.65ba57a4.mjs","_nuxt/ContentQuery.4fb29f9c.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css","_nuxt/asyncData.68fa2c80.mjs","_nuxt/utils.29596f1c.mjs"]).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>M),void 0).then(t=>t.default||t));e(()=>r(()=>import("./ContentQuery.4fb29f9c.mjs").then(t=>t.C),["_nuxt/ContentQuery.4fb29f9c.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css","_nuxt/asyncData.68fa2c80.mjs","_nuxt/utils.29596f1c.mjs"]).then(t=>t.default||t));e(()=>r(()=>import("./ContentRenderer.d29003e1.mjs"),["_nuxt/ContentRenderer.d29003e1.mjs","_nuxt/ContentRendererMarkdown.a87ea85d.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ContentRendererMarkdown.a87ea85d.mjs"),["_nuxt/ContentRendererMarkdown.a87ea85d.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ContentSlot.42aa8e2e.mjs"),["_nuxt/ContentSlot.42aa8e2e.mjs","_nuxt/utils.29596f1c.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenEmpty.46100c09.mjs"),["_nuxt/DocumentDrivenEmpty.46100c09.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenNotFound.1b15ee9e.mjs"),["_nuxt/DocumentDrivenNotFound.1b15ee9e.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./Markdown.ee008b62.mjs"),["_nuxt/Markdown.ee008b62.mjs","_nuxt/ContentSlot.42aa8e2e.mjs","_nuxt/utils.29596f1c.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseA.d472229a.mjs"),["_nuxt/ProseA.d472229a.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseBlockquote.e9c3e80f.mjs"),["_nuxt/ProseBlockquote.e9c3e80f.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseCode.0f9cdbf7.mjs"),["_nuxt/ProseCode.0f9cdbf7.mjs","_nuxt/ProseCode.e63e49c6.css","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseCodeInline.96a942ad.mjs"),["_nuxt/ProseCodeInline.96a942ad.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseEm.b9770d2f.mjs"),["_nuxt/ProseEm.b9770d2f.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseH1.854ba428.mjs"),["_nuxt/ProseH1.854ba428.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseH2.8e06893f.mjs"),["_nuxt/ProseH2.8e06893f.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseH3.0c5c3a5b.mjs"),["_nuxt/ProseH3.0c5c3a5b.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseH4.83235cac.mjs"),["_nuxt/ProseH4.83235cac.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseH5.4641f8f7.mjs"),["_nuxt/ProseH5.4641f8f7.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseH6.2efed9a8.mjs"),["_nuxt/ProseH6.2efed9a8.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseHr.11e4bdde.mjs"),["_nuxt/ProseHr.11e4bdde.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseImg.6cd2fc2f.mjs"),["_nuxt/ProseImg.6cd2fc2f.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseLi.ccb0a95d.mjs"),["_nuxt/ProseLi.ccb0a95d.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseOl.012660c1.mjs"),["_nuxt/ProseOl.012660c1.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseP.af554472.mjs"),["_nuxt/ProseP.af554472.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseStrong.b8295564.mjs"),["_nuxt/ProseStrong.b8295564.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseTable.e080c898.mjs"),["_nuxt/ProseTable.e080c898.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseTbody.5281e72d.mjs"),["_nuxt/ProseTbody.5281e72d.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseTd.5c3a6eaa.mjs"),["_nuxt/ProseTd.5c3a6eaa.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseTh.34cacb8b.mjs"),["_nuxt/ProseTh.34cacb8b.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseThead.eff7b2a9.mjs"),["_nuxt/ProseThead.eff7b2a9.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseTr.b5f6e0af.mjs"),["_nuxt/ProseTr.b5f6e0af.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseUl.48bfba38.mjs"),["_nuxt/ProseUl.48bfba38.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>import("./welcome.153f564a.mjs"),["_nuxt/welcome.153f564a.mjs","_nuxt/Navbar.87089911.css","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/asyncData.68fa2c80.mjs","_nuxt/ContentQuery.4fb29f9c.mjs","_nuxt/utils.29596f1c.mjs","_nuxt/ContentDoc.f8bf1b4d.mjs","_nuxt/ContentRenderer.d29003e1.mjs","_nuxt/ContentRendererMarkdown.a87ea85d.mjs","_nuxt/ContentList.65ba57a4.mjs","_nuxt/ContentSlot.42aa8e2e.mjs","_nuxt/DocumentDrivenEmpty.46100c09.mjs","_nuxt/DocumentDrivenNotFound.1b15ee9e.mjs","_nuxt/Markdown.ee008b62.mjs","_nuxt/ProseCode.0f9cdbf7.mjs","_nuxt/ProseCode.e63e49c6.css","_nuxt/client-only.f861baf7.mjs"]).then(t=>t.default||t));e(()=>r(()=>import("./entry.f059b2a1.mjs").then(t=>t.a8),["_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>$),void 0).then(t=>t.default||t));e(()=>r(()=>import("./client-only.f861baf7.mjs"),["_nuxt/client-only.f861baf7.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>N),void 0).then(t=>t.default||t));e(()=>r(()=>import("./entry.f059b2a1.mjs").then(t=>t.a7),["_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css"]).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>q),void 0).then(t=>t.default||t));e(()=>r(()=>import("./component.vue3.d66774cc.mjs"),["_nuxt/component.vue3.d66774cc.mjs","_nuxt/client-only.f861baf7.mjs","_nuxt/entry.f059b2a1.mjs","_nuxt/entry.61c6a1f9.css","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs"]).then(t=>t.default||t));const z=f({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:_}=D(t),o=m(()=>{var n;return typeof((n=_.value)==null?void 0:n.params)=="function"?_.value.params():_.value});if(!o.value&&R("dd-navigation","$X9s2D0PBpW").value){const{navigation:n}=S();return{navigation:n}}const{data:a}=await c(`content-navigation-${h(o.value)}`,()=>j(o.value),"$qwqtCbrR7R");return{navigation:a}},render(t){const _=V(),{navigation:o}=t,a=u=>p(g,{to:u._path},()=>u.title),n=(u,l)=>p("ul",l?{"data-level":l}:null,u.map(d=>d.children?p("li",null,[a(d),n(d.children,l+1)]):p("li",null,a(d)))),i=u=>n(u,0);return _!=null&&_.default?_.default({navigation:o,...this.$attrs}):i(o)}}),M=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));export{z as default};
