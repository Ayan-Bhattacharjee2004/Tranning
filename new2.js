//console.log("hiii ")
//console.log(process.argv[1])
const http=require("http")
const PORT=2004
http.createServer((req,res)=>{
    res.write("this is mern")
    res.end()
}).listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//.listen((err)=>{
  //  if(!err)
  //   console.log(`this server is running in ${port}`)})


//.listen(`this server is running in ${PORT}`)