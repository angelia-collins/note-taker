var express = require("express");
var path = require("path");
var http = require("http");
var fs = require("fs");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// html routes
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

//api routes
app.get("/api/notes", function(req, res) {
    fs.readFilefs.readFile(__dirname + "/notes.html", function(err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    return res.json(characters);
  });


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


