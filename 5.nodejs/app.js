
var express = require("express");

var path = require('path')

var app = express();
1
2
3
var express = require("express");
 
var app = express();

var htmlPath = path.join(__dirname, 'html');

app.use(express.static(htmlPath));
 
var server = app.listen(8082, function(){
    var port = 8082
    console.log("Server started at http://localhost:", port);
});