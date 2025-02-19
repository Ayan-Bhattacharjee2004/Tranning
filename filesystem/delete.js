const { error } = require("console")
const fs=require("fs")
const path=require("path")
const js=path.join(__dirname,"js")
const php=path.join(__dirname,"php")
fs.truncate(`${php}/b2.php`,(error)=>{//delete
    if(!error)console.log("deleted")
})