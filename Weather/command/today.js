const log=console.log;
const chalk=require("chalk");

module.exports=async function today(city){    
    
    var result=await require("../utillity/weather.js")(city);
    log("\n");
    log(chalk.blue("Current conditions in "+city));
    log("        "+chalk.blue(Math.floor(result[0]["the_temp"])+" "+result[0]["weather_state_name"]));
     
}
// today("delhi");