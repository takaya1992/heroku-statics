var express = require('express');
var app = express();
var basicAuth = require('basic-auth-connect');

var username = process.env.BASIC_AUTH_USER;
var password = process.env.BASIC_AUTH_PASSWORD;
app.use(basicAuth(username, password));

app.use(express.static(__dirname + '/public'));
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log("Node app is running");
});
