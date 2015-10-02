var express = require("express");
var app = express();

var hostname = "http://127.0.0.1"; //Change this to your IP address to have images work

app.get("/matches", function(req, res) {

});

app.get("/suggestions", function(req, res) {
    res.send(JSON.stringify([
        {
            name: "Michael Scott",
            program: "Business",
            year: 3,
            photo: hostname + "/img/1ab9ed.jpg"
        },{
            name: "Tiger Woods",
            program: "Tourism",
            year: 1,
            photo: hostname + "/img/5e8f6a.jpg"
        }
    ]))
});

app.post("/likes", function(req, res) {

});

app.post("/dislikes", function(req, res) {

});

app.put("/profile/*", function(req, res) {
    
});

app.listen(8000);