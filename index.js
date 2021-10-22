const express=require("express");
const app=express();
app.set('view engine','ejs')
app.use(express.static("public"));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.get("/Janatagarege",function(req,res){
  res.render("list",{title:"Janathagarege"})
});
app.get("/NannakuPrematho",function(req,res){
  res.render("list",{title:"NannakuPrematho"})
});
app.get("/Jailvakusa",function(req,res){
  res.render("list",{title:"Jailvakusa"});
});


app.listen(process.env.PORT||3000,function(){
  console.log("server is started");
});
