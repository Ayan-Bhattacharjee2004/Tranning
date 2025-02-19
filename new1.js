const http=require('http')
http.createServer((req,res)=>{
res.statusCode=200
res.setHeader('Content-Type',"Text/html")
res.write("Good After Noon Ayan")
res.write("<br>")
res.write("HI GIM")
res.write(`
<form>
    <h1> Form</h1>
    <label for="">User Name</label>
    <input type="text">
    <br>
    <br>
    <label for="">Password</label>
    <input type="password">
    <br>
    <br>
    <label for="">confirm Password</label>
    <input type="password">
    <br>
    <br>
    <button>Submit</button>

</form>
<style>
   form {
      display: flex;
      flex-direction: column;
      align-items: center;
      
   }
</style>

`)
res.end()
}).listen(5000)