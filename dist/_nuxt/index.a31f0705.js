import{J as Y,r as T,c as C,z as ie,o as pe,f as v,k as _,l as y,q as s,s as a,v as u,t as d,A as be,m as e,C as t,D as k,F as h,M as ye,B as z,E as j,I as L,G as X,H as $e}from"./entry.9ac21750.js";import{g as We}from"./granary.552dc71b.js";import{c as Pe}from"./clients.efb1b936.js";import{p as xe}from"./products.a76212ab.js";import{s as ke}from"./supplier.33ca5a1d.js";import{p as we}from"./units.ba515e4a.js";import{t as Te}from"./taxes.0edbe050.js";import{i as _e}from"./invoices.989a2bdd.js";import{h as ae}from"./moment.a9aaa855.js";import{c as m,r as w,m as ue,n as Z,b as ee,u as Ne}from"./index.7c7e0372.js";import{V as Me,a as Ue}from"./VSkeletonLoader.f41b8ad8.js";const Ve={class:"update_banner"},De=e("h3",{style:{"font-size":"23px","font-weight":"700"}},"بيانات اساسية",-1),Fe={class:"field_container"},Ae=e("label",{for:"granary"},"الصومعة",-1),Ie={class:"input_parent position-relative"},Ce={key:0,class:"err_msg"},ze={class:"field_container"},Se=e("label",{for:"supplier"},"المورد",-1),Oe={class:"input_parent position-relative"},qe=e("div",{class:"d-flex ps-4 pe-2 py-2",style:{"justify-content":"space-between"}},[e("span",null,"الاسم"),e("span",null,"الكود")],-1),je={key:0,class:"err_msg"},Ye={class:"field_container"},Le=e("label",{for:"documentNumber"},"رقم المستند",-1),Ge={class:"input_parent position-relative"},Ke={key:0,class:"err_msg"},Ee={class:"field_container"},Be=e("label",{for:"carNumber"},"رقم السيارة",-1),Re={class:"input_parent position-relative"},Je={key:0,class:"err_msg"},He={class:"field_container"},Qe=e("label",{for:"date"},"التاريخ",-1),Xe={class:"input_parent position-relative"},Ze={key:0,class:"err_msg"},et=e("h3",{style:{"font-size":"23px","font-weight":"700"}},"بيانات المنتج",-1),tt={class:"field_container"},ot=e("label",{for:"product"},"المنتج",-1),st={class:"input_parent position-relative"},it={key:0,class:"err_msg"},at={class:"field_container"},lt=e("label",{for:"productType"},"الفرز",-1),nt={class:"input_parent position-relative"},rt={key:0,class:"err_msg"},dt={class:"field_container"},ct=e("label",{for:"carWeightWith"},"الوزن القائم",-1),ut={class:"input_parent position-relative"},pt={key:0,class:"err_msg"},_t={class:"field_container"},mt=e("label",{for:"carWeightWithOut"},"الوزن الفارغ",-1),gt={class:"input_parent position-relative"},ht={key:0,class:"err_msg"},vt={class:"field_container"},ft=e("label",{for:"typeName"},"صافي الوزن",-1),bt={class:"input_parent position-relative"},yt=["value"],$t=e("h3",{style:{"font-size":"23px","font-weight":"700"}}," بيانات التعبئة ",-1),Wt={class:"field_container"},Pt=e("label",{for:"productUnit"},"وحدة التعبئة",-1),xt={class:"input_parent position-relative"},kt={key:0,class:"err_msg"},wt={class:"field_container"},Tt=e("label",{for:"totalPackingWeight"},"اجمالي وزن الوحدات",-1),Nt={class:"input_parent position-relative"},Mt={key:0,class:"err_msg"},Ut={class:"field_container"},Vt=e("label",{for:"typeName"},"الصافي بعد خصم وزن الوحدات",-1),Dt={class:"input_parent position-relative"},Ft=["value"],At=e("h3",{style:{"font-size":"23px","font-weight":"700"}}," بيانات الخصومات ",-1),It={class:"field_container"},Ct=e("label",{for:"agingPricePerTon"},"سعر التعتيق",-1),zt={class:"input_parent position-relative"},St={key:0,class:"err_msg"},Ot={class:"field_container"},qt=e("label",{for:"totalPackingWeight"},"اجمالي التعتيق",-1),jt={class:"input_parent position-relative"},Yt=["value"],Lt={class:"field_container"},Gt=e("label",{for:"totalPackingWeight"},"ضريبة دمغة",-1),Kt={class:"input_parent position-relative"},Et=["value"],Bt={class:"field_container"},Rt=e("label",{for:"totalPackingWeight"},"ضريبة مهن زراعية",-1),Jt={class:"input_parent position-relative"},Ht=["value"],Qt={class:"field_container"},Xt=e("label",{for:"totalPackingWeight"},"اجمالي الخصم",-1),Zt={class:"input_parent position-relative"},eo=["value"],to=e("h3",{style:{"font-size":"23px","font-weight":"700"}}," القيم النهائية ",-1),oo={class:"field_container"},so=e("label",{for:"totalPackingWeight"},"القيمة قبل الخصم",-1),io={class:"input_parent position-relative"},ao=["value"],lo={class:"field_container"},no=e("label",{for:"totalPackingWeight"},"القيمة بعد الخصم",-1),ro={class:"input_parent position-relative"},co=["value"],uo={class:"field_container"},po=e("label",{for:"totalPackingWeight"},"القيمة بعد الخصم والتعتيق",-1),_o={class:"input_parent position-relative"},mo=["value"],go={class:"actions text-center mt-7"},ho={__name:"Update",props:["openPopup","toUpdate"],emits:["closePopup","regetData"],setup(P,{emit:M}){const F=P,N=We(),V=Pe(),A=ke(),f=xe(),$=we(),S=Te(),te=_e(),{granaries:G}=Y(N),{clients:R}=Y(V),{suppliers:x}=Y(A),{products:p}=Y(f),{productUnits:K}=Y($),{taxes:O}=Y(S),i=T({granary:null,documentNumber:null,carNumber:null,supplier:null,date:ae(new Date).format("YYYY-MM-DD"),product:null,productType:null,productMeasuringUnit:null,carWeightWith:null,carWeightWithOut:null,productUnit:null,totalPackingWeight:null,agingPricePerTon:0}),I=T(!1),E=T(!1),oe=T({granary:{required:m.withMessage("هذا الحقل مطلوب",w)},documentNumber:{required:m.withMessage("هذا الحقل مطلوب",w),minLength:m.withMessage("يجب ادخال اكثر من 3 مدخلات",ue(3))},carNumber:{required:m.withMessage("هذا الحقل مطلوب",w),minLength:m.withMessage("يجب ادخال اكثر من 3 مدخلات",ue(3))},supplier:{required:m.withMessage("هذا الحقل مطلوب",w)},date:{required:m.withMessage("هذا الحقل مطلوب",w)},product:{required:m.withMessage("هذا الحقل مطلوب",w)},productType:{required:m.withMessage("هذا الحقل مطلوب",w)},carWeightWith:{required:m.withMessage("هذا الحقل مطلوب",w),numeric:m.withMessage("هذا الحقل يقبل ارقام فقط",Z),between:m.withMessage("يجب ان يكون الرقم اكبر من 0",ee(1,1e7))},carWeightWithOut:{required:m.withMessage("هذا الحقل مطلوب",w),numeric:m.withMessage("هذا الحقل يقبل ارقام فقط",Z),between:m.withMessage("يجب ان يكون الرقم اكبر من 0",ee(1,1e7))},productUnit:{required:m.withMessage("هذا الحقل مطلوب",w)},totalPackingWeight:{required:m.withMessage("هذا الحقل مطلوب",w),numeric:m.withMessage("هذا الحقل يقبل ارقام فقط",Z),between:m.withMessage("يجب ان يكون الرقم اكبر من 0",ee(1,1e7))},agingPricePerTon:{required:m.withMessage("هذا الحقل مطلوب",w),numeric:m.withMessage("هذا الحقل يقبل ارقام فقط",Z),between:m.withMessage("يجب ان يكون الرقم اكبر من او يساوي 0",ee(0,1e7))}}),se=C(()=>i.value.product?i.value.product.typePriceList:[]),B=C(()=>Number(i.value.carWeightWith)&&Number(i.value.carWeightWithOut)?parseFloat(i.value.carWeightWith)-parseFloat(i.value.carWeightWithOut):0),b=C(()=>B.value>0&&Number(i.value.totalPackingWeight)?parseFloat(B.value)-parseFloat(i.value.totalPackingWeight):0),q=C(()=>Number(i.value.agingPricePerTon)&&Number(b.value)?Math.ceil(parseFloat(b.value)/1e3*parseFloat(i.value.agingPricePerTon)):0),r=C(()=>{const W={docTax:0,agroTax:0};return O.value.content&&O.value.content.length&&(W.docTax=O.value.content.find(n=>n.name=="ضريبة دمغة"),W.agroTax=O.value.content.find(n=>n.name=="مهن زراعية")),W}),le=C(()=>{if(Number(b.value)){const W=Number(b.value)/i.value.productType.weightPerArdab;return Math.ceil(W)}return 0}),D=C(()=>{if(Number(b.value)){const W=le.value*r.value.agroTax.value;return(r.value.docTax.value+W).toFixed(2)}return 0});ie(()=>I.value,W=>{W||setTimeout(()=>{M("closePopup")},200)});let l=Ne(oe,i);const me=async()=>{if(await l.value.$validate()){E.value=!0;const n={granary:{id:i.value.granary.id},supplier:{id:i.value.supplier.id},documentNumber:i.value.documentNumber,carNumber:i.value.carNumber,product:{id:i.value.product.id},productType:{id:i.value.productType.productType.id},productPricePerKilo:parseFloat(i.value.productType.pricePerKilo),carWeightWith:parseFloat(i.value.carWeightWith),carWeightWithOut:parseFloat(i.value.carWeightWithOut),totalWeightFromCar:B.value,packageUnit:{id:i.value.productUnit.id},totalPackingWeight:parseFloat(i.value.totalPackingWeight),totalClearWeight:b.value,agingPricePerTon:parseFloat(i.value.agingPricePerTon),totalAgingPrice:q.value,formPrice:r.value.docTax.value,pricePerArdab:r.value.agroTax.value,totalArdab:le.value,totalPrice:(b.value*parseFloat(i.value.productType.pricePerKilo)).toFixed(2),totalDiscount:parseFloat(D.value).toFixed(2),totalDiscountWithAging:(parseFloat(D.value)+parseFloat(q.value)).toFixed(2),totalAfterDiscount:parseFloat(b.value*parseFloat(i.value.productType.pricePerKilo)-D.value).toFixed(2),totalAfterDiscountWithAging:parseFloat(b.value*parseFloat(i.value.productType.pricePerKilo)-D.value-q.value).toFixed(2),date:ae(new Date(i.value.date)).format("DD-MM-YYYY")};await te.doAddInvoice(n)&&(localStorage.setItem("selectedItems",JSON.stringify({granary:i.value.granary,product:i.value.product,date:i.value.date,unit:i.value.productUnit})),M("regetData"),l.value.$reset(),i.value.documentNumber=null,i.value.carNumber=null,i.value.supplier=null,i.value.productMeasuringUnit=null,i.value.carWeightWith=null,i.value.carWeightWithOut=null,i.value.totalPackingWeight=null,i.value.agingPricePerTon=null),E.value=!1}};return pe(()=>{if(V.doGetClients(0,1e4),N.doGetGranaries(0,1e4),A.doGetSuppliers(0,1e4),f.doGetProducts(0,1e4),$.doGetProductUnits(0,1e4),S.doGetTaxes(0,1e4),localStorage.getItem("selectedItems")){const W=JSON.parse(localStorage.getItem("selectedItems"));i.value.granary=W.granary,i.value.product=W.product,i.value.date=W.date,i.value.productUnit=W.unit}I.value=F.openPopup}),(W,n)=>{const ne=v("v-card-title"),U=v("v-divider"),c=v("v-col"),J=v("v-autocomplete"),g=v("v-icon"),re=v("v-list-item"),H=v("v-row"),ge=v("v-container"),de=v("v-btn"),he=v("v-form"),ve=v("v-card"),fe=v("v-dialog");return _(),y("div",Ve,[s(fe,{modelValue:t(I),"onUpdate:modelValue":n[14]||(n[14]=o=>X(I)?I.value=o:null),fullscreen:!0},{default:a(()=>[s(ve,{style:{"border-radius":"unset !important"}},{default:a(()=>[s(ne,{class:"mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold",style:{"font-size":"22px"}},{default:a(()=>[u(d(P.toUpdate?"تعديل فاتورة توريد":"اضافة فاتورة توريد"),1)]),_:1}),s(he,{class:"pa-5",onSubmit:be(me,["prevent"])},{default:a(()=>[s(ge,{fluid:""},{default:a(()=>[s(H,{dir:"rtl"},{default:a(()=>[s(c,{cols:"12"},{default:a(()=>[De,s(U),s(U)]),_:1}),s(c,{cols:"12",sm:"6",md:"3",lg:""},{default:a(()=>[e("div",Fe,[Ae,e("div",Ie,[s(J,{"return-object":"",items:t(G).content,"item-title":"name","item-value":"id",variant:"outlined",placeholder:"اختر الصومعة",id:"granary",modelValue:t(i).granary,"onUpdate:modelValue":n[0]||(n[0]=o=>t(i).granary=o),"hide-details":"",class:k([t(l).$errors.find(o=>o.$property=="granary")?"err_field":""])},null,8,["items","modelValue","class"]),s(g,{class:"position-absolute"},{default:a(()=>[u("mdi-store-24-hour")]),_:1})])]),t(l).$errors.find(o=>o.$property=="granary")?(_(),y("span",Ce,d(t(l).$errors.find(o=>o.$property=="granary").$message),1)):h("",!0)]),_:1}),s(c,{cols:"12",sm:"6",md:"3",lg:""},{default:a(()=>[e("div",ze,[Se,e("div",Oe,[s(J,{"return-object":"",items:t(x).content,"item-value":"id","item-title":"name",variant:"outlined",placeholder:"اختر المورد",name:"supplier",id:"supplier",modelValue:t(i).supplier,"onUpdate:modelValue":n[1]||(n[1]=o=>t(i).supplier=o),"auto-select-first":"","hide-details":"","custom-filter":(o,Q,ce)=>ce.title.toString().includes(Q)||ce.value.id.toString().includes(Q),class:k([t(l).$errors.find(o=>o.$property=="supplier")?"err_field":""])},{"prepend-item":a(()=>[qe]),item:a(({props:o,item:Q})=>[e("div",ye(o,{class:"d-flex select_slot",style:{"justify-content":"space-between"}}),[s(re,null,{default:a(()=>[u(d(Q.raw.name),1)]),_:2},1024),s(re,null,{default:a(()=>[u(d(Q.raw.id),1)]),_:2},1024)],16)]),_:1},8,["items","modelValue","custom-filter","class"]),s(g,{class:"position-absolute"},{default:a(()=>[u("mdi-account-cowboy-hat ")]),_:1})])]),t(l).$errors.find(o=>o.$property=="supplier")?(_(),y("span",je,d(t(l).$errors.find(o=>o.$property=="supplier").$message),1)):h("",!0)]),_:1}),s(c,{cols:"12",sm:"6",md:"3",lg:""},{default:a(()=>[e("div",Ye,[Le,e("div",Ge,[z(e("input",{type:"text",placeholder:"رقم المستند",name:"documentNumber",id:"documentNumber","onUpdate:modelValue":n[2]||(n[2]=o=>t(i).documentNumber=o),class:k(t(l).$errors.find(o=>o.$property=="documentNumber")?"err_field":"")},null,2),[[j,t(i).documentNumber]]),s(g,{class:"position-absolute"},{default:a(()=>[u("mdi-file ")]),_:1})])]),t(l).$errors.find(o=>o.$property=="documentNumber")?(_(),y("span",Ke,d(t(l).$errors.find(o=>o.$property=="documentNumber").$message),1)):h("",!0)]),_:1}),s(c,{cols:"12",sm:"6",md:"3",lg:""},{default:a(()=>[e("div",Ee,[Be,e("div",Re,[z(e("input",{type:"text",placeholder:"رقم السيارة",name:"carNumber",id:"carNumber","onUpdate:modelValue":n[3]||(n[3]=o=>t(i).carNumber=o),class:k(t(l).$errors.find(o=>o.$property=="carNumber")?"err_field":"")},null,2),[[j,t(i).carNumber]]),s(g,{class:"position-absolute"},{default:a(()=>[u("mdi-car ")]),_:1})])]),t(l).$errors.find(o=>o.$property=="carNumber")?(_(),y("span",Je,d(t(l).$errors.find(o=>o.$property=="carNumber").$message),1)):h("",!0)]),_:1}),t(R).content?(_(),L(c,{key:0,cols:"12",sm:"6",md:"3",lg:""},{default:a(()=>[e("div",He,[Qe,e("div",Xe,[z(e("input",{type:"date",name:"date",id:"date","onUpdate:modelValue":n[4]||(n[4]=o=>t(i).date=o),class:k(t(l).$errors.find(o=>o.$property=="date")?"err_field":""),style:{"padding-right":"0 !important"}},null,2),[[j,t(i).date]]),s(g,{class:"position-absolute"},{default:a(()=>[u("mdi-calendar")]),_:1})])]),t(l).$errors.find(o=>o.$property=="date")?(_(),y("span",Ze,d(t(l).$errors.find(o=>o.$property=="date").$message),1)):h("",!0)]),_:1})):h("",!0)]),_:1}),s(H,{dir:"rtl",class:"mt-5"},{default:a(()=>[s(c,{cols:"12"},{default:a(()=>[et,s(U),s(U)]),_:1}),s(c,{cols:"12",sm:"6",md:"3",lg:""},{default:a(()=>[e("div",tt,[ot,e("div",st,[s(J,{"return-object":"",items:t(p).content,"item-title":"name","item-value":"id",name:"product",id:"product",modelValue:t(i).product,"onUpdate:modelValue":[n[5]||(n[5]=o=>t(i).product=o),n[6]||(n[6]=o=>(t(i).productType=null,t(i).productMeasuringUnit=null))],variant:"outlined",placeholder:"اختر المنتج","hide-details":"",class:k([t(l).$errors.find(o=>o.$property=="product")?"err_field":""])},null,8,["items","modelValue","class"]),s(g,{class:"position-absolute"},{default:a(()=>[u("mdi-basket")]),_:1})])]),t(l).$errors.find(o=>o.$property=="product")?(_(),y("span",it,d(t(l).$errors.find(o=>o.$property=="product").$message),1)):h("",!0)]),_:1}),s(c,{cols:"12",sm:"6",md:"3",lg:""},{default:a(()=>[e("div",at,[lt,e("div",nt,[s(J,{"return-object":"",items:t(se),"item-title":"productType.name","item-value":"id",variant:"outlined",placeholder:"اختر الفرز",name:"productType",id:"productType","no-data-text":"لايوجد بيانات",modelValue:t(i).productType,"onUpdate:modelValue":n[7]||(n[7]=o=>t(i).productType=o),"hide-details":"",class:k([t(l).$errors.find(o=>o.$property=="productType")?"err_field":""])},null,8,["items","modelValue","class"]),s(g,{class:"position-absolute"},{default:a(()=>[u("mdi-sitemap ")]),_:1})])]),t(l).$errors.find(o=>o.$property=="productType")?(_(),y("span",rt,d(t(l).$errors.find(o=>o.$property=="productType").$message),1)):h("",!0)]),_:1}),s(c,{cols:"12",sm:"6",md:"3",lg:""},{default:a(()=>[e("div",dt,[ct,e("div",ut,[z(e("input",{type:"text",placeholder:"الوزن القائم",name:"carWeightWith","onUpdate:modelValue":n[8]||(n[8]=o=>t(i).carWeightWith=o),id:"carWeightWith",class:k(t(l).$errors.find(o=>o.$property=="carWeightWith")?"err_field":"")},null,2),[[j,t(i).carWeightWith]]),s(g,{class:"position-absolute"},{default:a(()=>[u("mdi-weight-kilogram ")]),_:1})])]),t(l).$errors.find(o=>o.$property=="carWeightWith")?(_(),y("span",pt,d(t(l).$errors.find(o=>o.$property=="carWeightWith").$message),1)):h("",!0)]),_:1}),t(R).content?(_(),L(c,{key:0,cols:"12",sm:"6",md:"3",lg:""},{default:a(()=>[e("div",_t,[mt,e("div",gt,[z(e("input",{type:"text",placeholder:"الوزن الفارغ",name:"carWeightWithOut","onUpdate:modelValue":n[9]||(n[9]=o=>t(i).carWeightWithOut=o),id:"carWeightWithOut",class:k(t(l).$errors.find(o=>o.$property=="carWeightWithOut")?"err_field":"")},null,2),[[j,t(i).carWeightWithOut]]),s(g,{class:"position-absolute"},{default:a(()=>[u("mdi-weight-kilogram ")]),_:1})])]),t(l).$errors.find(o=>o.$property=="carWeightWithOut")?(_(),y("span",ht,d(t(l).$errors.find(o=>o.$property=="carWeightWithOut").$message),1)):h("",!0)]),_:1})):h("",!0),t(R).content?(_(),L(c,{key:1,cols:"12",sm:"6",md:"3",lg:""},{default:a(()=>[e("div",vt,[ft,e("div",bt,[e("input",{type:"text",placeholder:"صافي الوزن",name:"typeName",id:"typeName",disabled:"",value:t(B)},null,8,yt),s(g,{class:"position-absolute"},{default:a(()=>[u("mdi-weight-kilogram ")]),_:1})])])]),_:1})):h("",!0)]),_:1}),s(H,{dir:"rtl",class:"mt-5"},{default:a(()=>[s(c,{cols:"12"},{default:a(()=>[$t,s(U),s(U)]),_:1}),s(c,{cols:"12",sm:"6",md:"3",lg:""},{default:a(()=>[e("div",Wt,[Pt,e("div",xt,[s(J,{"item-title":"name","item-value":"id","return-object":"",items:t(K).content,name:"productUnit",id:"productUnit",modelValue:t(i).productUnit,"onUpdate:modelValue":n[10]||(n[10]=o=>t(i).productUnit=o),variant:"outlined",placeholder:"اختر وحدة التعبئة","hide-details":"",disabled:!t(K).content||!t(K).content.length,class:k([t(l).$errors.find(o=>o.$property=="productUnit")?"err_field":""])},null,8,["items","modelValue","disabled","class"]),s(g,{class:"position-absolute"},{default:a(()=>[u("mdi-basket-fill ")]),_:1})])]),t(l).$errors.find(o=>o.$property=="productUnit")?(_(),y("span",kt,d(t(l).$errors.find(o=>o.$property=="productUnit").$message),1)):h("",!0)]),_:1}),s(c,{cols:"12",sm:"6",md:"3",lg:""},{default:a(()=>[e("div",wt,[Tt,e("div",Nt,[z(e("input",{type:"text",placeholder:"وزن وحدات التعبئة بالكيلو",name:"totalPackingWeight",id:"totalPackingWeight","onUpdate:modelValue":n[11]||(n[11]=o=>t(i).totalPackingWeight=o),class:k(t(l).$errors.find(o=>o.$property=="totalPackingWeight")?"err_field":"")},null,2),[[j,t(i).totalPackingWeight]]),s(g,{class:"position-absolute"},{default:a(()=>[u("mdi-weight-kilogram ")]),_:1})])]),t(l).$errors.find(o=>o.$property=="totalPackingWeight")?(_(),y("span",Mt,d(t(l).$errors.find(o=>o.$property=="totalPackingWeight").$message),1)):h("",!0)]),_:1}),s(c,{cols:"12",sm:"6",md:"3",lg:""},{default:a(()=>[e("div",Ut,[Vt,e("div",Dt,[e("input",{type:"text",placeholder:"الصافي بعد خصم وزن الوحدات",name:"typeName",id:"typeName",value:t(b),disabled:""},null,8,Ft),s(g,{class:"position-absolute"},{default:a(()=>[u("mdi-weight-kilogram ")]),_:1})])])]),_:1}),s(c,{cols:"12",sm:"6",md:"3",lg:""}),s(c,{cols:"12",sm:"6",md:"3",lg:""})]),_:1}),s(H,{dir:"rtl",class:"mt-5"},{default:a(()=>[s(c,{cols:"12"},{default:a(()=>[At,s(U),s(U)]),_:1}),s(c,{cols:"12",sm:"6",md:"3",lg:""},{default:a(()=>[e("div",It,[Ct,e("div",zt,[z(e("input",{type:"text",placeholder:"سعر التعتيق",name:"agingPricePerTon",id:"agingPricePerTon","onUpdate:modelValue":n[12]||(n[12]=o=>t(i).agingPricePerTon=o),class:k(t(l).$errors.find(o=>o.$property=="agingPricePerTon")?"err_field":"")},null,2),[[j,t(i).agingPricePerTon]]),s(g,{class:"position-absolute"},{default:a(()=>[u("mdi-currency-usd ")]),_:1})])]),t(l).$errors.find(o=>o.$property=="agingPricePerTon")?(_(),y("span",St,d(t(l).$errors.find(o=>o.$property=="agingPricePerTon").$message),1)):h("",!0)]),_:1}),s(c,{cols:"12",sm:"6",md:"3",lg:""},{default:a(()=>[e("div",Ot,[qt,e("div",jt,[e("input",{type:"text",placeholder:"اجمالي التعتيق",name:"totalPackingWeight",id:"totalPackingWeight",value:t(q),disabled:""},null,8,Yt),s(g,{class:"position-absolute"},{default:a(()=>[u("mdi-currency-usd ")]),_:1})])])]),_:1}),s(c,{cols:"12",sm:"6",md:"3",lg:""},{default:a(()=>[e("div",Lt,[Gt,e("div",Kt,[e("input",{type:"text",placeholder:"ضريبة دمغة",name:"totalPackingWeight",id:"totalPackingWeight",value:t(r).docTax.value,disabled:""},null,8,Et),s(g,{class:"position-absolute"},{default:a(()=>[u("mdi-currency-usd ")]),_:1})])])]),_:1}),s(c,{cols:"12",sm:"6",md:"3",lg:""},{default:a(()=>[e("div",Bt,[Rt,e("div",Jt,[e("input",{type:"text",placeholder:"مهن زراعية",name:"totalPackingWeight",id:"totalPackingWeight",value:t(r).agroTax.value,disabled:""},null,8,Ht),s(g,{class:"position-absolute"},{default:a(()=>[u("mdi-currency-usd ")]),_:1})])])]),_:1}),s(c,{cols:"12",sm:"6",md:"3",lg:""},{default:a(()=>[e("div",Qt,[Xt,e("div",Zt,[e("input",{type:"text",placeholder:"اجمالي الخصم",name:"totalPackingWeight",id:"totalPackingWeight",disabled:"",value:t(D)},null,8,eo),s(g,{class:"position-absolute"},{default:a(()=>[u("mdi-currency-usd ")]),_:1})])])]),_:1})]),_:1}),s(H,{dir:"rtl",class:"mt-5"},{default:a(()=>[s(c,{cols:"12"},{default:a(()=>[to,s(U),s(U)]),_:1}),s(c,{cols:"12",sm:"6",md:"3",lg:""},{default:a(()=>[e("div",oo,[so,e("div",io,[e("input",{type:"text",placeholder:"القيمة قبل الخصم",name:"totalPackingWeight",id:"totalPackingWeight",value:t(b)&&t(i).productType.pricePerKilo?(t(b)*t(i).productType.pricePerKilo).toFixed(2):0,disabled:""},null,8,ao),s(g,{class:"position-absolute"},{default:a(()=>[u("mdi-currency-usd ")]),_:1})])])]),_:1}),s(c,{cols:"12",sm:"6",md:"3",lg:""},{default:a(()=>[e("div",lo,[no,e("div",ro,[e("input",{type:"text",placeholder:"القيمة بعد الخصم",name:"totalPackingWeight",id:"totalPackingWeight",disabled:"",value:t(D)?(t(b)*t(i).productType.pricePerKilo-t(D)).toFixed(2):0},null,8,co),s(g,{class:"position-absolute"},{default:a(()=>[u("mdi-currency-usd ")]),_:1})])])]),_:1}),s(c,{cols:"12",sm:"6",md:"3",lg:""},{default:a(()=>[e("div",uo,[po,e("div",_o,[e("input",{type:"text",placeholder:"القيمة بعد الخصم والتعتيق",name:"totalPackingWeight",id:"totalPackingWeight",disabled:"",value:t(D)?parseInt(t(b)*t(i).productType.pricePerKilo-t(D)-t(q)):0},null,8,mo),s(g,{class:"position-absolute"},{default:a(()=>[u("mdi-currency-usd ")]),_:1})])])]),_:1}),s(c,{cols:"12",sm:"6",md:"3",lg:""}),s(c,{cols:"12",sm:"6",md:"3",lg:""}),s(c,{cols:"12",sm:"6",md:"3",lg:""})]),_:1})]),_:1}),e("div",go,[s(de,{color:"red",class:"mr-3",onClick:n[13]||(n[13]=o=>I.value=!1),disabled:t(E),width:"200",height:"50",rounded:"",elevation:"0"},{default:a(()=>[u("الغاء")]),_:1},8,["disabled"]),s(de,{color:"green",width:"200",height:"50",rounded:"",elevation:"0",type:"submit",loading:t(E)},{default:a(()=>[u("حفظ")]),_:1},8,["loading"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])])}}},vo=ho;const fo={class:"dashboard_invoices_listing"},bo={class:"page_toolbar d-flex align-center justify-space-between"},yo={class:"toolbar_btns"},$o=e("h1",{dir:"rtl",class:"my-2 hide_till_print"},"فواتير التوريد",-1),Wo=e("tr",null,[e("th",null,"رقم"),e("th",null,"التاريخ"),e("th",null,"الصومعه"),e("th",null,"المورد"),e("th",null,"المستند"),e("th",null,"رقم السيارة"),e("th",null,"منتج / فرز"),e("th",null,"الكمية"),e("th",null,"قبل الخصم"),e("th",null,"بعد الخصم"),e("th",null,"بعد الخصم والتعتيق")],-1),Po={key:0},xo=e("td",{colspan:"7",style:{"font-size":"14px !important"}},"الاجمالي",-1),ko={colspan:"1",style:{"font-size":"14px !important"}},wo={colspan:"1",style:{"font-size":"14px !important"}},To={style:{"font-size":"14px !important"}},No={style:{"font-size":"14px !important"}},Mo=e("div",null,"لايوجد بيانات",-1),Uo=e("span",{class:"d-none"},null,-1),Vo={key:0,class:"text-center pt-2 d-flex justify-space-between hide_on_print",style:{width:"60%"}},Do={class:"ps-5 d-flex align-center"},Fo=e("label",{for:"",class:"mb-2 d-block text-end ms-3 mt-1",style:{"font-size":"12px"}},"النتائج لكل صفحة",-1),Ao={__name:"Listing",props:["invoices","loading"],emits:["regetItems"],setup(P,{emit:M}){const F=P,N=T(!1),V=T(!1),A=T(null),f=T(1),$=T(10),S=T([{title:"رقم",key:"index",width:"0px"},{title:"التاريخ",key:"invoiceDate"},{title:"الصومعة",key:"granary.name"},{title:"المورد",key:"supplier.name"},{title:"المستند",key:"documentNumber"},{title:"رقم السيارة",key:"carNumber"},{title:"منتج / فرز",key:"productDetails"},{title:"قبل الخصم",key:"totalInvoicePrice"},{title:"الكمية",key:"totalClearWeight"},{title:"بعد الخصم",key:"totalInvoicePriceAfterDiscount"},{title:"بعد الخصم والتعتيق",key:"totalAfterDiscountWithAging"}]),te=[{title:"الرئيسية",disabled:!1,to:{name:"index"}},{title:"فواتير التوريد",disabled:!0}],G=C(()=>{const x={clearWeight:0,beforeDisc:0,disc:0,afterDisc:0};if(F.invoices&&F.invoices.content&&F.invoices.content.length)return F.invoices.content.forEach(p=>{x.clearWeight+=p.totalClearWeight,x.beforeDisc+=p.totalPrice,x.disc+=p.totalAfterDiscount,x.afterDisc+=parseInt(p.totalAfterDiscountWithAging)}),x}),R=T({id:"printable",popTitle:" -",extraCss:"https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.compat.css, https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css",extraHead:'<meta http-equiv="Content-Language"content="zh-cn"/>'});return ie(()=>f.value,x=>{M("regetItems",{page:x,limit:$.value})}),ie(()=>$.value,x=>{M("regetItems",{page:f.value,limit:x})}),(x,p)=>{const K=v("v-icon"),O=v("v-btn"),i=v("v-breadcrumbs"),I=v("v-select"),E=v("v-pagination"),oe=v("v-col"),se=v("v-row"),B=v("v-container"),b=vo,q=$e("print");return _(),y("div",fo,[e("div",bo,[e("div",yo,[s(O,{onClick:p[0]||(p[0]=r=>N.value=!0),width:"20",size:"sm",elevation:"0",color:"transparent"},{default:a(()=>[s(K,{color:"white",size:"25"},{default:a(()=>[u("mdi-plus-circle")]),_:1})]),_:1}),z((_(),L(O,{width:"20",size:"sm",elevation:"0",color:"transparent",class:"ms-3"},{default:a(()=>[s(K,{color:"white",size:"25"},{default:a(()=>[u("mdi-printer")]),_:1})]),_:1})),[[q,t(R)]])]),s(i,{items:te,dir:"rtl",class:"pa-0 mb"},{title:a(({item:r})=>[u(d(r.title.toUpperCase()),1)]),_:1})]),s(B,{class:"page_container",fluid:""},{default:a(()=>[P.invoices?(_(),L(se,{key:0,class:"px-4"},{default:a(()=>[s(oe,{cols:"12",class:"section_container dashboard_table pa-0",id:"printable"},{default:a(()=>[$o,s(t(Me),{headers:t(S),items:P.invoices.content,loading:P.loading,"items-per-page":t($),"onUpdate:itemsPerPage":p[1]||(p[1]=r=>X($)?$.value=r:null),page:t(f),"onUpdate:page":p[2]||(p[2]=r=>X(f)?f.value=r:null),"items-length":P.invoices.totalElements?P.invoices.totalElements:0,"no-data-text":"لايوجد بيانات","show-current-page":"",id:"invoices_table"},{headers:a(()=>[Wo]),item:a(({item:r})=>[e("tr",null,[e("td",null,d(r.index+1),1),e("td",null,d(t(ae)(r.selectable.date).format("DD/MM/YYYY")),1),e("td",null,d(r.selectable.granary.name),1),e("td",null,d(r.selectable.supplier.name),1),e("td",null,d(r.selectable.documentNumber),1),e("td",null,d(r.selectable.carNumber),1),e("td",null,d(r.selectable.product.name)+" / "+d(r.selectable.productType.name),1),e("td",null,d(r.selectable.totalClearWeight.toFixed(2)),1),e("td",null,d(r.selectable.totalPrice.toFixed(2)),1),e("td",null,d(r.selectable.totalAfterDiscount.toFixed(2)),1),e("td",null,d(parseInt(r.selectable.totalAfterDiscountWithAging)),1)]),r.index+1==P.invoices.content.length?(_(),y("tr",Po,[xo,e("td",ko,d(t(G).clearWeight.toFixed(2)),1),e("td",wo,d(t(G).beforeDisc.toFixed(2)),1),e("td",To,d(t(G).disc.toFixed(2)),1),e("td",No,d(t(G).afterDisc),1)])):h("",!0)]),loading:a(()=>[s(t(Ue),{type:"table-row@6"})]),"no-data":a(()=>[Mo]),bottom:a(()=>[Uo]),_:1},8,["headers","items","loading","items-per-page","page","items-length"]),P.loading?h("",!0):(_(),y("div",Vo,[e("div",Do,[s(I,{modelValue:t($),"onUpdate:modelValue":p[3]||(p[3]=r=>X($)?$.value=r:null),items:[10,50,100,500],variant:"outlined","hide-details":""},null,8,["modelValue"]),Fo]),s(E,{modelValue:t(f),"onUpdate:modelValue":p[4]||(p[4]=r=>X(f)?f.value=r:null),length:P.invoices.totalElements?Math.ceil(P.invoices.totalElements/t($)):1},null,8,["modelValue","length"])]))]),_:1})]),_:1})):h("",!0)]),_:1}),t(V)?(_(),L(b,{key:0,openPopup:t(V),onClosePopup:p[5]||(p[5]=r=>(V.value=!1,A.value=null)),toUpdate:t(A),onRegetData:p[6]||(p[6]=r=>(f.value=1,M("regetItems",{page:1,limit:t($)})))},null,8,["openPopup","toUpdate"])):h("",!0),t(N)?(_(),L(b,{key:1,openPopup:t(N),onClosePopup:p[7]||(p[7]=r=>N.value=!1),onRegetData:p[8]||(p[8]=r=>M("regetItems",{page:1,limit:t($)}))},null,8,["openPopup"])):h("",!0)])}}},Io=Ao,Co={class:"dashboard_tests_page mb-10"},Ro={__name:"index",setup(P){const M=_e(),{invoices:F}=Y(M),N=T(!0),V=async(A,f)=>{N.value=!0,await M.doGetInvoices(A-1,f),N.value=!1};return pe(()=>{V(1,10)}),(A,f)=>{const $=Io;return _(),y("div",Co,[s($,{invoices:t(F),loading:t(N),onRegetItems:f[0]||(f[0]=S=>V(S.page,S.limit))},null,8,["invoices","loading"])])}}};export{Ro as default};
