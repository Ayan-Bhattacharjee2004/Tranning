require ("dotenv").config()
const mongoose= require("mongoose")
const createSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
},{timestamps:true})

module.exports=mongoose.model("Gim_Student",createSchema)
