const log= console.log;
const axios=require("axios");


module.exports = async function getweather(city){
    var res=await axios.get('https://www.metaweather.com/api/location/search/?query='+city);
    // log(res.data[0]["woeid"]);
    var forecast=await axios.get('https://www.metaweather.com/api/location/'+res.data[0]["woeid"]);
    // log(forecast["data"]["consolidated_weather"]);
    var result=forecast["data"]["consolidated_weather"];
    return result;
}

// getweather("delhi");