var express = require("express")
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

// Change this to your IP address, otherwise the "photo" profile will be invalid
var hostname = "http://127.0.0.1";

app.get("/matches", function(req, res) {
    res.json([
        {
            name: "Captain hammer",
            phone: "2502502502"
        },
        {
            name: "Swoggoty Swiggity",
            phone: "6047897897"
        }
    ]);
});

app.get("/suggestions", function(req, res) {
    res.json([
        {
            id: "1ab9ed",
            name: "Michael Scott",
            program: "Business",
            year: 3,
            photo: hostname + "/img/1ab9ed.jpg"
        },{
            id: "5e8f6a",
            name: "Tiger Woods",
            program: "Tourism",
            year: 1,
            photo: hostname + "/img/5e8f6a.jpg"
        }
    ]);
});

app.get("/profile/*", function(req, res) {
    res.json({
        id: "1ab9ed",
        name: "Michael Scott",
        program: "Business",
        year: 3,
        photo: hostname + "/img/1ab9ed.jpg"
    });
});

app.put("/profile/*", function(req, res) {
    res.send("Profile set successfully");
});

app.post("/likes", function(req, res) {
    var likedProfile = req.body || {};
    console.log(likedProfile);
    if (likedProfile.hasOwnProperty("id")) {
        res.send("Received liked profile");
    } else {
        res.status(400).send("Liked profile missing required property id");
    }
});

app.post("/dislikes", function(req, res) {
    var dislikedProfile = req.body || {};
    if (dislikedProfile.hasOwnProperty("id")) {
        res.send("Received disliked profile");
    } else {
        res.status(400).send("Disliked profile missing required property id");
    }
});

app.listen(8000);