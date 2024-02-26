import{r as c,z as S,o as T,f as i,k as $,l as D,q as t,s as e,v as g,t as P,A as E,m as y,B as L,C as o,D as A,E as G,F as h,G as B,H as M,I as j}from"./entry.ba9d7d56.js";import{c as q}from"./clients.a6cbfe3f.js";import{c as F,r as H,u as R}from"./index.1d762206.js";import{V as J,a as K}from"./VSkeletonLoader.41630909.js";const O={class:"update_banner"},Q={class:"field_container"},W=y("label",{for:"typeName"},"اسم العميل",-1),X={class:"input_parent position-relative"},Y={key:0,class:"err_msg"},Z={class:"actions text-center mt-5"},ee={__name:"Update",props:["openPopup","toUpdate"],emits:["closePopup","regetData"],setup(b,{emit:_}){const r=b,v=q(),u=c({name:null}),l=c(!1),f=c(!1),p=c({name:{required:F.withMessage("هذا الحقل مطلوب",H)}});S(()=>l.value,x=>{x||setTimeout(()=>{_("closePopup")},200)});let a=R(p,u);const V=async()=>{r.toUpdate&&(p.value.image={},a=R(p,u)),await a.value.$validate()&&(f.value=!0,r.toUpdate?await v.doUpdateClient({id:r.toUpdate.selectable.id,name:u.value.name})&&(_("regetData"),l.value=!1):await v.doAddClient({name:u.value.name})&&(_("regetData"),l.value=!1),f.value=!1)};return T(()=>{l.value=r.openPopup,r.toUpdate&&(u.value.name=r.toUpdate.selectable.name)}),(x,d)=>{const s=i("v-card-title"),w=i("v-icon"),k=i("v-col"),z=i("v-row"),I=i("v-container"),C=i("v-btn"),N=i("v-form"),U=i("v-card"),n=i("v-dialog");return $(),D("div",O,[t(n,{modelValue:o(l),"onUpdate:modelValue":d[2]||(d[2]=m=>B(l)?l.value=m:null),width:"400",persistent:""},{default:e(()=>[t(U,null,{default:e(()=>[t(s,{class:"mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold",style:{"font-size":"22px"}},{default:e(()=>[g(P(b.toUpdate?"تعديل عميل":"اضافة عميل جديد"),1)]),_:1}),t(N,{class:"pa-5",onSubmit:E(V,["prevent"])},{default:e(()=>[t(I,null,{default:e(()=>[t(z,{dir:"rtl"},{default:e(()=>[t(k,{cols:"12"},{default:e(()=>[y("div",Q,[W,y("div",X,[L(y("input",{type:"text","onUpdate:modelValue":d[0]||(d[0]=m=>o(u).name=m),placeholder:"اسم العميل",name:"typeName",id:"typeName",class:A(o(a).$errors.find(m=>m.$property=="name")?"err_field":"")},null,2),[[G,o(u).name]]),t(w,{class:"position-absolute"},{default:e(()=>[g("mdi-rename-outline")]),_:1})])]),o(a).$errors.find(m=>m.$property=="name")?($(),D("span",Y,P(o(a).$errors.find(m=>m.$property=="name").$message),1)):h("",!0)]),_:1})]),_:1})]),_:1}),y("div",Z,[t(C,{color:"red",class:"mr-3",onClick:d[1]||(d[1]=m=>l.value=!1),disabled:o(f)},{default:e(()=>[g("الغاء")]),_:1},8,["disabled"]),t(C,{color:"green",type:"submit",loading:o(f)},{default:e(()=>[g("حفظ")]),_:1},8,["loading"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])])}}},te=ee,oe={class:"dashboard_banners_listing"},ne={class:"page_toolbar d-flex align-center justify-space-between"},ae={class:"toolbar_btns"},se=y("div",null,"لايوجد بيانات",-1),le={__name:"Listing",props:["clients","loading"],emits:["regetItems"],setup(b,{emit:_}){const r=c(!1),v=c(!1),u=c(!1),l=c(null),f=c(null),p=c(1),a=c(10),V=c([{title:"رقم",key:"index"},{title:"اسم العميل",key:"name"},{title:"اجراء",key:"actions"}]),x=[{title:"الرئيسية",disabled:!1,to:{name:"index"}},{title:"العملاء",disabled:!0}];return S(()=>p.value,d=>{_("regetItems",{page:d,limit:a.value})}),S(()=>a.value,d=>{_("regetItems",{page:p.value,limit:d})}),(d,s)=>{const w=i("v-icon"),k=i("v-btn"),z=i("v-breadcrumbs"),I=i("v-col"),C=i("v-row"),N=i("v-container"),U=te;return $(),D("div",oe,[y("div",ne,[y("div",ae,[t(k,{onClick:s[0]||(s[0]=n=>r.value=!0),width:"20",size:"sm",elevation:"0",color:"transparent"},{default:e(()=>[t(w,{color:"white",size:"25"},{default:e(()=>[g("mdi-plus-circle")]),_:1})]),_:1}),t(k,{width:"20",size:"sm",elevation:"0",color:"transparent",class:"ms-3"},{default:e(()=>[t(w,{color:"white",size:"25"},{default:e(()=>[g("mdi-printer")]),_:1})]),_:1})]),t(z,{items:x,dir:"rtl",class:"pa-0 mb"},{title:e(({item:n})=>[g(P(n.title.toUpperCase()),1)]),_:1})]),t(N,{class:"page_container",fluid:""},{default:e(()=>[b.clients?($(),M(C,{key:0,class:"px-4"},{default:e(()=>[t(I,{cols:"12",class:"section_container dashboard_table pa-0"},{default:e(()=>[t(o(J),{headers:o(V),items:b.clients.content,loading:b.loading,"items-per-page":o(a),"onUpdate:itemsPerPage":s[1]||(s[1]=n=>B(a)?a.value=n:null),page:o(p),"onUpdate:page":s[2]||(s[2]=n=>B(p)?p.value=n:null),"items-length":b.clients.totalElements?b.clients.totalElements:0,"no-data-text":"لايوجد بيانات","show-current-page":""},{loading:e(()=>[t(o(K),{type:"table-row@4"})]),"item.index":e(({item:n})=>[g(P(n.index+1),1)]),"item.actions":e(({item:n})=>[t(w,{color:"blue",style:{cursor:"pointer"},onClick:m=>(l.value=n,v.value=!0)},{default:e(()=>[g("mdi-square-edit-outline")]),_:2},1032,["onClick"]),t(k,{elevation:"0",color:"transparent",loading:n.selectable.loading,ripple:!1},{default:e(()=>[t(w,{color:"red",style:{cursor:"pointer"},class:"ml-2",size:"23",onClick:m=>(f.value=n.selectable,u.value=!0)},{default:e(()=>[g("mdi-lock")]),_:2},1032,["onClick"])]),_:2},1032,["loading"])]),"no-data":e(()=>[se]),_:1},8,["headers","items","loading","items-per-page","page","items-length"])]),_:1})]),_:1})):h("",!0)]),_:1}),o(v)?($(),M(U,{key:0,openPopup:o(v),onClosePopup:s[3]||(s[3]=n=>(v.value=!1,l.value=null)),toUpdate:o(l),onRegetData:s[4]||(s[4]=n=>(p.value=1,_("regetItems",{page:1,limit:o(a)})))},null,8,["openPopup","toUpdate"])):h("",!0),o(r)?($(),M(U,{key:1,openPopup:o(r),onClosePopup:s[5]||(s[5]=n=>r.value=!1),onRegetData:s[6]||(s[6]=n=>_("regetItems",{page:1,limit:o(a)}))},null,8,["openPopup"])):h("",!0)])}}},ie=le,re={class:"dashboard_tests_page mb-10"},me={__name:"index",setup(b){const _=q(),{clients:r}=j(_),v=c(!0),u=async(l,f)=>{v.value=!0,await _.doGetClients(l-1,f),v.value=!1};return T(()=>{u(1,10)}),(l,f)=>{const p=ie;return $(),D("div",re,[t(p,{clients:o(r),loading:o(v),onRegetItems:f[0]||(f[0]=a=>u(a.page,a.limit))},null,8,["clients","loading"])])}}};export{me as default};
