var express = require("express");
var app = express();
var port = process.env.PORT || 8080;



app.get("/", function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/public'));

var io = require('socket.io').listen(app.listen(port));

// // Set our transports

//   io.set("transports", ["xhr-polling"]);
//   io.set("polling duration", 20);

io.sockets.on('connection', function (socket) {
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
console.log("Listening on port " + port);
