// Q3 Write  composer function that accepts fn multiplier, arr ,initial value and return the product of arr. 
// Input:arr[1,2,3,4,5]
// Output: 120

// reduce
const arr=[1,2,3,4,5]
var newAr=1;
function product(a,b) {
    return a*b;
    
}

var products=arr.reduce(product)
console.log(products);

function includer(array,fn) {

    for(i=0;i<arr.length;i++){
        newAr=fn(arr[i],newAr)
    }
    console.log(newAr);
}
// includer(arr,product);