const axios=require("axios");
module.exports=async function location(){
    var loc= await axios.get("http://ip-api.com/json");
    var city=loc["data"]["city"];
    // console.log();
    return city
}
// location();