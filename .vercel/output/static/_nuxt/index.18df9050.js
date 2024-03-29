import{I as G,r as h,c as S,z,o as B,f as m,k as v,l as P,q as a,s as o,m as l,C as e,D as U,v as d,t as b,F as w,B as L,E as N,H as T,J,K,G as Y}from"./entry.d2eac3d2.js";import{h as A}from"./moment.a9aaa855.js";import{c as E}from"./clients.811b60cb.js";import{c as M,r as q,u as H,n as O,b as Q}from"./index.edcb52a9.js";import{V as W,a as X}from"./VSkeletonLoader.d47c2c61.js";import{g as Z}from"./granary.cc76c106.js";import{s as ee}from"./supplier.895df033.js";const te={class:"supplierPaymentReportFilter"},le={class:"field_container"},oe=l("label",{for:"supplierId"},"اختر العميل",-1),ne={class:"input_parent position-relative"},se={key:0,class:"err_msg"},ae={class:"field_container"},ie=l("label",{for:"granaryId"},"اختر الصومعة",-1),re={class:"input_parent position-relative"},de={key:0,class:"err_msg"},ce={class:"field_container",dir:"rtl"},ue=l("label",{for:"FromDate"},"من",-1),pe={class:"input_parent position-relative"},me=["disabled"],_e={class:"field_container",dir:"rtl"},ve=l("label",{for:"ToDate"},"الي",-1),fe={class:"input_parent position-relative"},ge=["disabled"],ye={__name:"Filter",props:["loading","reFilter"],emits:["filterData","refiltered"],setup(r,{emit:x}){const _=r,D=E(),{clientLockup:I}=G(D),n=h({clientID:null,granaryId:null,FromDate:null,ToDate:null}),f=h({clientID:{required:M.withMessage("هذا الحقل مطلوب",q)},granaryId:{required:M.withMessage("هذا الحقل مطلوب",q)}});let c=H(f,n);const k=S(()=>n.value.clientID?I.value.find(y=>y.client.id==n.value.clientID).granaryList:[]);z(()=>_.reFilter,y=>{y&&($(),x("refiltered"))});const $=async()=>{if(await c.value.$validate()){const t={clientID:n.value.clientID,granaryId:n.value.granaryId,FromDate:n.value.FromDate?A(n.value.FromDate).format("DD/MM/YYYY"):null,ToDate:n.value.ToDate?A(n.value.ToDate).format("DD/MM/YYYY"):null};x("filterData",t)}};return B(()=>{D.doGetClientsLockup()}),(y,t)=>{const u=m("v-autocomplete"),g=m("v-icon"),F=m("v-col"),C=m("v-btn"),V=m("v-row");return v(),P("div",te,[a(V,{dir:"rtl",class:"pt-0"},{default:o(()=>[a(F,{cols:"12",sm:"6",md:"4",lg:"3",class:"pt-0"},{default:o(()=>[l("div",le,[oe,l("div",ne,[a(u,{"item-title":"client.name","item-value":"client.id",items:e(I),transition:"slide-y-transition",variant:"outlined","hide-details":"",modelValue:e(n).clientID,"onUpdate:modelValue":t[0]||(t[0]=i=>e(n).clientID=i),placeholder:"اختر العميل",disabled:r.loading,class:U(e(c).$errors.find(i=>i.$property=="clientID")?"err_field":"")},null,8,["items","modelValue","disabled","class"]),a(g,{class:"position-absolute"},{default:o(()=>[d("mdi-account-cowboy-hat")]),_:1})]),e(c).$errors.find(i=>i.$property=="clientID")?(v(),P("span",se,b(e(c).$errors.find(i=>i.$property=="clientID").$message),1)):w("",!0)])]),_:1}),a(F,{cols:"12",sm:"6",md:"4",lg:"3",class:"py-0"},{default:o(()=>[l("div",ae,[ie,l("div",re,[a(u,{"item-title":"name","item-value":"id",items:e(k),transition:"slide-y-transition",variant:"outlined",disabled:r.loading,placeholder:"اختر الصومعة","hide-details":"",modelValue:e(n).granaryId,"onUpdate:modelValue":t[1]||(t[1]=i=>e(n).granaryId=i),class:U(e(c).$errors.find(i=>i.$property=="granaryId")?"err_field":"")},null,8,["items","disabled","modelValue","class"]),a(g,{class:"position-absolute"},{default:o(()=>[d("mdi-store-24-hour")]),_:1})]),e(c).$errors.find(i=>i.$property=="clientID")?(v(),P("span",de,b(e(c).$errors.find(i=>i.$property=="clientID").$message),1)):w("",!0)])]),_:1}),a(F,{cols:"12",sm:"6",md:"4",lg:"3",class:"py-0"},{default:o(()=>[l("div",ce,[ue,l("div",pe,[L(l("input",{type:"datetime-local",name:"FromDate",id:"FromDate",disabled:r.loading,"onUpdate:modelValue":t[2]||(t[2]=i=>e(n).FromDate=i),style:{"padding-right":"0 !important"}},null,8,me),[[N,e(n).FromDate]]),a(g,{class:"position-absolute"},{default:o(()=>[d("mdi-calendar")]),_:1})])])]),_:1}),a(F,{cols:"12",sm:"6",md:"4",lg:"3",class:"py-0"},{default:o(()=>[l("div",_e,[ve,l("div",fe,[L(l("input",{type:"datetime-local",name:"ToDate","onUpdate:modelValue":t[3]||(t[3]=i=>e(n).ToDate=i),disabled:r.loading,id:"ToDate",style:{"padding-right":"0 !important"}},null,8,ge),[[N,e(n).ToDate]]),a(g,{class:"position-absolute"},{default:o(()=>[d("mdi-calendar")]),_:1})])])]),_:1}),a(F,{cols:"12",sm:"6",md:"4",lg:"3",style:{display:"flex","align-items":"flex-end"},class:"pt-0"},{default:o(()=>[a(C,{color:"blue",width:"100",height:"40",elevation:"0",onClick:$,class:"font-weight-bold",style:{"margin-bottom":"2px"},disabled:r.loading},{default:o(()=>[d("بحث")]),_:1},8,["disabled"])]),_:1})]),_:1})])}}},be=ye,he={class:"pay_client_due"},De=l("thead",null,[l("tr",null,[l("th",{style:{"background-color":"#f3f3f3 !important"},class:"text-center font-weight-bold"}," تاريخ "),l("th",{style:{"background-color":"#f3f3f3 !important"},class:"text-center font-weight-bold"}," الكمية المتبقية "),l("th",{style:{"background-color":"#f3f3f3 !important"},class:"text-center font-weight-bold"}," حالة الدفع ")])],-1),$e={style:{"font-size":"15px"}},xe={style:{"font-size":"15px"}},Ie={style:{"font-size":"15px"}},we={class:"pt-5"},ke=l("td",{style:{"font-weight":"bold","font-size":"18px"}},"الاجمالي",-1),Fe={style:{"font-weight":"bold","font-size":"18px"}},Pe=l("td",null,null,-1),Ve=l("td",null,null,-1),Te={class:"field_container pt-5"},Ce={class:"input_parent"},Me={key:0,class:"err_msg pt-2 d-block mb-0 pb-0"},Ge={class:"actions text-center mt-5"},Ye={__name:"PayNow",props:["openPopup","selected","selectedGranary"],emits:["closePopup","regetData"],setup(r,{emit:x}){const _=r,D=E(),I=h({paymentAmount:null}),n=h(!1),f=h(!1),c=S(()=>{let t=0;return _.selected&&_.selected.length&&_.selected.forEach(u=>t+=u.remaining),t}),k=S(()=>({paymentAmount:{required:M.withMessage("هذا الحقل مطلوب",q),numeric:M.withMessage("هذا الحقل يقبل ارقام فقط",O),between:M.withMessage(`قم بادخال رقم بين 1 و ${c.value}`,Q(1,c.value))}})),$=H(k,I),y=async()=>{if(await $.value.$validate()){const u={amountToPay:I.value.paymentAmount,duesDTOList:_.selected,granary:{id:_.selectedGranary}};f.value=!0;const g=await D.doPayClients(u);f.value=!1,g&&(x("regetData"),n.value=!1)}};return z(()=>n.value,t=>{t||setTimeout(()=>{x("closePopup")},200)}),B(()=>{n.value=_.openPopup}),(t,u)=>{const g=m("v-card-title"),F=m("v-chip"),C=m("v-table"),V=m("v-btn"),i=m("v-card"),R=m("v-dialog");return v(),P("div",he,[a(R,{modelValue:e(n),"onUpdate:modelValue":u[2]||(u[2]=p=>Y(n)?n.value=p:null),width:"800",persistent:""},{default:o(()=>[a(i,{class:"pb-5","max-height":"90vh"},{default:o(()=>[a(g,{class:"mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold",style:{"font-size":"22px"}},{default:o(()=>[d(" اضافة مدفوعات جديدة ")]),_:1}),r.selected&&r.selected.length?(v(),T(C,{key:0,class:"text-center w-100"},{default:o(()=>[De,(v(!0),P(J,null,K(r.selected,(p,j)=>(v(),P("tbody",{key:p.id},[l("tr",null,[l("td",$e,b(p.date),1),l("td",xe,b(p.remaining),1),l("td",Ie,[p.isFullPayed?(v(),T(F,{key:0,color:"green"},{default:o(()=>[d("مكتمل")]),_:1})):w("",!0),p.isFullPayed?w("",!0):(v(),T(F,{key:1,color:"red"},{default:o(()=>[d("غير مكتمل")]),_:1}))])])]))),128)),l("tfoot",null,[l("tr",we,[ke,l("td",Fe,b(e(c)),1),Pe]),l("tr",null,[Ve,l("td",null,[l("div",Te,[l("div",Ce,[L(l("input",{class:U(["px-0 text-center",e($).$errors.find(p=>p.$property=="paymentAmount")?"err_field":""]),style:{width:"100%"},placeholder:"قم بادخال مبلغ السداد",type:"text","onUpdate:modelValue":u[0]||(u[0]=p=>e(I).paymentAmount=p)},null,2),[[N,e(I).paymentAmount]])]),e($).$errors.find(p=>p.$property=="paymentAmount")?(v(),P("span",Me,b(e($).$errors.find(p=>p.$property=="paymentAmount").$message),1)):w("",!0)])])])])]),_:1})):w("",!0),l("div",Ge,[a(V,{color:"red",class:"mr-3",onClick:u[1]||(u[1]=p=>n.value=!1),disabled:e(f)},{default:o(()=>[d("الغاء")]),_:1},8,["disabled"]),a(V,{color:"green",onClick:y,loading:e(f)},{default:o(()=>[d("دفع")]),_:1},8,["loading"])])]),_:1})]),_:1},8,["modelValue"])])}}},ze=Ye;const Ae={class:"dashboard_banners_listing"},Re={class:"page_toolbar d-flex align-center justify-space-between"},Se={class:"toolbar_btns"},Ue=l("span",{class:"d-none"},null,-1),Le=l("br",null,null,-1),Ne=l("div",null,"لايوجد بيانات",-1),qe={key:0,class:"text-end my-5 me-5"},Be={__name:"Invoices",props:["invoices","loading","suppliers","granaries"],emits:["regetItems","filterData"],setup(r,{emit:x}){const _=h(1),D=h(1e4),I=h([{title:"رقم",key:"index"},{title:"التاريخ",key:"date"},{title:"اجمالي الكمية",key:"totalQuantitySupplied"},{title:"اجمالي القيمة",key:"totalCompanyDues"},{title:"القيمة المدفوعة",key:"paied"},{title:"القيمة المتبقية",key:"remaining"},{title:"حالة الدفع",key:"isFullPayed"}]),n=[{title:"الرئيسية",disabled:!1,to:{name:"index"}},{title:"التقارير",to:{name:"reports"}},{title:"تقرير مستحقات العملاء",disabled:!0}],f=h([]),c=h(!1),k=h(!1),$=h("");return z(()=>_.value,y=>{x("regetItems",{page:y,limit:D.value})}),z(()=>D.value,y=>{x("regetItems",{page:_.value,limit:y})}),(y,t)=>{const u=m("v-icon"),g=m("v-btn"),F=m("v-breadcrumbs"),C=be,V=m("v-col"),i=m("v-chip"),R=m("v-row"),p=m("v-container"),j=ze;return v(),P("div",Ae,[l("div",Re,[l("div",Se,[a(g,{width:"20",size:"sm",elevation:"0",color:"transparent"},{default:o(()=>[a(u,{color:"white",size:"25"},{default:o(()=>[d("mdi-printer")]),_:1})]),_:1})]),a(F,{items:n,dir:"rtl",class:"pa-0 mb"},{title:o(({item:s})=>[d(b(s.title.toUpperCase()),1)]),_:1})]),a(p,{class:"page_container",fluid:""},{default:o(()=>[r.invoices?(v(),T(R,{key:0,class:"px-4 mt-1"},{default:o(()=>[a(V,{cols:"12",class:"px-0"},{default:o(()=>[a(C,{class:"mb-7",loading:r.loading,onFilterData:t[0]||(t[0]=s=>($.value=s.granaryId,f.value=[],x("filterData",s))),reFilter:e(k),onRefiltered:t[1]||(t[1]=s=>(k.value=!1,f.value=[]))},null,8,["loading","reFilter"])]),_:1}),a(V,{cols:"12",class:"section_container dashboard_table pa-0"},{default:o(()=>[a(e(W),{headers:e(I),items:r.invoices.content,loading:r.loading,"items-per-page":e(D),"onUpdate:itemsPerPage":t[2]||(t[2]=s=>Y(D)?D.value=s:null),modelValue:e(f),"onUpdate:modelValue":t[3]||(t[3]=s=>Y(f)?f.value=s:null),page:e(_),"onUpdate:page":t[4]||(t[4]=s=>Y(_)?_.value=s:null),"items-length":r.invoices.totalElements?r.invoices.totalElements:0,"no-data-text":"لايوجد بيانات","show-current-page":"",id:"clients_payments","return-object":"","show-select":!!(r.invoices.content&&r.invoices.content.length)},{bottom:o(()=>[Ue]),loading:o(()=>[a(e(X),{type:"table-row@4"})]),"item.index":o(({item:s})=>[d(b(s.index+1),1)]),"item.isFullPayed":o(({item:s})=>[s.selectable.isFullPayed?(v(),T(i,{key:0,color:"green",label:""},{default:o(()=>[d("مدفوع بالكامل")]),_:1})):w("",!0),s.selectable.isFullPayed?w("",!0):(v(),T(i,{key:1,color:"red",label:""},{default:o(()=>[d("غير مكتمل")]),_:1}))]),"item.invoiceDate":o(({item:s})=>[l("p",null,[d(b(e(A)(s.selectable.date).format("DD/MM/YYYY"))+" ",1),Le,d(" "+b(e(A)(s.selectable.date).format("hh:mm")),1)])]),"item.productDetails":o(({item:s})=>[d(b(s.selectable.product.name)+" / "+b(s.selectable.productType.name),1)]),"item.totalInvoicePrice":o(({item:s})=>[d(b(s.selectable.totalPrice.toLocaleString()),1)]),"item.totalInvoicePriceAfterDiscount":o(({item:s})=>[d(b(s.selectable.totalAfterDiscount.toLocaleString()),1)]),"no-data":o(()=>[Ne]),_:1},8,["headers","items","loading","items-per-page","modelValue","page","items-length","show-select"]),e(f).length?(v(),P("div",qe,[a(g,{color:"green",onClick:t[5]||(t[5]=s=>c.value=!0)},{default:o(()=>[d("دفع")]),_:1})])):w("",!0)]),_:1})]),_:1})):w("",!0)]),_:1}),e(c)?(v(),T(j,{key:0,openPopup:e(c),onClosePopup:t[6]||(t[6]=s=>c.value=!1),selected:e(f),onRegetData:t[7]||(t[7]=s=>k.value=!0),selectedGranary:e($)},null,8,["openPopup","selected","selectedGranary"])):w("",!0)])}}},Ee=Be,je={class:"dashboard_clients_payments mb-10"},Ze={__name:"index",setup(r){const x=E(),_=ee(),D=Z(),{clientInvoices:I}=G(x),{granaries:n}=G(D),{suppliers:f}=G(_),c=h(!1),k=h({clientID:null,granaryId:null,FromDate:null,ToDate:null}),$=async(y,t,u)=>{c.value=!0,k.value=u||{clientID:null,granaryId:null,FromDate:null,ToDate:null},await x.doGetClientInvoices(y-1,t,k.value),c.value=!1};return B(()=>{I.value=[],_.doGetSuppliers(0,1e4),D.doGetGranaries(0,1e4)}),(y,t)=>{const u=Ee;return v(),P("div",je,[a(u,{invoices:e(I),loading:e(c),granaries:e(n).content,suppliers:e(f).content,onRegetItems:t[0]||(t[0]=g=>$(g.page,g.limit)),onFilterData:t[1]||(t[1]=g=>$(1,1e3,g))},null,8,["invoices","loading","granaries","suppliers"])])}}};export{Ze as default};
