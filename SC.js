var client=require("socket.io-client");
var readline=require("readline");
var socket = client.connect("http://localhost:3000");

var rl=readline.createInterface({
    input:process.stdin,
    output:process.output,
    prompt:">"
});

rl.question("What is name >",function(answer){  
    // console.log(`${answer} has joined the chat`);
    socket.emit("message",`${answer} has joined the chat`)
    rl.prompt();
});