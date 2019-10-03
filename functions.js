// function statement

function sayHi(){
    console.log("I jst said Hii");
}

sayHi();
//function express
var myfunc=sayHi;
console.log(myfunc);
myfunc=sayHi();
// myfunc();
console.log(myfunc);

(function(){
    console.log("IIFE");
})();