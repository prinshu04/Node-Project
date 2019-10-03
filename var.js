// var has function scope
function a() {
    var x=20;
    x+=1;
    if(true){
        var x=30;
        x+=1;
        console.log(x);
    }
    console.log(x);
}
console.log(myvar);
var myvar=1;
console.log(myvar);
a();