const http=require("http");
const fs=require("fs");
var url=require("url");
var port=process.env.PORT||3000;
var data=fs.readFileSync("./data.json");
var overview=fs.readFileSync("./templates/overview.html");
var mypro=fs.readFileSync("./templates/product.html");
var bkg=fs.readFileSync("./templates/background.html");

mypro=mypro+"";
overview=overview+"";

var myJSON=(JSON.parse(data));
// console.log(myJSON.length);


var server=http.createServer(function(req,res){
// var url= req.url;
    if((req.url==="/overview")||(req.url==="/")){
        res.write(bkg); 
            for(i=0;i<myJSON.length;i++){
                var pro=require("./replace.js")(myJSON[i],overview);
                res.write(pro);
            }
    }
    else if(req.url==="/api")
    {
        res.write(data);
    }
    else if(req.url==="/product"){
        // console.log(req.url.id);
        res.write(pro);
    }
    else{
    //  console.log("Error 404 ");
    var id=url.parse(req.url, true).query.id;
    // console.log(id); 
    var pro=require("./replace.js")(myJSON[id],mypro);
    res.write(pro);
    }
    
     res.end()
});

server.listen(port,function (){
    console.log("Server is listening at port 3000");    
});