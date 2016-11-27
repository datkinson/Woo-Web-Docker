var express = require('express'),
    http = require('http'),
    redis = require('redis'),
    os = require('os');

var app = express();
var hostname = os.hostname();

// Set the view engine
app.set('view engine', 'pug');

console.log(process.env.REDIS_PORT_6379_TCP_ADDR + ':' + process.env.REDIS_PORT_6379_TCP_PORT);

var client = redis.createClient('6379', 'redis');

app.get('/', function(req, res, next) {
  client.incr('counter', function(err, counter) {
    if(err) return next(err);
    res.render('index', {counter: counter, instance: hostname});
  });
});

http.createServer(app).listen(process.env.PORT || 8080, function() {
  console.log('Listening on port ' + (process.env.PORT || 8080));
});
