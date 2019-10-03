var readline=require("readline");
const chalk=require("chalk");
const figlet=require("figlet");
var minimist=require("minimist");
const log=console.log;

var reader=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    prompt:"MetaWeather>>"
});

log(chalk.blue(figlet.textSync("Weather App")));
reader.prompt();
// var input=
reader.on("line",function(data){
    
    if(data==="cool"||data==="cool help"){
        require("./command/help.js")();
        reader.prompt();
    }
    else if(data==="cool version"){
    require("./command/version.js")();
    reader.prompt();
    }
    else if(data==="cool forecast")
    {
    require("./command/forecast.js")("delhi");
    reader.prompt();
    }
    else if(data==="cool today")
    {
    require("./command/today.js")("delhi");
    reader.prompt();
    }

});