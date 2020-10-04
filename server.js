const express=require("express",);
const app=express();
app.get("/", function(request,response){
  response.send("ello");})
  app.get("/hobbies", function(request,response){
    response.send("heeello");
})
app.listen(3000,function(){
  console.log("server started");

});
