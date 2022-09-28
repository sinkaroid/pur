import{f,v as s,x as v,C as L,D as I,E as A,i as p,p as m,d as e,_ as r,t as D,F as R,h as V,G as g}from"./entry.dc545996.mjs";import{u as c}from"./asyncData.96280109.mjs";import{h,j as y,u as b}from"./ContentQuery.3b4e577a.mjs";import{w as x,u as S}from"./utils.7406fec5.mjs";/* empty css                                                */import"./ContentDoc.de8c0b25.mjs";import"./ContentList.c085bf37.mjs";import"./ContentRenderer.8f3a9a07.mjs";import"./ContentRendererMarkdown.8bbc7224.mjs";import"./ContentSlot.d77f4b8c.mjs";import"./DocumentDrivenEmpty.a1d02e97.mjs";import"./DocumentDrivenNotFound.a44a60f4.mjs";import"./Markdown.2e45a7f8.mjs";import"./ProseCode.71d491f3.mjs";import"./client-only.325e7c55.mjs";import"./_plugin-vue_export-helper.7287ed4b.mjs";const j=t=>{let _=t;typeof(_==null?void 0:_.params)=="function"&&(_=_.params());const o=x(_?`/navigation/${h(_)}.json`:"/navigation");return $fetch(o,{method:"GET",responseType:"json",params:{_params:y(_||{}),previewToken:b("previewToken").value}})};const C=f({emits:{error(t){return!0}},setup(t,{slots:_,emit:o}){const a=s(null),n=v();return L(i=>{if(!n.isHydrating)return o("error",i),a.value=i,!1}),()=>{var i,u;return a.value?(i=_.error)==null?void 0:i.call(_,{error:a}):(u=_.default)==null?void 0:u.call(_)}}}),$=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),w=f({name:"ServerPlaceholder",render(){return I("div")}}),N=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),B=f({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t){const _=k({duration:t.duration,throttle:t.throttle}),o=v();return o.hook("page:start",_.start),o.hook("page:finish",_.finish),A(()=>_.clear),()=>p("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${_.progress.value}%`,height:`${t.height}px`,opacity:_.isLoading.value?1:0,background:t.color,backgroundSize:`${100/_.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}})}});function k(t){const _=s(0),o=s(!1),a=m(()=>1e4/t.duration);let n=null,i=null;function u(){d(),_.value=0,o.value=!0,t.throttle?i=setTimeout(E,t.throttle):E()}function l(){_.value=100,T()}function d(){clearInterval(n),clearTimeout(i),n=null,i=null}function P(O){_.value=Math.min(100,_.value+O)}function T(){d(),setTimeout(()=>{o.value=!1,setTimeout(()=>{_.value=0},400)},500)}function E(){n=setInterval(()=>{P(a.value)},100)}return{progress:_,isLoading:o,start:u,finish:l,clear:d}}const q=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));e(()=>r(()=>import("./Card.c9d77874.mjs"),["_nuxt/Card.c9d77874.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./Footer.b5de14cc.mjs"),["_nuxt/Footer.b5de14cc.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./Navbar.78c11bcb.mjs"),["_nuxt/Navbar.78c11bcb.mjs","_nuxt/Navbar.87089911.css","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./TabContent.f3e2062a.mjs"),["_nuxt/TabContent.f3e2062a.mjs","_nuxt/TabContent.vue_vue_type_script_setup_true_lang.568fe14b.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./TabPane.11ae948b.mjs"),["_nuxt/TabPane.11ae948b.mjs","_nuxt/TabPane.vue_vue_type_script_setup_true_lang.e079eb24.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./Tabs.ab93c708.mjs"),["_nuxt/Tabs.ab93c708.mjs","_nuxt/Tabs.vue_vue_type_script_setup_true_lang.433fff6c.mjs","_nuxt/TabPane.vue_vue_type_script_setup_true_lang.e079eb24.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./UnoIcon.18a8488c.mjs"),["_nuxt/UnoIcon.18a8488c.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ContentDoc.de8c0b25.mjs"),["_nuxt/ContentDoc.de8c0b25.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css","_nuxt/ContentRenderer.8f3a9a07.mjs","_nuxt/ContentRendererMarkdown.8bbc7224.mjs","_nuxt/ContentQuery.3b4e577a.mjs","_nuxt/asyncData.96280109.mjs","_nuxt/utils.7406fec5.mjs"]).then(t=>t.default||t));e(()=>r(()=>import("./ContentList.c085bf37.mjs"),["_nuxt/ContentList.c085bf37.mjs","_nuxt/ContentQuery.3b4e577a.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css","_nuxt/asyncData.96280109.mjs","_nuxt/utils.7406fec5.mjs"]).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>M),void 0).then(t=>t.default||t));e(()=>r(()=>import("./ContentQuery.3b4e577a.mjs").then(t=>t.C),["_nuxt/ContentQuery.3b4e577a.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css","_nuxt/asyncData.96280109.mjs","_nuxt/utils.7406fec5.mjs"]).then(t=>t.default||t));e(()=>r(()=>import("./ContentRenderer.8f3a9a07.mjs"),["_nuxt/ContentRenderer.8f3a9a07.mjs","_nuxt/ContentRendererMarkdown.8bbc7224.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ContentRendererMarkdown.8bbc7224.mjs"),["_nuxt/ContentRendererMarkdown.8bbc7224.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ContentSlot.d77f4b8c.mjs"),["_nuxt/ContentSlot.d77f4b8c.mjs","_nuxt/utils.7406fec5.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenEmpty.a1d02e97.mjs"),["_nuxt/DocumentDrivenEmpty.a1d02e97.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenNotFound.a44a60f4.mjs"),["_nuxt/DocumentDrivenNotFound.a44a60f4.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./Markdown.2e45a7f8.mjs"),["_nuxt/Markdown.2e45a7f8.mjs","_nuxt/ContentSlot.d77f4b8c.mjs","_nuxt/utils.7406fec5.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseA.253e7402.mjs"),["_nuxt/ProseA.253e7402.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseBlockquote.21ba8b9b.mjs"),["_nuxt/ProseBlockquote.21ba8b9b.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseCode.71d491f3.mjs"),["_nuxt/ProseCode.71d491f3.mjs","_nuxt/ProseCode.e63e49c6.css","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseCodeInline.c15b223d.mjs"),["_nuxt/ProseCodeInline.c15b223d.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseEm.a0eebd12.mjs"),["_nuxt/ProseEm.a0eebd12.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseH1.00ef19ac.mjs"),["_nuxt/ProseH1.00ef19ac.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseH2.59f43232.mjs"),["_nuxt/ProseH2.59f43232.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseH3.f28a5032.mjs"),["_nuxt/ProseH3.f28a5032.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseH4.1fef42b8.mjs"),["_nuxt/ProseH4.1fef42b8.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseH5.6fea1068.mjs"),["_nuxt/ProseH5.6fea1068.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseH6.50fd4cc1.mjs"),["_nuxt/ProseH6.50fd4cc1.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseHr.243d17c2.mjs"),["_nuxt/ProseHr.243d17c2.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseImg.f0a5dc97.mjs"),["_nuxt/ProseImg.f0a5dc97.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseLi.d0240bd8.mjs"),["_nuxt/ProseLi.d0240bd8.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseOl.7b552cc5.mjs"),["_nuxt/ProseOl.7b552cc5.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseP.da6012bf.mjs"),["_nuxt/ProseP.da6012bf.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseStrong.fa539fb3.mjs"),["_nuxt/ProseStrong.fa539fb3.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseTable.4c0d6317.mjs"),["_nuxt/ProseTable.4c0d6317.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseTbody.5ed18e62.mjs"),["_nuxt/ProseTbody.5ed18e62.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseTd.e027581b.mjs"),["_nuxt/ProseTd.e027581b.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseTh.7abd57d8.mjs"),["_nuxt/ProseTh.7abd57d8.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseThead.be517128.mjs"),["_nuxt/ProseThead.be517128.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseTr.98054053.mjs"),["_nuxt/ProseTr.98054053.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./ProseUl.e6e49e93.mjs"),["_nuxt/ProseUl.e6e49e93.mjs","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>import("./welcome.9693604e.mjs"),["_nuxt/welcome.9693604e.mjs","_nuxt/Navbar.87089911.css","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs","_nuxt/asyncData.96280109.mjs","_nuxt/ContentQuery.3b4e577a.mjs","_nuxt/utils.7406fec5.mjs","_nuxt/ContentDoc.de8c0b25.mjs","_nuxt/ContentRenderer.8f3a9a07.mjs","_nuxt/ContentRendererMarkdown.8bbc7224.mjs","_nuxt/ContentList.c085bf37.mjs","_nuxt/ContentSlot.d77f4b8c.mjs","_nuxt/DocumentDrivenEmpty.a1d02e97.mjs","_nuxt/DocumentDrivenNotFound.a44a60f4.mjs","_nuxt/Markdown.2e45a7f8.mjs","_nuxt/ProseCode.71d491f3.mjs","_nuxt/ProseCode.e63e49c6.css","_nuxt/client-only.325e7c55.mjs"]).then(t=>t.default||t));e(()=>r(()=>import("./entry.dc545996.mjs").then(t=>t.a8),["_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>$),void 0).then(t=>t.default||t));e(()=>r(()=>import("./client-only.325e7c55.mjs"),["_nuxt/client-only.325e7c55.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>N),void 0).then(t=>t.default||t));e(()=>r(()=>import("./entry.dc545996.mjs").then(t=>t.a7),["_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css"]).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>q),void 0).then(t=>t.default||t));e(()=>r(()=>import("./component.vue3.bfda327e.mjs"),["_nuxt/component.vue3.bfda327e.mjs","_nuxt/client-only.325e7c55.mjs","_nuxt/entry.dc545996.mjs","_nuxt/entry.5019fd21.css","_nuxt/_plugin-vue_export-helper.7287ed4b.mjs"]).then(t=>t.default||t));const z=f({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:_}=D(t),o=m(()=>{var n;return typeof((n=_.value)==null?void 0:n.params)=="function"?_.value.params():_.value});if(!o.value&&R("dd-navigation","$X9s2D0PBpW").value){const{navigation:n}=S();return{navigation:n}}const{data:a}=await c(`content-navigation-${h(o.value)}`,()=>j(o.value),"$qwqtCbrR7R");return{navigation:a}},render(t){const _=V(),{navigation:o}=t,a=u=>p(g,{to:u._path},()=>u.title),n=(u,l)=>p("ul",l?{"data-level":l}:null,u.map(d=>d.children?p("li",null,[a(d),n(d.children,l+1)]):p("li",null,a(d)))),i=u=>n(u,0);return _!=null&&_.default?_.default({navigation:o,...this.$attrs}):i(o)}}),M=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));export{z as default};
