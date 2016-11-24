var express = require('express'),
    http = require('http'),
    redis = require('redis');
var app = express();
app.set('view engine', 'pug');
var client = redis.createClient('6379', 'redis');

app.get('/', function(req, res, next) {
  client.incr('counter', function(err, counter) {
    if(err) return next(err);
    res.render('index', {counter: counter});
  });
});

http.createServer(app).listen(80, function() {
  console.log('Listening on port 80');
});

