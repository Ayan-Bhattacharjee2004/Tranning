require("dotenv").config()
const express= require("express")
const app=express()
const PORT=process.env.PORT ||5000
const path=require("path")

app.set('view engine','pug')
app.use(express.static(path.join(__dirname,"public")))

app.get('/Home',(req,res)=>{
    res.render('Home')
})

app.listen(PORT,(err)=>{
    if(err) throw err
    console.log(`${PORT} : server is running`)
})