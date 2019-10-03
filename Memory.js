//  console.log(global);
 var print=console.log;
 print(myVar);
 var myVar=10;
 print(myVar);
 sayHi();
//  Greeter("steve"); will give error
 function sayHi(){                  //function statement
     console.log("I just said hi");
 }
 var greeter=function(whatToSay){   //function expressions
     console.log("hi "+whatToSay);
 }
 greeter("tony");
 //1. make undefined all variables ,function expressions and provide allocation to fun statement
 //2. Run the code