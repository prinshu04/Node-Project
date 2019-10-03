
// Q2 Write includer function that accepts isOdd  function and filter even values from actual array without mutating actual array
// arr[5,8,14,17,23,6,8]
// narr[5,17,23]

//filter


 
const arr=[5,8,14,17,23,6,8]
var newAr=[];
function filters(a) {
    return a%2==1;
    
}

var answer=arr.filter(filters);
console.log(answer);

function includer(array,fn) {

    for(i=0;i<arr.length;i++){
        if(fn(arr[i]))
        newAr.push(arr[i]);
    }
    console.log(newAr);
}
includer(arr,filter);