import{M as r,N as p,O as a}from"./entry.ba9d7d56.js";const c=r("productTypeStore",{state:()=>({productTypes:[]}),actions:{async doGetProductTypes(s,t){await p.get(`${a().apiURL}/productType?page=${s}&size=${t}`).then(e=>{e.data.content.forEach(o=>{o.selectedId=o.id,o.selectedName=o.name}),this.productTypes=e.data})},async doAddProductType(s){let t;return await p.post(`${a().apiURL}/productType`,s).then(e=>{t=!0,a().callResponse(!0,e.data.message,1)}).catch(e=>{t=!1,a().callResponse(!0,e.response.data.message,2)}),t},async doUpdateType(s){let t;return await p({data:s,method:"PATCH",url:`${a().apiURL}/productType`}).then(e=>{t=!0,a().callResponse(!0,e.data.message,1)}).catch(e=>{a().callResponse(!0,e.response.data.message,2),t=!1}),t}}});export{c as p};
