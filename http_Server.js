var http=require("http");// use only http for server bcoz https is chargeable
var fs=require("fs");
var plan=fs.readFileSync("./plan.json");
var users=fs.readFileSync("./nasa.json")
// var server=http.createServer(function (req,res) {
//     res.write("Text1 from Server");// to write data on server
//     res.write(file);
//     console.log(req.url);
//     res.end()
    
// });


// Routing via http server
var server=http.createServer(function (req,res) {
    var url= req.url;
    if(url==="/plan"){
        res.write(plan);
    }
    else if(url==="/nasa")
    {
        res.write(users);
    }
    else{
        res.write("Text1 from Server");
    }
    
    // console.log(url);
    res.end()
});

server.listen(3000,function (){
    console.log("Server is listening at port 3000");    
});