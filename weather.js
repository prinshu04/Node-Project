const http=require("https");
var city='london';
const options={
    // hostname:'https://www.metaweather.com/api/location/search/?query='+city,
    hostname:'https://jsonplaceholder.typicode.com/users',
    port:443,
    path:'/',
    method:'GET'
};
const req=http.request(options,(res)=>{
    console.log(res.statusCode);

    res.on('data', (d) => {
        process.stdout.write(d);
      });
})

req.on('error', (e) => {
    console.error(e);
  });
  req.end();