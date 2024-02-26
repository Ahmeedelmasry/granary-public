import{I as A,r as y,c as O,z as oe,o as de,f as v,k as p,l as f,q as o,s,v as n,t as _,A as ve,m as i,C as e,D as $,F as g,B as S,E as z,H as E,G as ie}from"./entry.d2eac3d2.js";import{g as he}from"./granary.cc76c106.js";import{c as fe}from"./clients.811b60cb.js";import{p as be}from"./products.6ebf0fdf.js";import{s as ye}from"./supplier.895df033.js";import{p as $e}from"./units.83ad9088.js";import{t as Pe}from"./taxes.6a84ea1a.js";import{i as ce}from"./invoices.73272cdb.js";import{h as se}from"./moment.a9aaa855.js";import{c as u,r as P,m as ne,n as X,b as Z,u as We}from"./index.edcb52a9.js";import{V as ke,a as we}from"./VSkeletonLoader.d47c2c61.js";const xe={class:"update_banner"},Te=i("h3",{style:{"font-size":"23px","font-weight":"700"}},"بيانات اساسية",-1),Ne={class:"field_container"},Me=i("label",{for:"granary"},"الصومعة",-1),Ue={class:"input_parent position-relative"},Ve={key:0,class:"err_msg"},De={class:"field_container"},Ce=i("label",{for:"supplier"},"المورد",-1),Fe={class:"input_parent position-relative"},qe={key:0,class:"err_msg"},Ie={class:"field_container"},Oe=i("label",{for:"documentNumber"},"رقم المستند",-1),Se={class:"input_parent position-relative"},ze={key:0,class:"err_msg"},Ae={class:"field_container"},Le=i("label",{for:"carNumber"},"رقم السيارة",-1),Ge={class:"input_parent position-relative"},je={key:0,class:"err_msg"},Ye={class:"field_container"},Ke=i("label",{for:"date"},"التاريخ",-1),Be={class:"input_parent position-relative"},Ee={key:0,class:"err_msg"},Re=i("h3",{style:{"font-size":"23px","font-weight":"700"}},"بيانات المنتج",-1),He={class:"field_container"},Je=i("label",{for:"product"},"المنتج",-1),Qe={class:"input_parent position-relative"},Xe={key:0,class:"err_msg"},Ze={class:"field_container"},et=i("label",{for:"productType"},"الفرز",-1),tt={class:"input_parent position-relative"},ot={key:0,class:"err_msg"},it={class:"field_container"},st=i("label",{for:"carWeightWith"},"الوزن القائم",-1),at={class:"input_parent position-relative"},lt={key:0,class:"err_msg"},rt={class:"field_container"},nt=i("label",{for:"carWeightWithOut"},"الوزن الفارغ",-1),dt={class:"input_parent position-relative"},ct={key:0,class:"err_msg"},ut={class:"field_container"},pt=i("label",{for:"typeName"},"صافي الوزن",-1),_t={class:"input_parent position-relative"},mt=["value"],gt=i("h3",{style:{"font-size":"23px","font-weight":"700"}}," بيانات التعبئة ",-1),vt={class:"field_container"},ht=i("label",{for:"productUnit"},"وحدة التعبئة",-1),ft={class:"input_parent position-relative"},bt={key:0,class:"err_msg"},yt={class:"field_container"},$t=i("label",{for:"totalPackingWeight"},"اجمالي وزن الوحدات",-1),Pt={class:"input_parent position-relative"},Wt={key:0,class:"err_msg"},kt={class:"field_container"},wt=i("label",{for:"typeName"},"الصافي بعد خصم وزن الوحدات",-1),xt={class:"input_parent position-relative"},Tt=["value"],Nt=i("h3",{style:{"font-size":"23px","font-weight":"700"}}," بيانات الخصومات ",-1),Mt={class:"field_container"},Ut=i("label",{for:"agingPricePerTon"},"سعر التعتيق",-1),Vt={class:"input_parent position-relative"},Dt={key:0,class:"err_msg"},Ct={class:"field_container"},Ft=i("label",{for:"totalPackingWeight"},"اجمالي التعتيق",-1),qt={class:"input_parent position-relative"},It=["value"],Ot={class:"field_container"},St=i("label",{for:"totalPackingWeight"},"قيمة الاستمارة",-1),zt={class:"input_parent position-relative"},At=["value"],Lt={class:"field_container"},Gt=i("label",{for:"totalPackingWeight"},"قيمة خصم الاردب",-1),jt={class:"input_parent position-relative"},Yt=["value"],Kt={class:"field_container"},Bt=i("label",{for:"totalPackingWeight"},"اجمالي الخصم",-1),Et={class:"input_parent position-relative"},Rt=["value"],Ht=i("h3",{style:{"font-size":"23px","font-weight":"700"}}," القيم النهائية ",-1),Jt={class:"field_container"},Qt=i("label",{for:"totalPackingWeight"},"القيمة قبل الخصم",-1),Xt={class:"input_parent position-relative"},Zt=["value"],eo={class:"field_container"},to=i("label",{for:"totalPackingWeight"},"القيمة بعد الخصم",-1),oo={class:"input_parent position-relative"},io=["value"],so={class:"actions text-center mt-7"},ao={__name:"Update",props:["openPopup","toUpdate"],emits:["closePopup","regetData"],setup(N,{emit:x}){const C=N,W=he(),q=fe(),M=ye(),U=be(),k=$e(),b=Pe(),ee=ce(),{granaries:te}=A(W),{clients:F}=A(q),{suppliers:h}=A(M),{products:L}=A(U),{productUnits:I}=A(k),{taxes:G}=A(b),a=y({granary:null,documentNumber:null,carNumber:null,supplier:null,date:null,product:null,productType:null,productMeasuringUnit:null,carWeightWith:null,carWeightWithOut:null,productUnit:null,totalPackingWeight:null,agingPricePerTon:null}),V=y(!1),j=y(!1),Q=y({granary:{required:u.withMessage("هذا الحقل مطلوب",P)},documentNumber:{required:u.withMessage("هذا الحقل مطلوب",P),minLength:u.withMessage("يجب ادخال اكثر من 3 مدخلات",ne(3))},carNumber:{required:u.withMessage("هذا الحقل مطلوب",P),minLength:u.withMessage("يجب ادخال اكثر من 3 مدخلات",ne(3))},supplier:{required:u.withMessage("هذا الحقل مطلوب",P)},date:{required:u.withMessage("هذا الحقل مطلوب",P)},product:{required:u.withMessage("هذا الحقل مطلوب",P)},productType:{required:u.withMessage("هذا الحقل مطلوب",P)},carWeightWith:{required:u.withMessage("هذا الحقل مطلوب",P),numeric:u.withMessage("هذا الحقل يقبل ارقام فقط",X),between:u.withMessage("يجب ان يكون الرقم اكبر من 0",Z(1,1e7))},carWeightWithOut:{required:u.withMessage("هذا الحقل مطلوب",P),numeric:u.withMessage("هذا الحقل يقبل ارقام فقط",X),between:u.withMessage("يجب ان يكون الرقم اكبر من 0",Z(1,1e7))},productUnit:{required:u.withMessage("هذا الحقل مطلوب",P)},totalPackingWeight:{required:u.withMessage("هذا الحقل مطلوب",P),numeric:u.withMessage("هذا الحقل يقبل ارقام فقط",X),between:u.withMessage("يجب ان يكون الرقم اكبر من 0",Z(1,1e7))},agingPricePerTon:{required:u.withMessage("هذا الحقل مطلوب",P),numeric:u.withMessage("هذا الحقل يقبل ارقام فقط",X),between:u.withMessage("يجب ان يكون الرقم اكبر من 0",Z(1,1e7))}}),c=O(()=>a.value.product?a.value.product.typePriceList:[]),Y=O(()=>Number(a.value.carWeightWith)&&Number(a.value.carWeightWithOut)?parseFloat(a.value.carWeightWith)-parseFloat(a.value.carWeightWithOut):0),D=O(()=>Y.value>0&&Number(a.value.totalPackingWeight)?parseFloat(Y.value)-parseFloat(a.value.totalPackingWeight):0),R=O(()=>Number(a.value.agingPricePerTon)&&Number(D.value)?Math.ceil(parseFloat(D.value)/1e3*parseFloat(a.value.agingPricePerTon)):0),K=O(()=>{const w={docTax:0,agroTax:0};return G.value.content&&G.value.content.length&&(w.docTax=G.value.content.find(l=>l.name=="قيمة الاستمارة"),w.agroTax=G.value.content.find(l=>l.name=="قيمة الخصم لكل اردب")),w}),ae=O(()=>{if(Number(R.value)){const w=Number(D.value)/a.value.productType.weightPerArdab;return Math.ceil(w)}return 0}),B=O(()=>{if(Number(R.value)){const w=ae.value*K.value.agroTax.value,l=R.value+w+K.value.docTax.value;return Math.ceil(l)}return 0});oe(()=>V.value,w=>{w||setTimeout(()=>{x("closePopup")},200)});let r=We(Q,a);const ue=async()=>{if(await r.value.$validate()){j.value=!0;const l={granary:{id:a.value.granary.id},supplier:{id:a.value.supplier.id},documentNumber:a.value.documentNumber,carNumber:a.value.carNumber,product:{id:a.value.product.id},productType:{id:a.value.productType.productType.id},productPricePerKilo:parseFloat(a.value.productType.pricePerKilo),carWeightWith:parseFloat(a.value.carWeightWith),carWeightWithOut:parseFloat(a.value.carWeightWithOut),totalWeightFromCar:Y.value,packageUnit:{id:a.value.productUnit.id},totalPackingWeight:parseFloat(a.value.totalPackingWeight),totalClearWeight:D.value,agingPricePerTon:parseFloat(a.value.agingPricePerTon),totalAgingPrice:R.value,formPrice:K.value.docTax.value,pricePerArdab:K.value.agroTax.value,totalArdab:ae.value,totalPrice:D.value*parseFloat(a.value.productType.pricePerKilo),totalDiscount:B.value,totalAfterDiscount:D.value*parseFloat(a.value.productType.pricePerKilo)-B.value,date:se(new Date(a.value.date)).format("DD-MM-YYYY hh:mm:ss")};await ee.doAddInvoice(l)&&(x("regetData"),V.value=!1),j.value=!1}};return de(()=>{q.doGetClients(0,1e4),W.doGetGranaries(0,1e4),M.doGetSuppliers(0,1e4),U.doGetProducts(0,1e4),k.doGetProductUnits(0,1e4),b.doGetTaxes(0,1e4),V.value=C.openPopup}),(w,l)=>{const le=v("v-card-title"),T=v("v-divider"),d=v("v-col"),H=v("v-autocomplete"),m=v("v-icon"),J=v("v-row"),pe=v("v-container"),re=v("v-btn"),_e=v("v-form"),me=v("v-card"),ge=v("v-dialog");return p(),f("div",xe,[o(ge,{modelValue:e(V),"onUpdate:modelValue":l[14]||(l[14]=t=>ie(V)?V.value=t:null),fullscreen:!0},{default:s(()=>[o(me,{style:{"border-radius":"unset !important"}},{default:s(()=>[o(le,{class:"mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold",style:{"font-size":"22px"}},{default:s(()=>[n(_(N.toUpdate?"تعديل فاتورة توريد":"اضافة فاتورة توريد"),1)]),_:1}),o(_e,{class:"pa-5",onSubmit:ve(ue,["prevent"])},{default:s(()=>[o(pe,{fluid:""},{default:s(()=>[o(J,{dir:"rtl"},{default:s(()=>[o(d,{cols:"12"},{default:s(()=>[Te,o(T),o(T)]),_:1}),o(d,{cols:"12",sm:"6",md:"3",lg:""},{default:s(()=>[i("div",Ne,[Me,i("div",Ue,[o(H,{"return-object":"",items:e(te).content,"item-title":"name","item-value":"id",variant:"outlined",placeholder:"اختر الصومعة",id:"granary",modelValue:e(a).granary,"onUpdate:modelValue":l[0]||(l[0]=t=>e(a).granary=t),"hide-details":"",class:$([e(r).$errors.find(t=>t.$property=="granary")?"err_field":""])},null,8,["items","modelValue","class"]),o(m,{class:"position-absolute"},{default:s(()=>[n("mdi-store-24-hour")]),_:1})])]),e(r).$errors.find(t=>t.$property=="granary")?(p(),f("span",Ve,_(e(r).$errors.find(t=>t.$property=="granary").$message),1)):g("",!0)]),_:1}),o(d,{cols:"12",sm:"6",md:"3",lg:""},{default:s(()=>[i("div",De,[Ce,i("div",Fe,[o(H,{"return-object":"",items:e(h).content,"item-title":"name","item-value":"id",variant:"outlined",placeholder:"اختر المورد",name:"supplier",id:"supplier",modelValue:e(a).supplier,"onUpdate:modelValue":l[1]||(l[1]=t=>e(a).supplier=t),"hide-details":"",class:$([e(r).$errors.find(t=>t.$property=="supplier")?"err_field":""])},null,8,["items","modelValue","class"]),o(m,{class:"position-absolute"},{default:s(()=>[n("mdi-account-cowboy-hat ")]),_:1})])]),e(r).$errors.find(t=>t.$property=="supplier")?(p(),f("span",qe,_(e(r).$errors.find(t=>t.$property=="supplier").$message),1)):g("",!0)]),_:1}),o(d,{cols:"12",sm:"6",md:"3",lg:""},{default:s(()=>[i("div",Ie,[Oe,i("div",Se,[S(i("input",{type:"text",placeholder:"رقم المستند",name:"documentNumber",id:"documentNumber","onUpdate:modelValue":l[2]||(l[2]=t=>e(a).documentNumber=t),class:$(e(r).$errors.find(t=>t.$property=="documentNumber")?"err_field":"")},null,2),[[z,e(a).documentNumber]]),o(m,{class:"position-absolute"},{default:s(()=>[n("mdi-file ")]),_:1})])]),e(r).$errors.find(t=>t.$property=="documentNumber")?(p(),f("span",ze,_(e(r).$errors.find(t=>t.$property=="documentNumber").$message),1)):g("",!0)]),_:1}),o(d,{cols:"12",sm:"6",md:"3",lg:""},{default:s(()=>[i("div",Ae,[Le,i("div",Ge,[S(i("input",{type:"text",placeholder:"رقم السيارة",name:"carNumber",id:"carNumber","onUpdate:modelValue":l[3]||(l[3]=t=>e(a).carNumber=t),class:$(e(r).$errors.find(t=>t.$property=="carNumber")?"err_field":"")},null,2),[[z,e(a).carNumber]]),o(m,{class:"position-absolute"},{default:s(()=>[n("mdi-car ")]),_:1})])]),e(r).$errors.find(t=>t.$property=="carNumber")?(p(),f("span",je,_(e(r).$errors.find(t=>t.$property=="carNumber").$message),1)):g("",!0)]),_:1}),e(F).content?(p(),E(d,{key:0,cols:"12",sm:"6",md:"3",lg:""},{default:s(()=>[i("div",Ye,[Ke,i("div",Be,[S(i("input",{type:"datetime-local",name:"date",id:"date","onUpdate:modelValue":l[4]||(l[4]=t=>e(a).date=t),class:$(e(r).$errors.find(t=>t.$property=="date")?"err_field":""),style:{"padding-right":"0 !important"}},null,2),[[z,e(a).date]]),o(m,{class:"position-absolute"},{default:s(()=>[n("mdi-calendar")]),_:1})])]),e(r).$errors.find(t=>t.$property=="date")?(p(),f("span",Ee,_(e(r).$errors.find(t=>t.$property=="date").$message),1)):g("",!0)]),_:1})):g("",!0)]),_:1}),o(J,{dir:"rtl",class:"mt-5"},{default:s(()=>[o(d,{cols:"12"},{default:s(()=>[Re,o(T),o(T)]),_:1}),o(d,{cols:"12",sm:"6",md:"3",lg:""},{default:s(()=>[i("div",He,[Je,i("div",Qe,[o(H,{"return-object":"",items:e(L).content,"item-title":"name","item-value":"id",name:"product",id:"product",modelValue:e(a).product,"onUpdate:modelValue":[l[5]||(l[5]=t=>e(a).product=t),l[6]||(l[6]=t=>(e(a).productType=null,e(a).productMeasuringUnit=null))],variant:"outlined",placeholder:"اختر المنتج","hide-details":"",class:$([e(r).$errors.find(t=>t.$property=="product")?"err_field":""])},null,8,["items","modelValue","class"]),o(m,{class:"position-absolute"},{default:s(()=>[n("mdi-basket")]),_:1})])]),e(r).$errors.find(t=>t.$property=="product")?(p(),f("span",Xe,_(e(r).$errors.find(t=>t.$property=="product").$message),1)):g("",!0)]),_:1}),o(d,{cols:"12",sm:"6",md:"3",lg:""},{default:s(()=>[i("div",Ze,[et,i("div",tt,[o(H,{"return-object":"",items:e(c),"item-title":"productType.name","item-value":"id",variant:"outlined",placeholder:"اختر الفرز",name:"productType",id:"productType","no-data-text":"لايوجد بيانات",modelValue:e(a).productType,"onUpdate:modelValue":l[7]||(l[7]=t=>e(a).productType=t),"hide-details":"",class:$([e(r).$errors.find(t=>t.$property=="productType")?"err_field":""])},null,8,["items","modelValue","class"]),o(m,{class:"position-absolute"},{default:s(()=>[n("mdi-sitemap ")]),_:1})])]),e(r).$errors.find(t=>t.$property=="productType")?(p(),f("span",ot,_(e(r).$errors.find(t=>t.$property=="productType").$message),1)):g("",!0)]),_:1}),o(d,{cols:"12",sm:"6",md:"3",lg:""},{default:s(()=>[i("div",it,[st,i("div",at,[S(i("input",{type:"text",placeholder:"الوزن القائم",name:"carWeightWith","onUpdate:modelValue":l[8]||(l[8]=t=>e(a).carWeightWith=t),id:"carWeightWith",class:$(e(r).$errors.find(t=>t.$property=="carWeightWith")?"err_field":"")},null,2),[[z,e(a).carWeightWith]]),o(m,{class:"position-absolute"},{default:s(()=>[n("mdi-weight-kilogram ")]),_:1})])]),e(r).$errors.find(t=>t.$property=="carWeightWith")?(p(),f("span",lt,_(e(r).$errors.find(t=>t.$property=="carWeightWith").$message),1)):g("",!0)]),_:1}),e(F).content?(p(),E(d,{key:0,cols:"12",sm:"6",md:"3",lg:""},{default:s(()=>[i("div",rt,[nt,i("div",dt,[S(i("input",{type:"text",placeholder:"الوزن الفارغ",name:"carWeightWithOut","onUpdate:modelValue":l[9]||(l[9]=t=>e(a).carWeightWithOut=t),id:"carWeightWithOut",class:$(e(r).$errors.find(t=>t.$property=="carWeightWithOut")?"err_field":"")},null,2),[[z,e(a).carWeightWithOut]]),o(m,{class:"position-absolute"},{default:s(()=>[n("mdi-weight-kilogram ")]),_:1})])]),e(r).$errors.find(t=>t.$property=="carWeightWithOut")?(p(),f("span",ct,_(e(r).$errors.find(t=>t.$property=="carWeightWithOut").$message),1)):g("",!0)]),_:1})):g("",!0),e(F).content?(p(),E(d,{key:1,cols:"12",sm:"6",md:"3",lg:""},{default:s(()=>[i("div",ut,[pt,i("div",_t,[i("input",{type:"text",placeholder:"صافي الوزن",name:"typeName",id:"typeName",disabled:"",value:e(Y)},null,8,mt),o(m,{class:"position-absolute"},{default:s(()=>[n("mdi-weight-kilogram ")]),_:1})])])]),_:1})):g("",!0)]),_:1}),o(J,{dir:"rtl",class:"mt-5"},{default:s(()=>[o(d,{cols:"12"},{default:s(()=>[gt,o(T),o(T)]),_:1}),o(d,{cols:"12",sm:"6",md:"3",lg:""},{default:s(()=>[i("div",vt,[ht,i("div",ft,[o(H,{"item-title":"name","item-value":"id","return-object":"",items:e(I).content,name:"productUnit",id:"productUnit",modelValue:e(a).productUnit,"onUpdate:modelValue":l[10]||(l[10]=t=>e(a).productUnit=t),variant:"outlined",placeholder:"اختر وحدة التعبئة","hide-details":"",disabled:!e(I).content||!e(I).content.length,class:$([e(r).$errors.find(t=>t.$property=="productUnit")?"err_field":""])},null,8,["items","modelValue","disabled","class"]),o(m,{class:"position-absolute"},{default:s(()=>[n("mdi-basket-fill ")]),_:1})])]),e(r).$errors.find(t=>t.$property=="productUnit")?(p(),f("span",bt,_(e(r).$errors.find(t=>t.$property=="productUnit").$message),1)):g("",!0)]),_:1}),o(d,{cols:"12",sm:"6",md:"3",lg:""},{default:s(()=>[i("div",yt,[$t,i("div",Pt,[S(i("input",{type:"text",placeholder:"وزن وحدات التعبئة بالكيلو",name:"totalPackingWeight",id:"totalPackingWeight","onUpdate:modelValue":l[11]||(l[11]=t=>e(a).totalPackingWeight=t),class:$(e(r).$errors.find(t=>t.$property=="totalPackingWeight")?"err_field":"")},null,2),[[z,e(a).totalPackingWeight]]),o(m,{class:"position-absolute"},{default:s(()=>[n("mdi-weight-kilogram ")]),_:1})])]),e(r).$errors.find(t=>t.$property=="totalPackingWeight")?(p(),f("span",Wt,_(e(r).$errors.find(t=>t.$property=="totalPackingWeight").$message),1)):g("",!0)]),_:1}),o(d,{cols:"12",sm:"6",md:"3",lg:""},{default:s(()=>[i("div",kt,[wt,i("div",xt,[i("input",{type:"text",placeholder:"الصافي بعد خصم وزن الوحدات",name:"typeName",id:"typeName",value:e(D),disabled:""},null,8,Tt),o(m,{class:"position-absolute"},{default:s(()=>[n("mdi-weight-kilogram ")]),_:1})])])]),_:1}),o(d,{cols:"12",sm:"6",md:"3",lg:""}),o(d,{cols:"12",sm:"6",md:"3",lg:""})]),_:1}),o(J,{dir:"rtl",class:"mt-5"},{default:s(()=>[o(d,{cols:"12"},{default:s(()=>[Nt,o(T),o(T)]),_:1}),o(d,{cols:"12",sm:"6",md:"3",lg:""},{default:s(()=>[i("div",Mt,[Ut,i("div",Vt,[S(i("input",{type:"text",placeholder:"سعر التعتيق",name:"agingPricePerTon",id:"agingPricePerTon","onUpdate:modelValue":l[12]||(l[12]=t=>e(a).agingPricePerTon=t),class:$(e(r).$errors.find(t=>t.$property=="agingPricePerTon")?"err_field":"")},null,2),[[z,e(a).agingPricePerTon]]),o(m,{class:"position-absolute"},{default:s(()=>[n("mdi-currency-usd ")]),_:1})])]),e(r).$errors.find(t=>t.$property=="agingPricePerTon")?(p(),f("span",Dt,_(e(r).$errors.find(t=>t.$property=="agingPricePerTon").$message),1)):g("",!0)]),_:1}),o(d,{cols:"12",sm:"6",md:"3",lg:""},{default:s(()=>[i("div",Ct,[Ft,i("div",qt,[i("input",{type:"text",placeholder:"اجمالي التعتيق",name:"totalPackingWeight",id:"totalPackingWeight",value:e(R),disabled:""},null,8,It),o(m,{class:"position-absolute"},{default:s(()=>[n("mdi-currency-usd ")]),_:1})])])]),_:1}),o(d,{cols:"12",sm:"6",md:"3",lg:""},{default:s(()=>[i("div",Ot,[St,i("div",zt,[i("input",{type:"text",placeholder:"قيمة الاستمارة",name:"totalPackingWeight",id:"totalPackingWeight",value:e(K).docTax.value,disabled:""},null,8,At),o(m,{class:"position-absolute"},{default:s(()=>[n("mdi-currency-usd ")]),_:1})])])]),_:1}),o(d,{cols:"12",sm:"6",md:"3",lg:""},{default:s(()=>[i("div",Lt,[Gt,i("div",jt,[i("input",{type:"text",placeholder:"قيمة خصم الاردب",name:"totalPackingWeight",id:"totalPackingWeight",value:e(K).agroTax.value,disabled:""},null,8,Yt),o(m,{class:"position-absolute"},{default:s(()=>[n("mdi-currency-usd ")]),_:1})])])]),_:1}),o(d,{cols:"12",sm:"6",md:"3",lg:""},{default:s(()=>[i("div",Kt,[Bt,i("div",Et,[i("input",{type:"text",placeholder:"اجمالي الخصم",name:"totalPackingWeight",id:"totalPackingWeight",disabled:"",value:e(B)},null,8,Rt),o(m,{class:"position-absolute"},{default:s(()=>[n("mdi-currency-usd ")]),_:1})])])]),_:1})]),_:1}),o(J,{dir:"rtl",class:"mt-5"},{default:s(()=>[o(d,{cols:"12"},{default:s(()=>[Ht,o(T),o(T)]),_:1}),o(d,{cols:"12",sm:"6",md:"3",lg:""},{default:s(()=>[i("div",Jt,[Qt,i("div",Xt,[i("input",{type:"text",placeholder:"القيمة قبل الخصم",name:"totalPackingWeight",id:"totalPackingWeight",value:e(B)?e(D)*e(a).productType.pricePerKilo:0,disabled:""},null,8,Zt),o(m,{class:"position-absolute"},{default:s(()=>[n("mdi-currency-usd ")]),_:1})])])]),_:1}),o(d,{cols:"12",sm:"6",md:"3",lg:""},{default:s(()=>[i("div",eo,[to,i("div",oo,[i("input",{type:"text",placeholder:"القيمة بعد الخصم",name:"totalPackingWeight",id:"totalPackingWeight",disabled:"",value:e(B)?e(D)*e(a).productType.pricePerKilo-e(B):0},null,8,io),o(m,{class:"position-absolute"},{default:s(()=>[n("mdi-currency-usd ")]),_:1})])])]),_:1}),o(d,{cols:"12",sm:"6",md:"3",lg:""}),o(d,{cols:"12",sm:"6",md:"3",lg:""}),o(d,{cols:"12",sm:"6",md:"3",lg:""})]),_:1})]),_:1}),i("div",so,[o(re,{color:"red",class:"mr-3",onClick:l[13]||(l[13]=t=>V.value=!1),disabled:e(j),width:"200",height:"50",rounded:"",elevation:"0"},{default:s(()=>[n("الغاء")]),_:1},8,["disabled"]),o(re,{color:"green",width:"200",height:"50",rounded:"",elevation:"0",type:"submit",loading:e(j)},{default:s(()=>[n("حفظ")]),_:1},8,["loading"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])])}}},lo=ao;const ro={class:"dashboard_invoices_listing"},no={class:"page_toolbar d-flex align-center justify-space-between"},co={class:"toolbar_btns"},uo=i("br",null,null,-1),po=i("div",null,"لايوجد بيانات",-1),_o={__name:"Listing",props:["invoices","loading"],emits:["regetItems"],setup(N,{emit:x}){const C=y(!1),W=y(!1),q=y(!1),M=y(null),U=y(null),k=y(1),b=y(10),ee=y([{title:"رقم",key:"index"},{title:"التاريخ",key:"invoiceDate"},{title:"الصومعة",key:"granary.name"},{title:"المورد",key:"supplier.name"},{title:"المستند",key:"documentNumber"},{title:"رقم السيارة",key:"carNumber"},{title:"منتج / فرز",key:"productDetails"},{title:"قبل الخصم",key:"totalInvoicePrice"},{title:"بعد الخصم",key:"totalInvoicePriceAfterDiscount"}]),te=[{title:"الرئيسية",disabled:!1,to:{name:"index"}},{title:"فواتير التوريد",disabled:!0}];return oe(()=>k.value,F=>{x("regetItems",{page:F,limit:b.value})}),oe(()=>b.value,F=>{x("regetItems",{page:k.value,limit:F})}),(F,h)=>{const L=v("v-icon"),I=v("v-btn"),G=v("v-breadcrumbs"),a=v("v-col"),V=v("v-row"),j=v("v-container"),Q=lo;return p(),f("div",ro,[i("div",no,[i("div",co,[o(I,{onClick:h[0]||(h[0]=c=>C.value=!0),width:"20",size:"sm",elevation:"0",color:"transparent"},{default:s(()=>[o(L,{color:"white",size:"25"},{default:s(()=>[n("mdi-plus-circle")]),_:1})]),_:1}),o(I,{width:"20",size:"sm",elevation:"0",color:"transparent",class:"ms-3"},{default:s(()=>[o(L,{color:"white",size:"25"},{default:s(()=>[n("mdi-printer")]),_:1})]),_:1})]),o(G,{items:te,dir:"rtl",class:"pa-0 mb"},{title:s(({item:c})=>[n(_(c.title.toUpperCase()),1)]),_:1})]),o(j,{class:"page_container",fluid:""},{default:s(()=>[N.invoices?(p(),E(V,{key:0,class:"px-4"},{default:s(()=>[o(a,{cols:"12",class:"section_container dashboard_table pa-0"},{default:s(()=>[o(e(ke),{headers:e(ee),items:N.invoices.content,loading:N.loading,"items-per-page":e(b),"onUpdate:itemsPerPage":h[1]||(h[1]=c=>ie(b)?b.value=c:null),page:e(k),"onUpdate:page":h[2]||(h[2]=c=>ie(k)?k.value=c:null),"items-length":N.invoices.totalElements?N.invoices.totalElements:0,"no-data-text":"لايوجد بيانات","show-current-page":"",id:"invoices_table"},{"item.index":s(({item:c})=>[n(_(c.index+1),1)]),loading:s(()=>[o(e(we),{type:"table-row@4"})]),"item.invoiceDate":s(({item:c})=>[n(_(e(se)(c.selectable.date).format("DD/MM/YYYY"))+" ",1),uo,n(" "+_(e(se)(c.selectable.date).format("hh:mm")),1)]),"item.productDetails":s(({item:c})=>[n(_(c.selectable.product.name)+" / "+_(c.selectable.productType.name),1)]),"item.totalInvoicePrice":s(({item:c})=>[n(_(c.selectable.totalPrice.toLocaleString()),1)]),"item.totalInvoicePriceAfterDiscount":s(({item:c})=>[n(_(c.selectable.totalAfterDiscount.toLocaleString()),1)]),"item.actions":s(({item:c})=>[o(L,{color:"blue",style:{cursor:"pointer"},onClick:Y=>(M.value=c,W.value=!0)},{default:s(()=>[n("mdi-square-edit-outline")]),_:2},1032,["onClick"]),o(I,{elevation:"0",color:"transparent",loading:c.selectable.loading,ripple:!1},{default:s(()=>[o(L,{color:"red",style:{cursor:"pointer"},class:"ml-2",size:"23",onClick:Y=>(U.value=c.selectable,q.value=!0)},{default:s(()=>[n("mdi-lock")]),_:2},1032,["onClick"])]),_:2},1032,["loading"])]),"no-data":s(()=>[po]),_:1},8,["headers","items","loading","items-per-page","page","items-length"])]),_:1})]),_:1})):g("",!0)]),_:1}),e(W)?(p(),E(Q,{key:0,openPopup:e(W),onClosePopup:h[3]||(h[3]=c=>(W.value=!1,M.value=null)),toUpdate:e(M),onRegetData:h[4]||(h[4]=c=>(k.value=1,x("regetItems",{page:1,limit:e(b)})))},null,8,["openPopup","toUpdate"])):g("",!0),e(C)?(p(),E(Q,{key:1,openPopup:e(C),onClosePopup:h[5]||(h[5]=c=>C.value=!1),onRegetData:h[6]||(h[6]=c=>x("regetItems",{page:1,limit:e(b)}))},null,8,["openPopup"])):g("",!0)])}}},mo=_o,go={class:"dashboard_tests_page mb-10"},To={__name:"index",setup(N){const x=ce(),{invoices:C}=A(x),W=y(!0),q=async(M,U)=>{W.value=!0,await x.doGetInvoices(M-1,U),W.value=!1};return de(()=>{q(1,10)}),(M,U)=>{const k=mo;return p(),f("div",go,[o(k,{invoices:e(C),loading:e(W),onRegetItems:U[0]||(U[0]=b=>q(b.page,b.limit))},null,8,["invoices","loading"])])}}};export{To as default};
