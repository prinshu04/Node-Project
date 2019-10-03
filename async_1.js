const log= console.log;
function waitfor2seconds(){

    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Resolve after 2sec");
        },2000);
    })
}


function waitfor3seconds(){

    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Resolve after 3sec");
        },3000);
    })
}

async function helper(){
    log("before");
    var p1=await waitfor2seconds();
    // var ans= p1;
    log(p1);
    var p2=waitfor3seconds();
    var ans2=await p2 ;
    log(ans2);
    log("After");   
}
helper();

async function parallelhelper(){
    log("before");
    var p1=waitfor2seconds();
    var p2=waitfor3seconds();
    var ans= await p1;
    var ans2=await p2 ;
    log(p1);       
    log(ans2);
    log("After");   
}
parallelhelper();
for(i=0;i<=10;i++){
    log(i);
}

// to execute both fun parallely we should call both the functions first
// and  then wait for them at same time
