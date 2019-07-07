//import express
var express = require("express");

//import fs module
var fs = require("fs");

//Create the Server
var app = express();

//Link Day@22 - app
app.use(express.static(__dirname+"/../Day@22"));

//Create the URL  -- get
app.get("/read",function (req,res) {
    fs.readFile("./customers.json",function (err,data) {
       res.send(data);
    });
});

//Assign the Port.
app.listen(8080);
console.log("Server Listening the Port No.8080");