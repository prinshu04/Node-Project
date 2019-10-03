//Slow.js

var server = http.createServer(function(req, res) {
    // set header
    res.writeHead(200, { "Content-type": "text/plain" });
    var file = fs.readFileSync("big.txt");
    res.write(file);
    res.end();
  console.log(process.memoryUsage())
    console.log(Math.ceil(process.memoryUsage().external/(1024*1024))+"mb");
  });
  server.listen(3000, function() {
    console.log("Server is listening at port 3000");
  });
  
  //fast.js