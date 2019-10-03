var https=require("https");
const fs= require("fs");
var writeToIt=fs.createWriteStream("img.jpeg")
var options={
    hostname:'api.nasa.gov',
    path:"/planetary/apod?api_key=QgQ5ggex64erxPXFGl6CdubF5eB75qFRyLPW0soV",
    port:443,
    method:'GET'
}
var obj={};
var request=https.request(options,function(res){
//   var url=""
var wholeData="";
res.on("data",function (chunk) {
    wholeData=wholeData+chunk;   

});
 res.on("end",function () {
    //  console.log(wholeData)

    obj=JSON.parse(wholeData);
    var url=obj.url;
    var imgReq=https.get(url,function(res) {
         var img="";
         res.pipe(writeToIt)
    //      res.on("data",function (bytes) {
    //         //  img=img+bytes;    //use pipe method insted of this else encoding will be affected.  
    // // for pipe method we need streeam at both end server is stream enable to make local system stream enabled go to line3                  
    //      });
    //      res.on("end",function () {
    //              fs.writeFileSync()
    //      })
         
    })
   imgReq.end();
    
 });
    
});

request.end();