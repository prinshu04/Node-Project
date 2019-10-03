var https=require("https");// http & https both can required(but https are more secure)
var options={
    // should include only website name exclude http,www. etc
    hostname:'jsonplaceholder.typicode.com',
    port:443,
    method:'GET',
    path:"/users"//contains the further path of webstie from where we want to extract data for eg. ab.com/fruits
};

var request=https.request(options,function(res) {
    var wholeData="";
    res.on("data",function (chunk) {
        wholeData=wholeData+chunk;   
    });
     res.on("end",function() {
         console.log(wholeData)
         
     });
    
});

request.end();
