var readline=require("readline");
const log=console.log;
var reader= readline.createInterface({
 input:process.stdin,
 output:process.stdout,
 prompt:"myCli>"
});

reader.prompt();
reader.on("line",function (data) {
 log("Did you said "+data);
 reader.prompt();    
});

reader.on("close",function() {
    log("Thank you for using CLI");
    reader.prompt();    
});

// here emit of event will be done by node itslef automatically 1)after input+enter(for line event)
// 2) after ctrl+c for close event