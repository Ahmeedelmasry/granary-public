import{r as c,z as T,o as B,f as i,k as h,l as P,q as n,s as e,v as U,t as C,A as H,m as l,B as L,C as t,D as F,E as J,F as k,G as V,H as O,I as z,J as K}from"./entry.9ac21750.js";import{p as R}from"./units.ba515e4a.js";import{c as Q,r as W,u as q}from"./index.7c7e0372.js";import{V as X,a as Y}from"./VSkeletonLoader.f41b8ad8.js";const Z={class:"update_banner"},ee={class:"field_container"},te=l("label",{for:"typeName"},"اسم الوحدة",-1),ne={class:"input_parent position-relative"},oe={key:0,class:"err_msg"},ae={class:"actions text-center mt-5"},se={__name:"Update",props:["openPopup","toUpdate"],emits:["closePopup","regetData"],setup(p,{emit:v}){const u=p,f=R(),m=c({name:null,weight:null}),d=c(!1),g=c(!1),r=c({name:{required:Q.withMessage("هذا الحقل مطلوب",W)}});T(()=>d.value,$=>{$||setTimeout(()=>{v("closePopup")},200)});let o=q(r,m);const I=async()=>{u.toUpdate&&(r.value.image={},o=q(r,m)),await o.value.$validate()&&(g.value=!0,u.toUpdate?await f.doUpdateUnit({id:u.toUpdate.selectable.id,name:m.value.name})&&(v("regetData"),d.value=!1):await f.doAddProductunit({name:m.value.name})&&(v("regetData"),d.value=!1),g.value=!1)};return B(()=>{d.value=u.openPopup,u.toUpdate&&(m.value.name=u.toUpdate.selectable.name)}),($,b)=>{const x=i("v-card-title"),a=i("v-icon"),y=i("v-col"),w=i("v-row"),M=i("v-container"),D=i("v-btn"),N=i("v-form"),E=i("v-card"),S=i("v-dialog");return h(),P("div",Z,[n(S,{modelValue:t(d),"onUpdate:modelValue":b[2]||(b[2]=_=>V(d)?d.value=_:null),width:"400",persistent:""},{default:e(()=>[n(E,null,{default:e(()=>[n(x,{class:"mb-0 text-center bg-grey-lighten-3 main_title font-weight-bold",style:{"font-size":"22px"}},{default:e(()=>[U(C(p.toUpdate?"تعديل وحدة تعبئة":"اضافة وحدة تعبئة جديدة"),1)]),_:1}),n(N,{class:"pa-5",onSubmit:H(I,["prevent"])},{default:e(()=>[n(M,null,{default:e(()=>[n(w,{dir:"rtl"},{default:e(()=>[n(y,{cols:"12"},{default:e(()=>[l("div",ee,[te,l("div",ne,[L(l("input",{type:"text","onUpdate:modelValue":b[0]||(b[0]=_=>t(m).name=_),placeholder:"اسم الوحدة",name:"typeName",id:"typeName",class:F(t(o).$errors.find(_=>_.$property=="name")?"err_field":"")},null,2),[[J,t(m).name]]),n(a,{class:"position-absolute"},{default:e(()=>[U("mdi-rename-outline")]),_:1})])]),t(o).$errors.find(_=>_.$property=="name")?(h(),P("span",oe,C(t(o).$errors.find(_=>_.$property=="name").$message),1)):k("",!0)]),_:1})]),_:1})]),_:1}),l("div",ae,[n(D,{color:"red",class:"mr-3",onClick:b[1]||(b[1]=_=>d.value=!1),disabled:t(g)},{default:e(()=>[U("الغاء")]),_:1},8,["disabled"]),n(D,{color:"green",type:"submit",loading:t(g)},{default:e(()=>[U("حفظ")]),_:1},8,["loading"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])])}}},le=se,ie={class:"dashboard_banners_listing"},de={class:"page_toolbar d-flex align-center justify-space-between"},re={class:"toolbar_btns"},ce=l("h1",{dir:"rtl",class:"my-2 hide_till_print"},"وحدات الفوارغ",-1),ue=l("tr",null,[l("th",null,"رقم"),l("th",null,"اسم الفارغ"),l("th",{class:"hide_on_print"},"اجراء")],-1),pe={class:"hide_on_print"},me=l("div",null,"لايوجد بيانات",-1),_e=l("span",{class:"d-none"},null,-1),ve={key:0,class:"text-center pt-2 d-flex justify-space-between hide_on_print",style:{width:"60%"}},fe={class:"ps-5 d-flex align-center"},ge=l("label",{for:"",class:"mb-2 d-block text-end ms-3 mt-1",style:{"font-size":"12px"}},"النتائج لكل صفحة",-1),be={__name:"Listing",props:["productUnits","loading"],emits:["regetItems"],setup(p,{emit:v}){const u=c(!1),f=c(!1),m=c(!1),d=c(null),g=c(null),r=c(1),o=c(10),I=c([{title:"رقم",key:"index"},{title:"اسم وحدة التعبئة",key:"name"},{title:"اجراء",key:"actions"}]),$=[{title:"الرئيسية",disabled:!1,to:{name:"index"}},{title:"وحدات الفوارغ",disabled:!0}],b=c({id:"printable",popTitle:" -",extraCss:"https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.compat.css, https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css",extraHead:'<meta http-equiv="Content-Language"content="zh-cn"/>'});return T(()=>r.value,x=>{v("regetItems",{page:x,limit:o.value})}),T(()=>o.value,x=>{v("regetItems",{page:r.value,limit:x})}),(x,a)=>{const y=i("v-icon"),w=i("v-btn"),M=i("v-breadcrumbs"),D=i("v-select"),N=i("v-pagination"),E=i("v-col"),S=i("v-row"),_=i("v-container"),j=le,A=O("print");return h(),P("div",ie,[l("div",de,[l("div",re,[n(w,{onClick:a[0]||(a[0]=s=>u.value=!0),width:"20",size:"sm",elevation:"0",color:"transparent"},{default:e(()=>[n(y,{color:"white",size:"25"},{default:e(()=>[U("mdi-plus-circle")]),_:1})]),_:1}),L((h(),z(w,{width:"20",size:"sm",elevation:"0",color:"transparent",class:"ms-3"},{default:e(()=>[n(y,{color:"white",size:"25"},{default:e(()=>[U("mdi-printer")]),_:1})]),_:1})),[[A,t(b)]])]),n(M,{items:$,dir:"rtl",class:"pa-0 mb"},{title:e(({item:s})=>[U(C(s.title.toUpperCase()),1)]),_:1})]),n(_,{class:"page_container",fluid:""},{default:e(()=>[p.productUnits?(h(),z(S,{key:0,class:"px-4"},{default:e(()=>[n(E,{cols:"12",class:"section_container dashboard_table pa-0",id:"printable"},{default:e(()=>[ce,n(t(X),{headers:t(I),items:p.productUnits.content,loading:p.loading,"items-per-page":t(o),"onUpdate:itemsPerPage":a[1]||(a[1]=s=>V(o)?o.value=s:null),page:t(r),"onUpdate:page":a[2]||(a[2]=s=>V(r)?r.value=s:null),"items-length":p.productUnits.totalElements?p.productUnits.totalElements:0,"no-data-text":"لايوجد بيانات","show-current-page":""},{headers:e(()=>[ue]),item:e(({item:s})=>[l("tr",null,[l("td",null,C(s.index+1),1),l("td",null,C(s.selectable.name),1),l("td",pe,[n(y,{color:"blue",style:{cursor:"pointer"},onClick:G=>(d.value=s,f.value=!0)},{default:e(()=>[U("mdi-square-edit-outline")]),_:2},1032,["onClick"]),n(w,{elevation:"0",color:"transparent",loading:s.selectable.loading,ripple:!1},{default:e(()=>[n(y,{color:"red",style:{cursor:"pointer"},class:"ml-2",size:"23",onClick:G=>(g.value=s.selectable,m.value=!0)},{default:e(()=>[U("mdi-lock")]),_:2},1032,["onClick"])]),_:2},1032,["loading"])])])]),loading:e(()=>[n(t(Y),{type:"table-row@6"})]),"no-data":e(()=>[me]),bottom:e(()=>[_e]),_:1},8,["headers","items","loading","items-per-page","page","items-length"]),p.loading?k("",!0):(h(),P("div",ve,[l("div",fe,[n(D,{modelValue:t(o),"onUpdate:modelValue":a[3]||(a[3]=s=>V(o)?o.value=s:null),items:[10,50,100,500],variant:"outlined","hide-details":""},null,8,["modelValue"]),ge]),n(N,{modelValue:t(r),"onUpdate:modelValue":a[4]||(a[4]=s=>V(r)?r.value=s:null),length:p.productUnits.totalElements?Math.ceil(p.productUnits.totalElements/t(o)):1},null,8,["modelValue","length"])]))]),_:1})]),_:1})):k("",!0)]),_:1}),t(f)?(h(),z(j,{key:0,openPopup:t(f),onClosePopup:a[5]||(a[5]=s=>(f.value=!1,d.value=null)),toUpdate:t(d),onRegetData:a[6]||(a[6]=s=>(r.value=1,v("regetItems",{page:1,limit:t(o)})))},null,8,["openPopup","toUpdate"])):k("",!0),t(u)?(h(),z(j,{key:1,openPopup:t(u),onClosePopup:a[7]||(a[7]=s=>u.value=!1),onRegetData:a[8]||(a[8]=s=>v("regetItems",{page:1,limit:t(o)}))},null,8,["openPopup"])):k("",!0)])}}},he=be,Ue={class:"dashboard_tests_page mb-10"},ke={__name:"index",setup(p){const v=R(),{productUnits:u}=K(v),f=c(!0),m=async(d,g)=>{f.value=!0,await v.doGetProductUnits(d-1,g),f.value=!1};return B(()=>{m(1,10)}),(d,g)=>{const r=he;return h(),P("div",Ue,[n(r,{productUnits:t(u),loading:t(f),onRegetItems:g[0]||(g[0]=o=>m(o.page,o.limit))},null,8,["productUnits","loading"])])}}};export{ke as default};
