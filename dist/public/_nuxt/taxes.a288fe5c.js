import{M as o,N as r,O as t}from"./entry.ba9d7d56.js";const l=o("taxStore",{state:()=>({taxes:[]}),actions:{async doGetTaxes(s,a){await r.get(`${t().apiURL}/tax?page=${s}&size=${a}`).then(e=>{this.taxes=e.data})},async doAddTax(s){let a;return await r.post(`${t().apiURL}/tax`,s).then(e=>{a=!0,t().callResponse(!0,e.data.message,1)}).catch(e=>{a=!1,t().callResponse(!0,e.response.data.message,2)}),a},async doUpdateTax(s){let a;return await r({data:s,method:"PATCH",url:`${t().apiURL}/tax`}).then(e=>{a=!0,t().callResponse(!0,e.data.message,1)}).catch(e=>{t().callResponse(!0,e.response.data.message,2),a=!1}),a}}});export{l as t};
