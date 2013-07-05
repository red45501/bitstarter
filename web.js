var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

function getFStr(filename){
	return fs.readFileSync(filename).toString();
}

app.get('/', function(request, response) {
  response.send(getFStr('index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
