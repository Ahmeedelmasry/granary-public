import{M as p,N as n,O as o}from"./entry.ba9d7d56.js";const u=p("invoiceModule",{state:()=>({invoices:[]}),actions:{async doGetInvoices(t,e,a){await n.get(`${o().apiURL}/supplyInvoice?page=${t}&size=${e}${a&&a.supplierId?`&supplierId=${a&&a.supplierId}`:""}${a&&a.granaryId?`&granaryId=${a.granaryId}`:""}${a&&a.creationFromDate?`&creationFromDate=${a.creationFromDate}`:""}${a&&a.creationToDate?`&creationToDate=${a.creationToDate}`:""}${a&&a.FromDate?`&FromDate=${a.FromDate}`:""}${a&&a.ToDate?`&ToDate=${a.ToDate}`:""}${a&&a.productTypeId?`&productTypeId=${a.productTypeId}`:""}${a&&a.productId?`&productId=${a.productId}`:""}`).then(c=>{this.invoices=c.data})},async doAddInvoice(t){let e;return await n.post(`${o().apiURL}/supplyInvoice`,t).then(a=>{e=!0,o().callResponse(!0,a.data.message,1)}).catch(a=>{e=!1,o().callResponse(!0,a.response.data.message,2)}),e},async doUpdateInvoice(t){let e;return await n({data:t,method:"PATCH",url:`${o().apiURL}/supplyInvoice`}).then(a=>{e=!0,o().callResponse(!0,a.data.message,1)}).catch(a=>{o().callResponse(!0,a.response.data.message,2),e=!1}),e}}});export{u as i};
