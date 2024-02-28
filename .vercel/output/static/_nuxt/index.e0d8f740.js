import{r as p,z as M,o as R,f as i,k as $,l as h,q as t,s as e,v as g,t as C,A as E,m as y,B as L,C as o,D as A,E as G,F as P,G as S,H as N,I as j}from"./entry.d2eac3d2.js";import{p as q}from"./types.370b36dc.js";import{c as F,r as H,u as B}from"./index.edcb52a9.js";import{V as J,a as K}from"./VSkeletonLoader.d47c2c61.js";const O={class:"update_banner"},Q={class:"field_container"},W=y("label",{for:"typeName"},"اسم الفرز",-1),X={class:"input_parent position-relative"},Y={key:0,class:"err_msg"},Z={class:"actions text-center"},ee={__name:"Update",props:["openPopup","toUpdate"],emits:["closePopup","regetData"],setup(b,{emit:_}){const r=b,v=q(),c=p({name:null}),l=p(!1),f=p(!1),u=p({name:{required:F.withMessage("هذا الحقل مطلوب",H)}});M(()=>l.value,x=>{x||setTimeout(()=>{_("closePopup")},200)});let n=B(u,c);const D=async()=>{r.toUpdate&&(u.value.image={},n=B(u,c)),await n.value.$validate()&&(f.value=!0,r.toUpdate?await v.doUpdateType({id:r.toUpdate.selectable.id,name:c.value.name})&&(_("regetData"),l.value=!1):await v.doAddProductType({name:c.value.name})&&(_("regetData"),l.value=!1),f.value=!1)};return R(()=>{l.value=r.openPopup,r.toUpdate&&(c.value.name=r.toUpdate.selectable.name)}),(x,d)=>{const s=i("v-card-title"),w=i("v-icon"),T=i("v-col"),V=i("v-row"),z=i("v-container"),k=i("v-btn"),I=i("v-form"),U=i("v-card"),a=i("v-dialog");return $(),h("div",O,[t(a,{modelValue:o(l),"onUpdate:modelValue":d[2]||(d[2]=m=>S(l)?l.value=m:null),width:"800",persistent:""},{default:e(()=>[t(U,null,{default:e(()=>[t(s,{class:"mb-0 text-center bg-grey-lighten-3 main_title font-weight-bold",style:{"font-size":"22px"}},{default:e(()=>[g(C(b.toUpdate?"تعديل الفرز":"اضافة فرز جديد"),1)]),_:1}),t(I,{class:"pa-5",onSubmit:E(D,["prevent"])},{default:e(()=>[t(z,null,{default:e(()=>[t(V,{dir:"rtl"},{default:e(()=>[t(T,{cols:"12"},{default:e(()=>[y("div",Q,[W,y("div",X,[L(y("input",{type:"text","onUpdate:modelValue":d[0]||(d[0]=m=>o(c).name=m),placeholder:"اسم الفرز",name:"typeName",id:"typeName",class:A(o(n).$errors.find(m=>m.$property=="name")?"err_field":"")},null,2),[[G,o(c).name]]),t(w,{class:"position-absolute"},{default:e(()=>[g("mdi-rename-outline")]),_:1})])]),o(n).$errors.find(m=>m.$property=="name")?($(),h("span",Y,C(o(n).$errors.find(m=>m.$property=="name").$message),1)):P("",!0)]),_:1})]),_:1})]),_:1}),y("div",Z,[t(k,{color:"red",class:"mr-3",onClick:d[1]||(d[1]=m=>l.value=!1),disabled:o(f)},{default:e(()=>[g("الغاء")]),_:1},8,["disabled"]),t(k,{color:"green",type:"submit",loading:o(f)},{default:e(()=>[g("حفظ")]),_:1},8,["loading"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])])}}},te=ee,oe={class:"dashboard_banners_listing"},ae={class:"page_toolbar d-flex align-center justify-space-between"},ne={class:"toolbar_btns"},se=y("div",null,"لايوجد بيانات",-1),le={__name:"Listing",props:["productTypes","loading"],emits:["regetItems"],setup(b,{emit:_}){const r=p(!1),v=p(!1),c=p(!1),l=p(null),f=p(null),u=p(1),n=p(10),D=p([{title:"رقم",key:"index"},{title:"اسم الفرز",key:"name"},{title:"اجراء",key:"actions"}]),x=[{title:"الرئيسية",disabled:!1,to:{name:"index"}},{title:"درجات الفرز",disabled:!0}];return M(()=>u.value,d=>{_("regetItems",{page:d,limit:n.value})}),M(()=>n.value,d=>{_("regetItems",{page:u.value,limit:d})}),(d,s)=>{const w=i("v-icon"),T=i("v-btn"),V=i("v-breadcrumbs"),z=i("v-col"),k=i("v-row"),I=i("v-container"),U=te;return $(),h("div",oe,[y("div",ae,[y("div",ne,[t(T,{onClick:s[0]||(s[0]=a=>r.value=!0),width:"20",size:"sm",elevation:"0",color:"transparent"},{default:e(()=>[t(w,{color:"white",size:"25"},{default:e(()=>[g("mdi-plus-circle")]),_:1})]),_:1}),t(T,{width:"20",size:"sm",elevation:"0",color:"transparent",class:"ms-3"},{default:e(()=>[t(w,{color:"white",size:"25"},{default:e(()=>[g("mdi-printer")]),_:1})]),_:1})]),t(V,{items:x,dir:"rtl",class:"pa-0 mb"},{title:e(({item:a})=>[g(C(a.title.toUpperCase()),1)]),_:1})]),t(I,{class:"page_container",fluid:""},{default:e(()=>[b.productTypes?($(),N(k,{key:0,class:"px-4"},{default:e(()=>[t(z,{cols:"12",class:"section_container dashboard_table pa-0"},{default:e(()=>[t(o(J),{headers:o(D),items:b.productTypes.content,loading:b.loading,"items-per-page":o(n),"onUpdate:itemsPerPage":s[1]||(s[1]=a=>S(n)?n.value=a:null),page:o(u),"onUpdate:page":s[2]||(s[2]=a=>S(u)?u.value=a:null),"items-length":b.productTypes.totalElements?b.productTypes.totalElements:0,"no-data-text":"لايوجد بيانات","show-current-page":""},{loading:e(()=>[t(o(K),{type:"table-row@4"})]),"item.index":e(({item:a})=>[g(C(a.index+1),1)]),"item.actions":e(({item:a})=>[t(w,{color:"blue",style:{cursor:"pointer"},onClick:m=>(l.value=a,v.value=!0)},{default:e(()=>[g("mdi-square-edit-outline")]),_:2},1032,["onClick"]),t(T,{elevation:"0",color:"transparent",loading:a.selectable.loading,ripple:!1},{default:e(()=>[t(w,{color:"red",style:{cursor:"pointer"},class:"ml-2",size:"23",onClick:m=>(f.value=a.selectable,c.value=!0)},{default:e(()=>[g("mdi-lock")]),_:2},1032,["onClick"])]),_:2},1032,["loading"])]),"no-data":e(()=>[se]),_:1},8,["headers","items","loading","items-per-page","page","items-length"])]),_:1})]),_:1})):P("",!0)]),_:1}),o(v)?($(),N(U,{key:0,openPopup:o(v),onClosePopup:s[3]||(s[3]=a=>(v.value=!1,l.value=null)),toUpdate:o(l),onRegetData:s[4]||(s[4]=a=>(u.value=1,_("regetItems",{page:1,limit:o(n)})))},null,8,["openPopup","toUpdate"])):P("",!0),o(r)?($(),N(U,{key:1,openPopup:o(r),onClosePopup:s[5]||(s[5]=a=>r.value=!1),onRegetData:s[6]||(s[6]=a=>_("regetItems",{page:1,limit:o(n)}))},null,8,["openPopup"])):P("",!0)])}}},ie=le,re={class:"dashboard_tests_page mb-10"},me={__name:"index",setup(b){const _=q(),{productTypes:r}=j(_),v=p(!0),c=async(l,f)=>{v.value=!0,await _.doGetProductTypes(l-1,f),v.value=!1};return R(()=>{c(1,10)}),(l,f)=>{const u=ie;return $(),h("div",re,[t(u,{productTypes:o(r),loading:o(v),onRegetItems:f[0]||(f[0]=n=>c(n.page,n.limit))},null,8,["productTypes","loading"])])}}};export{me as default};
