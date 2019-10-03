var socketio = require("socket.io");
var http = require("http");
var server = http.createServer();
var socketServer = socketio(server);
var db = {};
socketServer.on("connection", function(socket) {
  // console.log(socket.id);
  socket.on("message", function(data) {
    // console.log(data);
    if (data.type == "Joining") {
      db[data.sender] = socket.id;
      socket.broadcast.emit("notice", data.content);
    }else if(data.type=="private"){
       socket.to(db[data.receiver]).emit("notice", data.content);
    }else if(data.type=="public"){
         socket.broadcast.emit("notice", data.content);
    }
    // socket.broadcast.emit("notice", data);
    // socket.to().emit("notice", data);
  });
});
server.listen(3000, function() {
  console.log("Server is listening at port 3000");
});