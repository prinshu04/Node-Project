const http=require("http");
const fs=require("fs");
var url=require("url");
var overview=fs.readFileSync("./overview.html");
var bkg=fs.readFileSync("./background.html");
var data=fs.readFileSync("./data.json");
overview=overview+"";

 var myJSON=(JSON.parse(data));
// console.log(myJSON);


 var server=http.createServer(function(req,res){
     res.write(bkg);
 
    for(i=0;i<=4;i++){
        var pro=require("./replace.js")(myJSON[i],overview);
        res.write(pro);
    }
  
     res.end()
});

server.listen(3000,function (){
    console.log("Server is listening at port 3000");    
});