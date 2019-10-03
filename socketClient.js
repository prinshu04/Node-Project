var client = require("socket.io-client");

var socket = client.connect("http://localhost:3000");
// console.log(socket.id);

var readline = require("readline");
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ">"
});

reader.question("What is your Name >", function(name) {
  var message = {};
  message.content = `${name} has joined the chat`;
  message.type = "Joining";
  message.sender = name;
  // console.log(name);

  socket.emit("message", message);
  reader.prompt();
});
socket.on("notice", function(data) {
  console.log(data);
  // console.log("Notice of client 2");
  reader.prompt();
});
// /msg siddharth how are you
reader.on("line", function(data) {
  // console.log("Did You said " + data);
  // reader.prompt();
  var message = {};
  var sarr = data.split(" ");
  var command = sarr[0];
  if (command == "/msg") {
    message.receiver = sarr[1];
    message.type = "private";
    message.content = sarr.slice(2).join(" ");
  } else {
    message.type = "public";
    message.content = sarr.join(" ");
  }
  // console.log("line of client 1");
  socket.emit("message", message);
});
