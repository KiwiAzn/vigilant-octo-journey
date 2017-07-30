var express = require("express");
var app = express();

const path = require('path');

/* serves main page */
app.get("/", function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../../dist/client/html/index.html'));
});

app.post("/user/add", function(req, res) { 
	  /* some server side logic */
	  res.send("OK");
});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res){ 
    console.log('static file request : ' + req.params);
    res.sendFile(path.resolve(__dirname + '/../../dist/client/' +req.params[0])); 
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
