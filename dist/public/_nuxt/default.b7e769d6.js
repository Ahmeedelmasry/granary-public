import{r as e,Q as h,o as v,f as r,l as w,q as l,s as c,k as i,C as n,H as k,F as g,aA as y,aB as W}from"./entry.ba9d7d56.js";import E from"./DashboardNav.f0821ad0.js";import"./AppSideDrawer.d4247999.js";const B={class:"layout_page"},$={__name:"default",setup(C){const t=e(1200),o=e(800),s=e(0),a=e(!0),u=h(),d=()=>{window.addEventListener("scroll",()=>{document.documentElement.scrollTop>s.value?a.value=!1:a.value=!0,s.value=document.documentElement.scrollTop})},m=()=>{t.value=window.innerWidth,o.value=window.innerHeight,window.addEventListener("resize",()=>{t.value=window.innerWidth})};return v(()=>{d(),m()}),(_,T)=>{const p=r("v-main"),f=r("v-layout");return i(),w("div",B,[l(f,{class:"position-relative"},{default:c(()=>[n(u).name!="signin"?(i(),k(E,{key:0,currentWidth:n(t)},null,8,["currentWidth"])):g("",!0),l(p,{style:y(`background: rgb(239 239 239 / 43%) !important;
         min-height: ${n(o)}px`)},{default:c(()=>[W(_.$slots,"default")]),_:3},8,["style"])]),_:3})])}}};export{$ as default};