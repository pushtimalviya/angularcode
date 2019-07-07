var express = require("express");
var mongodb = require("mongodb");
var router = express.Router();
var mongoClient = mongodb.MongoClient;

var url = "mongodb://localhost:27017/testdb"

router.get("/", function(req, res){
    var response = {};
    mongoClient.connect(url, function(err, db){
        var collection = db.collection("subjects");
        collection.find().toArray(function(err, doc){
            response.subjects = doc;
            console.log(response);
            res.send(response);
        });
        db.close();
    });
});

module.exports=router;