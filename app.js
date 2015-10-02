var express = require("express")
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use("/img", express.static("img"));

// Change this to your IP address, otherwise the "photo" profile will be invalid
var hostname = "http://127.0.0.1:8000";

app.get("/matches", function(req, res) {
    res.json([
        {
            name: "Michael Scott",
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
            name: "Captain hammer",
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

app.get("/profile/:profile", function(req, res) {
    if (req.params.profile !== '1ab9ed') {
        res.status(404).json({
            message: "No profile found"
        });
        return;
    }

    res.json({
        id: "1ab9ed",
        name: "Captain hammer",
        program: "Business",
        year: 3,
        photo: hostname + "/img/1ab9ed.jpg"
    });
});

app.put("/profile/:profile", function(req, res) {
    res.json({
        message: "Profile set successfully"
    });
});

app.post("/likes", function(req, res) {
    var likedProfile = req.body || {};
    console.log(likedProfile);
    if (!likedProfile.hasOwnProperty("id")) {
        res.status(400).json({
            message: "Liked profile missing required property id"
        });
        return;
    }

    res.json({
        message: "Received liked profile"
    });
});

app.post("/dislikes", function(req, res) {
    var dislikedProfile = req.body || {};
    if (!dislikedProfile.hasOwnProperty("id")) {
        res.status(400).json({
            message: "Disliked profile missing required property id"
        });
        return;
    }

    res.json({
        message: "Received disliked profile"
    });
});

app.listen(8000);