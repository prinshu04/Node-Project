const log=console.log;
const chalk=require("chalk");

module.exports=async function forecast(city){
    
    var result=await require("../utillity/weather.js")(city);    
    log(chalk.blue("Forecast for "+city));
    log("\n");
    var size=Object.keys(result).length;
    for(i=0;i<size;i++){
        log(chalk.blue(result[i]["applicable_date"]+"- Low: "+Math.floor(result[i]["min_temp"])+" | - High: "+ Math.floor(result[i]["max_temp"])+" | "+result[i]["weather_state_name"]));
        // log("\n");
    }
   
}
// forecast("delhi")