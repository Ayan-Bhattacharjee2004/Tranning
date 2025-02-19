const http=require("http")
const express=require("express")
const app=express()
const PORT=8000
const math=require("./math")

app.set(express.json())
app.get("/add",(req,res)=>{
    const {a,b}=req.query    
    const result=math.add(Number(a),Number(b))
    res.json({opration:"add value is ",result})
})

app.listen(PORT,(error)=>
{
    if(!error)console.log(`this server is runing on -${PORT}`)
})
