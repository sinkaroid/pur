import{f as b,e as v,v as C,Q as k,p as u,o as s,D as a,L as t,O as q,P as c,K as r,J as d,R as m,c as p,u as _,S as w}from"./entry.5e5f269b.mjs";import{_ as y}from"./Tabs.vue_vue_type_script_setup_true_lang.78eeec57.mjs";import{_ as g}from"./TabContent.vue_vue_type_script_setup_true_lang.d3b5edd8.mjs";import"./TabPane.vue_vue_type_script_setup_true_lang.c819e4cd.mjs";const B={class:"content"},S={class:"container mx-auto max-w-[65ch]! mt-25"},L={class:"prose"},N=t("h1",{class:"text-center"},"Clients",-1),P=t("br",null,null,-1),V=t("br",null,null,-1),$={class:"project-cards | grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-5"},D={class:"project-cards | grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-5"},K=b({__name:"client",setup(E){v({title:"Client"}),C("opensource");const i=k(),f=u(()=>i.projects.filter(o=>o.opensource)),h=u(()=>i.projects.filter(o=>!o.opensource));return console.log(i.projects),(o,T)=>{const l=w,x=y;return s(),a("section",B,[t("div",S,[t("div",L,[N,q(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),P,V,c(x,null,{default:r(()=>[c(g,{name:"open",text:"Project"},{default:r(()=>[t("div",$,[(s(!0),a(d,null,m(_(f),(e,n)=>(s(),p(l,{key:n,title:e.title,image:e.image,description:e.description,github:e.github_url,opensource:e.description,class:"w-full"},null,8,["title","image","description","github","opensource"]))),128))])]),_:1}),c(g,{name:"closed",text:"Client"},{default:r(()=>[t("div",D,[(s(!0),a(d,null,m(_(h),(e,n)=>(s(),p(l,{key:n,title:e.title,image:e.image,description:e.description,class:"w-full bg-cover"},null,8,["title","image","description"]))),128))])]),_:1})]),_:1})])])])}}});export{K as default};
