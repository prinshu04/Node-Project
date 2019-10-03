
function sum(x,y) {
    return x+y
}

function diff(x,y) {
    return x-y
}

function mul(x,y) {
    return x*y
}

function numbers(x,y,fn) {
    var myFn=fn(x,y);
    console.log(myFn);
    
}
numbers(3,4,mul)
// console.log(sum(3,4));