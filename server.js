const express= require("express");
const bodyparser=require("body-parser")

const app= express();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
});


app.post("/",function(req,res){
    let n1=Number(req.body.num1);
    let n2=Number(req.body.num2);
    let result=n1+n2;
   res.send("The anser is: " + result);
});

app.listen(3000,function(){
    console.log("The server is started");

});

