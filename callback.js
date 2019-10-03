const log= console.log;

log("before actual work");
function sayHi(){
    log("I just said Hii");
    
}
setTimeout(sayHi,3000);
log("after actual work");
