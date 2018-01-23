var express = require("express");
var app = express();
var port = 8080;



app.get("/", function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/public'));

var io = require('socket.io').listen(app.listen(port));

io.sockets.on('connection', function (socket) {
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
console.log("Listening on port " + port);
