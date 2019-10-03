#!/usr/bin/env node
var minimist=require("minimist");
const log=console.log;
 var data=minimist(process.argv.slice(2));
//  log(data["_"]);
//  log(data.location)

if((data["_"][1]==="help")||(data["_"].length==1)){
    require("./command/help.js")();
}

else if(data["_"][1]==="version"){
require("./command/version.js")();
}

else if(data["_"][1]==="forecast")
{
    if(data.location!=undefined)
    {
        require("./command/forecast.js")(data.location);
    }
    else 
    {
        async function hii()
        {
            var loc= require("./utillity/location.js");
            var myCity=await loc();
            require("./command/forecast.js")(myCity);
        }
    
     hii();            
   
    }

}
else if(data["_"][1]==="today")
{   
    if(data.location!=undefined)
    {
        require("./command/today.js")(data.location);
    }
    else 
    {
            async function hii()
            {
                var loc= require("./utillity/location.js");
                var myCity=await loc();
                require("./command/today.js")(myCity);
            }
    hii();            
       
    }
}

