var express = require("express");
var fs = require("fs");

var router = express.Router();


router.get("/",function (req,res) {
    fs.readFile("./about.json",function (err,data) {
       res.send(data.toString());
    });
});

module.exports=router;