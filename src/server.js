const http=require("http")
const host="10.9.155.102"
const port=3000
const router=require("./scripts/module/server/getUserInfo")
http.createServer((req,res)=>{
   router.map(req,res)
}).listen(port,host,()=>{
    console.log('server is running...')
})