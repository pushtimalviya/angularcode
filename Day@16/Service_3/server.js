var express = require("express");
var bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.json());

app.use(express.static(__dirname+"/../POC"));
app.get("/",function (req,res) {
   res.redirect("/index.html");
});

app.post("/api/login",function (req,res) {
    var userDetails={uname:"admin",upwd:"admin"};

   if(req.body.u_name==userDetails.uname && req.body.u_pwd==userDetails.upwd){
       res.json({login:"success"});
   }else{
       res.json({login:"failure"});
   }

});

var info = require("./routes/info");
app.use("/info",info);

var about = require("./routes/about");
app.use("/about",about);


var feedback=require("./routes/feedback");
app.use("/feedback",feedback);

app.listen(8080);
console.log("Server Listening the Port No.8080");