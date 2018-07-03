var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../react-client/dist'));

app.listen(port, function() {
  console.log('listening on port 3000!');
});

