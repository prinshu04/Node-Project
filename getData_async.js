  const log=console.log;
function getData(num){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(num);
        },1000);
    })
}
async function get(){

var g1=await getData(10);
g1=g1+1;
log(g1);
var g2=await getData(30);
g2=g2+1;
log(g2);
var g3=await getData(g1+g2);
log(g3);
}
get();