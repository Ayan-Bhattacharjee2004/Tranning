// 614A8DPYEH0ojmnc
// ayanbhattacharjee2004
// mongodb+srv://ayanbhattacharjee2004:2wqJjZTm5YZCQVP6@gim.mzpjo.mongodb.net/?retryWrites=true&w=majority&appName=gim


// 
require('dotenv').config()
const  mongoose = require("mongoose")
const url = process.env.mongo_url


const connectionDB=async()=>{
    try{
        const db=await mongoose.connect(process.env.mongo_url)
        console.log("connected")

    }catch(error)
    {
        console.log(error)
    }
}

module.exports=connectionDB