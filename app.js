const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");

const app=express();
var items=["Buy food","Cook food","Eat food"];
let workitems=[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extented: true}));
app.use(express.static("public"));
app.get("/",function(req,res){
let day=date.getDate();


res.render("list",{listtitle : day,newlistitems:items});
});
app.post("/",function(req,res){
  var  item=req.body.new;
  if(req.body.list === "work")
{
  workitems.push(item);
  res.redirect("/work");
}
else {
  items.push(item);
    res.redirect("/");
}

});
app.get("/work",function(req,res){
  res.render("list",{listtitle: "work list",newlistitems:workitems});
});
app.get("/about",function(req,res){
  res.render("about");
});
  app.listen(3000,function(){
  console.log("started");
});
