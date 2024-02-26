import{I as T,r as $,o as B,f as D,k as h,l as F,q as o,s as a,m as e,C as t,D as k,v,t as c,F as w,B as V,E as C,z as G,H as P,G as R}from"./entry.d2eac3d2.js";import{g as N}from"./granary.cc76c106.js";import{s as q}from"./supplier.895df033.js";import{h as S}from"./moment.a9aaa855.js";import{c as U,r as A,u as z}from"./index.edcb52a9.js";import{V as E,a as j}from"./VSkeletonLoader.d47c2c61.js";import{s as H}from"./supplier_payments.788424f4.js";const L={class:"supplierPaymentReportFilter"},W={class:"field_container"},J=e("label",{for:"supplierId"},"اختر المورد",-1),K={class:"input_parent position-relative"},O={key:0,class:"err_msg"},Q={class:"field_container"},X=e("label",{for:"granaryId"},"اختر الصومعة",-1),Z={class:"input_parent position-relative"},ee={key:0,class:"err_msg"},te={class:"field_container",dir:"rtl"},se=e("label",{for:"FromDate"},"تاريخ (من)",-1),le={class:"input_parent position-relative"},ae=["disabled"],oe={class:"field_container",dir:"rtl"},ne=e("label",{for:"ToDate"},"تاريخ (الي)",-1),ie={class:"input_parent position-relative"},re=["disabled"],de={__name:"Filter",props:["loading"],emits:["filterData"],setup(s,{emit:f}){const d=N(),m=q(),{granaries:b}=T(d),{suppliers:M}=T(m),l=$({supplierId:null,granaryId:null,creationFromDate:null,creationToDate:null,FromDate:null,ToDate:null}),u=$({supplierId:{required:U.withMessage("هذا الحقل مطلوب",A)},granaryId:{required:U.withMessage("هذا الحقل مطلوب",A)}});let p=z(u,l);const x=async()=>{if(await p.value.$validate()){const n={supplierId:l.value.supplierId,granaryId:l.value.granaryId,creationFromDate:l.value.creationFromDate?S(l.value.creationFromDate).format("DD/MM/YYYY"):null,creationToDate:l.value.creationToDate?S(l.value.creationToDate).format("DD/MM/YYYY"):null,FromDate:l.value.FromDate?S(l.value.FromDate).format("DD/MM/YYYY"):null,ToDate:l.value.ToDate?S(l.value.ToDate).format("DD/MM/YYYY"):null};f("filterData",n)}};return B(()=>{d.doGetGranaries(0,1e4),m.doGetSuppliers(0,1e4)}),(I,n)=>{const _=D("v-autocomplete"),g=D("v-icon"),y=D("v-col"),Y=D("v-btn"),r=D("v-row");return h(),F("div",L,[o(r,{dir:"rtl",class:"pt-0"},{default:a(()=>[o(y,{cols:"12",sm:"6",md:"4",lg:"3"},{default:a(()=>[e("div",W,[J,e("div",K,[o(_,{"item-title":"name","item-value":"id",items:t(M).content,transition:"slide-y-transition",variant:"outlined","hide-details":"",modelValue:t(l).supplierId,"onUpdate:modelValue":n[0]||(n[0]=i=>t(l).supplierId=i),disabled:s.loading,placeholder:"اختر المورد",class:k(t(p).$errors.find(i=>i.$property=="supplierId")?"err_field":"")},null,8,["items","modelValue","disabled","class"]),o(g,{class:"position-absolute"},{default:a(()=>[v("mdi-account-cowboy-hat")]),_:1})]),t(p).$errors.find(i=>i.$property=="supplierId")?(h(),F("span",O,c(t(p).$errors.find(i=>i.$property=="supplierId").$message),1)):w("",!0)])]),_:1}),o(y,{cols:"12",sm:"6",md:"4",lg:"3"},{default:a(()=>[e("div",Q,[X,e("div",Z,[o(_,{"item-title":"name","item-value":"id",items:t(b).content,transition:"slide-y-transition",variant:"outlined",disabled:s.loading,"hide-details":"",modelValue:t(l).granaryId,"onUpdate:modelValue":n[1]||(n[1]=i=>t(l).granaryId=i),placeholder:"اختر الصومعة",class:k(t(p).$errors.find(i=>i.$property=="granaryId")?"err_field":"")},null,8,["items","disabled","modelValue","class"]),o(g,{class:"position-absolute"},{default:a(()=>[v("mdi-store-24-hour")]),_:1})]),t(p).$errors.find(i=>i.$property=="granaryId")?(h(),F("span",ee,c(t(p).$errors.find(i=>i.$property=="granaryId").$message),1)):w("",!0)])]),_:1}),o(y,{cols:"12",sm:"6",md:"4",lg:"3"},{default:a(()=>[e("div",te,[se,e("div",le,[V(e("input",{type:"datetime-local",name:"FromDate",id:"FromDate",disabled:s.loading,"onUpdate:modelValue":n[2]||(n[2]=i=>t(l).FromDate=i),style:{"padding-right":"0 !important"}},null,8,ae),[[C,t(l).FromDate]]),o(g,{class:"position-absolute"},{default:a(()=>[v("mdi-calendar")]),_:1})])])]),_:1}),o(y,{cols:"12",sm:"6",md:"4",lg:"3"},{default:a(()=>[e("div",oe,[ne,e("div",ie,[V(e("input",{type:"datetime-local",name:"ToDate","onUpdate:modelValue":n[3]||(n[3]=i=>t(l).ToDate=i),disabled:s.loading,id:"ToDate",style:{"padding-right":"0 !important"}},null,8,re),[[C,t(l).ToDate]]),o(g,{class:"position-absolute"},{default:a(()=>[v("mdi-calendar")]),_:1})])])]),_:1}),o(y,{cols:"12",sm:"6",md:"4",lg:"3",style:{display:"flex","align-items":"flex-end"},class:"pt-0"},{default:a(()=>[o(Y,{color:"blue",width:"100",height:"40",elevation:"0",onClick:x,class:"font-weight-bold",style:{"margin-bottom":"2px"},disabled:s.loading},{default:a(()=>[v("بحث")]),_:1},8,["disabled"])]),_:1})]),_:1})])}}},ue=de;const pe={class:"dues_supplier_payments"},ce={class:"w-100 text-right",dir:"rtl",style:{border:"1px solid rgb(179, 179, 179)","border-radius":"12px",padding:"13px",background:"#f0f0f0ba"}},me=e("th",{class:"pb-2"},"اسم المورد:",-1),_e={class:"pb-2"},ge=e("th",{class:"pb-2"},"اسم الصومعة:",-1),De={class:"pb-2"},ve=e("th",{class:"pb-2"},"المنتج:",-1),fe={class:"pb-2"},be=e("th",null,"الكمية الموردة:",-1),he=e("th",null,"اجمالي مبلغ التوريد:",-1),ye=e("tr",null,null,-1),$e={__name:"SupplierData",props:["supplierDues","selectedSupplier"],setup(s){return(f,d)=>(h(),F("div",pe,[e("table",ce,[e("tbody",null,[e("tr",null,[me,e("td",_e,c(s.selectedSupplier.supplier.name),1),ge,e("td",De,c(s.selectedSupplier.granary.name),1)]),e("tr",null,[ve,e("td",fe,c(s.supplierDues.productName),1),be,e("td",null,c(s.supplierDues.totalAmount),1)]),e("tr",null,[he,e("td",null,c(Math.round(s.supplierDues.totalPriceAfterDiscount)),1)]),ye])])]))}},xe=$e,Ie={class:"dashboard_banners_listing"},Se={class:"page_toolbar d-flex align-center justify-space-between"},Fe={class:"toolbar_btns"},Me=e("span",{class:"d-none"},null,-1),Te=e("br",null,null,-1),we=e("div",null,"لايوجد بيانات",-1),Ye={__name:"SupplierDues",props:["supplierDues","loading","suppliers","granaries","selectedSupplier"],emits:["regetItems","filterData"],setup(s,{emit:f}){const d=$(1),m=$(1e3),b=$([{title:"رقم",key:"index"},{title:"كمية التوريد",key:"totalClearWeight"},{title:"قيمة التوريد",key:"totalAfterDiscount"},{title:"تاريخ التوريد",key:"date"}]),M=[{title:"الرئيسية",disabled:!1,to:{name:"index"}},{title:"التقارير",to:{name:"reports"}},{title:"تقرير مستحقات الموردين",disabled:!0}];return G(()=>d.value,l=>{f("regetItems",{page:l,limit:m.value})}),G(()=>m.value,l=>{f("regetItems",{page:d.value,limit:l})}),(l,u)=>{const p=D("v-icon"),x=D("v-btn"),I=D("v-breadcrumbs"),n=ue,_=D("v-col"),g=xe,y=D("v-row"),Y=D("v-container");return h(),F("div",Ie,[e("div",Se,[e("div",Fe,[o(x,{width:"20",size:"sm",elevation:"0",color:"transparent"},{default:a(()=>[o(p,{color:"white",size:"25"},{default:a(()=>[v("mdi-printer")]),_:1})]),_:1})]),o(I,{items:M,dir:"rtl",class:"pa-0 mb"},{title:a(({item:r})=>[v(c(r.title.toUpperCase()),1)]),_:1})]),o(Y,{class:"page_container",fluid:""},{default:a(()=>[s.supplierDues?(h(),P(y,{key:0,class:"px-4 mt-1"},{default:a(()=>[o(_,{cols:"12",class:"px-0 py-0"},{default:a(()=>[o(n,{class:"mb-7",loading:s.loading,onFilterData:u[0]||(u[0]=r=>f("filterData",r))},null,8,["loading"])]),_:1}),s.supplierDues&&s.supplierDues.invoices?(h(),P(_,{key:0,cols:"12",class:"px-0 pt-0 mb-2"},{default:a(()=>[o(g,{supplierDues:s.supplierDues,selectedSupplier:s.selectedSupplier},null,8,["supplierDues","selectedSupplier"])]),_:1})):w("",!0),o(_,{cols:"12",class:"section_container dashboard_table pa-0"},{default:a(()=>[o(t(E),{headers:t(b),items:s.supplierDues&&s.supplierDues.invoices&&s.supplierDues.invoices.content?s.supplierDues.invoices.content:[],loading:s.loading,"items-per-page":t(m),"onUpdate:itemsPerPage":u[1]||(u[1]=r=>R(m)?m.value=r:null),page:t(d),"onUpdate:page":u[2]||(u[2]=r=>R(d)?d.value=r:null),"items-length":s.supplierDues.totalElements?s.supplierDues.totalElements:0,"no-data-text":"لايوجد بيانات","show-current-page":""},{bottom:a(()=>[Me]),loading:a(()=>[o(t(j),{type:"table-row@4"})]),"item.index":a(({item:r})=>[v(c(r.index+1),1)]),"item.totalAfterDiscount":a(({item:r})=>[v(c(Math.ceil(r.selectable.totalAfterDiscount)),1)]),"item.date":a(({item:r})=>[e("p",null,[v(c(t(S)(r.selectable.date).format("DD/MM/YYYY"))+" ",1),Te,v(" "+c(t(S)(r.selectable.date).format("hh:mm")),1)])]),"no-data":a(()=>[we]),_:1},8,["headers","items","loading","items-per-page","page","items-length"])]),_:1})]),_:1})):w("",!0)]),_:1})])}}},ke=Ye,Ve={class:"dashboard_tests_page mb-10"},Ne={__name:"index",setup(s){const f=H(),d=q(),m=N(),{supplierDues:b}=T(f),{granaries:M}=T(m),{suppliers:l}=T(d),u=$(!1),p=$({supplierId:null,granaryId:null,creationFromDate:null,creationToDate:null,FromDate:null,ToDate:null}),x=async(I,n,_)=>{u.value=!0,p.value=_||{supplierId:null,granaryId:null,creationFromDate:null,creationToDate:null,FromDate:null,ToDate:null},await f.doGetSupplierDues(I-1,n,p.value),u.value=!1};return B(()=>{b.value=[],d.doGetSuppliers(0,1e4),m.doGetGranaries(0,1e4)}),(I,n)=>{const _=ke;return h(),F("div",Ve,[o(_,{supplierDues:t(b),loading:t(u),granaries:t(M).content,suppliers:t(l).content,selectedSupplier:t(b).invoices?t(b).invoices.content[0]:{},onRegetItems:n[0]||(n[0]=g=>x(g.page,g.limit)),onFilterData:n[1]||(n[1]=g=>x(1,1e3,g))},null,8,["supplierDues","loading","granaries","suppliers","selectedSupplier"])])}}};export{Ne as default};