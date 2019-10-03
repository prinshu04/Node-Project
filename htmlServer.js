var http=require("http");
var fs=require("fs");
var html=fs.readFileSync("./index.html");

var server=http.createServer(function (req,res) {

    res.writeHead(200,{"content-type":"text/html"});
    res.write(html);
    res.end();    
});

server.listen(3500,function () {
    console.log("Sever is listening at port 3500");
    
})