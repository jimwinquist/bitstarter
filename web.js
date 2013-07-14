var express = require('express');

var fs = require('fs');

var indexBuffer = fs.readFileSync('index.html');

var indexString = indexBuffer.toString('utf-8');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(indexString);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
