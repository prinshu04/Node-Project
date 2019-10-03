var socketio=require("socket.io");
var http=require("http");
var server=http.createServer();
var socketServer=socketio(server);
var db={};
const log=console.log;
socketServer.on("connection",function(socket){
 socket.on("message",function(socket){
     log("data");
 })

});
 server.listen(function(){
     console.log("server is listening");
 });
