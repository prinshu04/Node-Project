  
function getData(num,cb){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(num);
        },1000);
    })
}

var p1=getData(10);
var p2=getData(30);
var x;
var y;

p1.then(function(num1){
     x=1+num1;
    console.log(x);
    p2.then(function(num2){
        y=1+num2;
        console.log(y);
        getData(x+y).then(function(answer){
         console.log(answer);
        })
      
    })
})