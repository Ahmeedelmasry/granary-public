import{I as G,r as b,c as R,z,o as B,f as m,k as v,l as P,q as s,s as o,m as l,C as e,D as S,v as u,t as $,F as w,B as U,E as L,H as T,J,K,G as Y}from"./entry.0a484266.js";import{h as N}from"./moment.a9aaa855.js";import{c as E}from"./clients.42385680.js";import{c as M,r as q,u as H,n as O,b as Q}from"./index.28147b1b.js";import{V as W,a as X}from"./VSkeletonLoader.ec353db9.js";import{g as Z}from"./granary.877d6f42.js";import{s as ee}from"./supplier.ec4415e2.js";const te={class:"supplierPaymentReportFilter"},le={class:"field_container"},oe=l("label",{for:"supplierId"},"اختر العميل",-1),ne={class:"input_parent position-relative"},se={key:0,class:"err_msg"},ae={class:"field_container"},ie=l("label",{for:"granaryId"},"اختر الصومعة",-1),re={class:"input_parent position-relative"},de={key:0,class:"err_msg"},ce={class:"field_container",dir:"rtl"},ue=l("label",{for:"FromDate"},"من",-1),pe={class:"input_parent position-relative"},me=["disabled"],_e={class:"field_container",dir:"rtl"},ve=l("label",{for:"ToDate"},"الي",-1),fe={class:"input_parent position-relative"},ge=["disabled"],ye={__name:"Filter",props:["loading","reFilter"],emits:["filterData","refiltered"],setup(r,{emit:x}){const _=r,h=E(),{clientLockup:I}=G(h),n=b({clientID:null,granaryId:null,FromDate:null,ToDate:null}),f=b({clientID:{required:M.withMessage("هذا الحقل مطلوب",q)},granaryId:{required:M.withMessage("هذا الحقل مطلوب",q)}});let d=H(f,n);const k=R(()=>n.value.clientID?I.value.find(y=>y.client.id==n.value.clientID).granaryList:[]);z(()=>_.reFilter,y=>{y&&(D(),x("refiltered"))});const D=async()=>{if(await d.value.$validate()){const t={clientID:n.value.clientID,granaryId:n.value.granaryId,FromDate:n.value.FromDate?N(n.value.FromDate).format("DD/MM/YYYY"):null,ToDate:n.value.ToDate?N(n.value.ToDate).format("DD/MM/YYYY"):null};x("filterData",t)}};return B(()=>{h.doGetClientsLockup()}),(y,t)=>{const c=m("v-autocomplete"),g=m("v-icon"),F=m("v-col"),C=m("v-btn"),V=m("v-row");return v(),P("div",te,[s(V,{dir:"rtl",class:"pt-0"},{default:o(()=>[s(F,{cols:"12",sm:"6",md:"4",lg:"3",class:"pt-0"},{default:o(()=>[l("div",le,[oe,l("div",ne,[s(c,{"item-title":"client.name","item-value":"client.id",items:e(I),transition:"slide-y-transition",variant:"outlined","hide-details":"",modelValue:e(n).clientID,"onUpdate:modelValue":t[0]||(t[0]=i=>e(n).clientID=i),placeholder:"اختر العميل",disabled:r.loading,class:S(e(d).$errors.find(i=>i.$property=="clientID")?"err_field":"")},null,8,["items","modelValue","disabled","class"]),s(g,{class:"position-absolute"},{default:o(()=>[u("mdi-account-cowboy-hat")]),_:1})]),e(d).$errors.find(i=>i.$property=="clientID")?(v(),P("span",se,$(e(d).$errors.find(i=>i.$property=="clientID").$message),1)):w("",!0)])]),_:1}),s(F,{cols:"12",sm:"6",md:"4",lg:"3",class:"py-0"},{default:o(()=>[l("div",ae,[ie,l("div",re,[s(c,{"item-title":"name","item-value":"id",items:e(k),transition:"slide-y-transition",variant:"outlined",disabled:r.loading,placeholder:"اختر الصومعة","hide-details":"",modelValue:e(n).granaryId,"onUpdate:modelValue":t[1]||(t[1]=i=>e(n).granaryId=i),class:S(e(d).$errors.find(i=>i.$property=="granaryId")?"err_field":"")},null,8,["items","disabled","modelValue","class"]),s(g,{class:"position-absolute"},{default:o(()=>[u("mdi-store-24-hour")]),_:1})]),e(d).$errors.find(i=>i.$property=="clientID")?(v(),P("span",de,$(e(d).$errors.find(i=>i.$property=="clientID").$message),1)):w("",!0)])]),_:1}),s(F,{cols:"12",sm:"6",md:"4",lg:"3",class:"py-0"},{default:o(()=>[l("div",ce,[ue,l("div",pe,[U(l("input",{type:"date",name:"FromDate",id:"FromDate",disabled:r.loading,"onUpdate:modelValue":t[2]||(t[2]=i=>e(n).FromDate=i),style:{"padding-right":"0 !important"}},null,8,me),[[L,e(n).FromDate]]),s(g,{class:"position-absolute"},{default:o(()=>[u("mdi-calendar")]),_:1})])])]),_:1}),s(F,{cols:"12",sm:"6",md:"4",lg:"3",class:"py-0"},{default:o(()=>[l("div",_e,[ve,l("div",fe,[U(l("input",{type:"datetime-local",name:"ToDate","onUpdate:modelValue":t[3]||(t[3]=i=>e(n).ToDate=i),disabled:r.loading,id:"ToDate",style:{"padding-right":"0 !important"}},null,8,ge),[[L,e(n).ToDate]]),s(g,{class:"position-absolute"},{default:o(()=>[u("mdi-calendar")]),_:1})])])]),_:1}),s(F,{cols:"12",sm:"6",md:"4",lg:"3",style:{display:"flex","align-items":"flex-end"},class:"pt-0"},{default:o(()=>[s(C,{color:"blue",width:"100",height:"40",elevation:"0",onClick:D,class:"font-weight-bold",style:{"margin-bottom":"2px"},disabled:r.loading},{default:o(()=>[u("بحث")]),_:1},8,["disabled"])]),_:1})]),_:1})])}}},be=ye,he={class:"pay_client_due"},De=l("thead",null,[l("tr",null,[l("th",{style:{"background-color":"#f3f3f3 !important"},class:"text-center font-weight-bold"}," تاريخ "),l("th",{style:{"background-color":"#f3f3f3 !important"},class:"text-center font-weight-bold"}," المبلغ المتبقي "),l("th",{style:{"background-color":"#f3f3f3 !important"},class:"text-center font-weight-bold"}," حالة الدفع ")])],-1),$e={style:{"font-size":"15px"}},xe={style:{"font-size":"15px"}},Ie={style:{"font-size":"15px"}},we={class:"pt-5"},ke=l("td",{style:{"font-weight":"bold","font-size":"18px"}},"الاجمالي",-1),Fe={style:{"font-weight":"bold","font-size":"18px"}},Pe=l("td",null,null,-1),Ve=l("td",null,null,-1),Te={class:"field_container pt-5"},Ce={class:"input_parent"},Me={key:0,class:"err_msg pt-2 d-block mb-0 pb-0"},Ge={class:"actions text-center mt-5"},Ye={__name:"PayNow",props:["openPopup","selected","selectedGranary"],emits:["closePopup","regetData"],setup(r,{emit:x}){const _=r,h=E(),I=b({paymentAmount:null}),n=b(!1),f=b(!1),d=R(()=>{let t=0;return _.selected&&_.selected.length&&_.selected.forEach(c=>t+=c.remaining),t}),k=R(()=>({paymentAmount:{required:M.withMessage("هذا الحقل مطلوب",q),numeric:M.withMessage("هذا الحقل يقبل ارقام فقط",O),between:M.withMessage(`قم بادخال رقم بين 1 و ${d.value}`,Q(1,d.value))}})),D=H(k,I),y=async()=>{if(await D.value.$validate()){const c={amountToPay:I.value.paymentAmount,duesDTOList:_.selected,granary:{id:_.selectedGranary}};f.value=!0;const g=await h.doPayClients(c);f.value=!1,g&&(x("regetData"),n.value=!1)}};return z(()=>n.value,t=>{t||setTimeout(()=>{x("closePopup")},200)}),B(()=>{n.value=_.openPopup}),(t,c)=>{const g=m("v-card-title"),F=m("v-chip"),C=m("v-table"),V=m("v-btn"),i=m("v-card"),A=m("v-dialog");return v(),P("div",he,[s(A,{modelValue:e(n),"onUpdate:modelValue":c[2]||(c[2]=p=>Y(n)?n.value=p:null),width:"800",persistent:""},{default:o(()=>[s(i,{class:"pb-5","max-height":"90vh"},{default:o(()=>[s(g,{class:"mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold",style:{"font-size":"22px"}},{default:o(()=>[u(" اضافة سدادات جديدة ")]),_:1}),r.selected&&r.selected.length?(v(),T(C,{key:0,class:"text-center w-100"},{default:o(()=>[De,(v(!0),P(J,null,K(r.selected,(p,j)=>(v(),P("tbody",{key:p.id},[l("tr",null,[l("td",$e,$(p.date),1),l("td",xe,$(p.remaining),1),l("td",Ie,[p.isFullPayed?(v(),T(F,{key:0,color:"green"},{default:o(()=>[u("مكتمل")]),_:1})):w("",!0),p.isFullPayed?w("",!0):(v(),T(F,{key:1,color:"red"},{default:o(()=>[u("غير مكتمل")]),_:1}))])])]))),128)),l("tfoot",null,[l("tr",we,[ke,l("td",Fe,$(e(d)),1),Pe]),l("tr",null,[Ve,l("td",null,[l("div",Te,[l("div",Ce,[U(l("input",{class:S(["px-0 text-center",e(D).$errors.find(p=>p.$property=="paymentAmount")?"err_field":""]),style:{width:"100%"},placeholder:"قم بادخال مبلغ السداد",type:"text","onUpdate:modelValue":c[0]||(c[0]=p=>e(I).paymentAmount=p)},null,2),[[L,e(I).paymentAmount]])]),e(D).$errors.find(p=>p.$property=="paymentAmount")?(v(),P("span",Me,$(e(D).$errors.find(p=>p.$property=="paymentAmount").$message),1)):w("",!0)])])])])]),_:1})):w("",!0),l("div",Ge,[s(V,{color:"red",class:"mr-3",onClick:c[1]||(c[1]=p=>n.value=!1),disabled:e(f)},{default:o(()=>[u("الغاء")]),_:1},8,["disabled"]),s(V,{color:"green",onClick:y,loading:e(f)},{default:o(()=>[u("دفع")]),_:1},8,["loading"])])]),_:1})]),_:1},8,["modelValue"])])}}},ze=Ye;const Ae={class:"dashboard_banners_listing"},Re={class:"page_toolbar d-flex align-center justify-space-between"},Se={class:"toolbar_btns"},Ue=l("span",{class:"d-none"},null,-1),Le=l("div",null,"لايوجد بيانات",-1),Ne={key:0,class:"text-end my-5 me-5"},qe={__name:"Invoices",props:["invoices","loading","suppliers","granaries"],emits:["regetItems","filterData"],setup(r,{emit:x}){const _=b(1),h=b(1e4),I=b([{title:"رقم",key:"index"},{title:"التاريخ",key:"date"},{title:"اجمالي الكمية",key:"totalQuantitySupplied"},{title:"اجمالي القيمة",key:"totalCompanyDues"},{title:"القيمة المدفوعة",key:"paied"},{title:"القيمة المتبقية",key:"remaining"},{title:"حالة الدفع",key:"isFullPayed"}]),n=[{title:"الرئيسية",disabled:!1,to:{name:"index"}},{title:"التقارير",to:{name:"reports"}},{title:"تقرير مستحقات العملاء",disabled:!0}],f=b([]),d=b(!1),k=b(!1),D=b("");return z(()=>_.value,y=>{x("regetItems",{page:y,limit:h.value})}),z(()=>h.value,y=>{x("regetItems",{page:_.value,limit:y})}),(y,t)=>{const c=m("v-icon"),g=m("v-btn"),F=m("v-breadcrumbs"),C=be,V=m("v-col"),i=m("v-chip"),A=m("v-row"),p=m("v-container"),j=ze;return v(),P("div",Ae,[l("div",Re,[l("div",Se,[s(g,{width:"20",size:"sm",elevation:"0",color:"transparent"},{default:o(()=>[s(c,{color:"white",size:"25"},{default:o(()=>[u("mdi-printer")]),_:1})]),_:1})]),s(F,{items:n,dir:"rtl",class:"pa-0 mb"},{title:o(({item:a})=>[u($(a.title.toUpperCase()),1)]),_:1})]),s(p,{class:"page_container",fluid:""},{default:o(()=>[r.invoices?(v(),T(A,{key:0,class:"px-4 mt-1"},{default:o(()=>[s(V,{cols:"12",class:"px-0"},{default:o(()=>[s(C,{class:"mb-7",loading:r.loading,onFilterData:t[0]||(t[0]=a=>(D.value=a.granaryId,f.value=[],x("filterData",a))),reFilter:e(k),onRefiltered:t[1]||(t[1]=a=>(k.value=!1,f.value=[]))},null,8,["loading","reFilter"])]),_:1}),s(V,{cols:"12",class:"section_container dashboard_table pa-0"},{default:o(()=>[s(e(W),{headers:e(I),items:r.invoices.content,loading:r.loading,"items-per-page":e(h),"onUpdate:itemsPerPage":t[2]||(t[2]=a=>Y(h)?h.value=a:null),modelValue:e(f),"onUpdate:modelValue":t[3]||(t[3]=a=>Y(f)?f.value=a:null),page:e(_),"onUpdate:page":t[4]||(t[4]=a=>Y(_)?_.value=a:null),"items-length":r.invoices.totalElements?r.invoices.totalElements:0,"no-data-text":"لايوجد بيانات","show-current-page":"",id:"clients_payments","return-object":"","show-select":!!(r.invoices.content&&r.invoices.content.length)},{bottom:o(()=>[Ue]),loading:o(()=>[s(e(X),{type:"table-row@4"})]),"item.index":o(({item:a})=>[u($(a.index+1),1)]),"item.isFullPayed":o(({item:a})=>[a.selectable.isFullPayed?(v(),T(i,{key:0,color:"green",label:""},{default:o(()=>[u("مدفوع بالكامل")]),_:1})):w("",!0),a.selectable.isFullPayed?w("",!0):(v(),T(i,{key:1,color:"red",label:""},{default:o(()=>[u("غير مكتمل")]),_:1}))]),"item.invoiceDate":o(({item:a})=>[l("p",null,$(e(N)(a.selectable.date).format("DD/MM/YYYY")),1)]),"item.productDetails":o(({item:a})=>[u($(a.selectable.product.name)+" / "+$(a.selectable.productType.name),1)]),"item.totalInvoicePrice":o(({item:a})=>[u($(a.selectable.totalPrice.toLocaleString()),1)]),"item.totalInvoicePriceAfterDiscount":o(({item:a})=>[u($(a.selectable.totalAfterDiscount.toLocaleString()),1)]),"no-data":o(()=>[Le]),_:1},8,["headers","items","loading","items-per-page","modelValue","page","items-length","show-select"]),e(f).length?(v(),P("div",Ne,[s(g,{color:"green",onClick:t[5]||(t[5]=a=>d.value=!0)},{default:o(()=>[u("دفع")]),_:1})])):w("",!0)]),_:1})]),_:1})):w("",!0)]),_:1}),e(d)?(v(),T(j,{key:0,openPopup:e(d),onClosePopup:t[6]||(t[6]=a=>d.value=!1),selected:e(f),onRegetData:t[7]||(t[7]=a=>k.value=!0),selectedGranary:e(D)},null,8,["openPopup","selected","selectedGranary"])):w("",!0)])}}},Be=qe,Ee={class:"dashboard_clients_payments mb-10"},Xe={__name:"index",setup(r){const x=E(),_=ee(),h=Z(),{clientInvoices:I}=G(x),{granaries:n}=G(h),{suppliers:f}=G(_),d=b(!1),k=b({clientID:null,granaryId:null,FromDate:null,ToDate:null}),D=async(y,t,c)=>{d.value=!0,k.value=c||{clientID:null,granaryId:null,FromDate:null,ToDate:null},await x.doGetClientInvoices(y-1,t,k.value),d.value=!1};return B(()=>{I.value=[],_.doGetSuppliers(0,1e4),h.doGetGranaries(0,1e4)}),(y,t)=>{const c=Be;return v(),P("div",Ee,[s(c,{invoices:e(I),loading:e(d),granaries:e(n).content,suppliers:e(f).content,onRegetItems:t[0]||(t[0]=g=>D(g.page,g.limit)),onFilterData:t[1]||(t[1]=g=>D(1,1e3,g))},null,8,["invoices","loading","granaries","suppliers"])])}}};export{Xe as default};