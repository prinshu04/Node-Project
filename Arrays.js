// obj & arr are almost same (check the body of obj in Object.js & here array body)

var arr=[
    10,
    10.1,
    "abc",
    [1,2,3,4,5,6],
    function greeter(){
        console.log("function inside array");
     },
     {
         name:"steve"
     },
     true,
     null,
     undefined
]
 var print=console.log;
 print(arr[5]);
 //function code property
 print(arr[4]);
 // function call=>execute code
 print(arr[4]());//will give undefined also arr[4]() will give nothing to print() that's y there is undefined
 arr[4](); // will execute only code inside the fun

 // delete from array  just like objects
 print(arr);
 delete arr[5];
 print(arr);
arr[85];

 // insert in array 
 arr["10"]="added with index";
 arr.myProperty="added without index"
 