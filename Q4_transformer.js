
// Q3 Write  transformer function that accepts doubleIt function and multiply every element by 2 without mutating actual array 
// arr[1,2,3,4,5,6]
// narr[2,4,6,8,10,12]

// map

const arr=[1,2,3,4,5,6]
var newAr=[];
function doubleIt(a) {
    return a*2;
    
}
var answer=arr.map(doubleIt);
console.log(answer);

// same equals to map function in js
function transformer(array,fn) {

    for(i=0;i<arr.length;i++){
        newAr.push(fn(arr[i]));
    }
    console.log(newAr);
}
// transformer(arr,doubleIt);