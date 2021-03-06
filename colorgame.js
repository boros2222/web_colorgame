var express = require("express");
var app = express();
var path = require("path");

app.use(express.static("public"));

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(3004, "localhost", function() {
	console.log("ColorGame has started!");
});
