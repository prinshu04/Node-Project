var EventEmitter=require("events");
var myEmitter= new EventEmitter();
const log=console.log;
myEmitter.on("ButtonClick",function(ButtonName){
    log("A button has been pressed "+ButtonName);
});

// on function definition
myEmitter.on("ButtonClick",function(){
    log("called after first listener");
});

//event
myEmitter.on("AnotherEvent",function(){ //2nd argument optionL
    log("I am another event");
    log("''''''''''''''''''''''''''''''''''");
    myEmitter.emit("ButtonClick","RedButton");

});
//observe line 17 & line 21 by commenting & uncommenting see output
// myEmitter.emit("ButtonClick","Main-Button");
myEmitter.on("ButtonClick",function (){
    log("Called after second listener");
    
})
 //event function call

myEmitter.emit("AnotherEvent");
