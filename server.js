var express = require("express");
var fs = require("fs");
var path = require("path");
var notes = require("./db/db.json");

var app = express();
var PORT = process.env.PORT || 3087;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

currentID = notes.length;

// API Routes
app.get("/api/notes", function(req, res) {
    return res.json(notes);
});

app.post("/api/notes", function (req, res) {
    var newNote = req.body;

    newNote["id"] = currentID +1;
    currentID++;
    console.log(newNote);

    notes.push(newNote);

    rewriteNotes();

    return res.status(200).end();
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});