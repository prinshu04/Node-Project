var ajax=require("./lib/fileDownload.js")
var log=console.log;
function getFile(file){
    return new Promise(function(resolve,reject){
        ajax.fakeAjax(file,function(data){
            resolve("Incoming File "+file+" "+data);
        });
    });
}
var files=["file1","file2","file3"];
async function helper(){
    var p1=await getFile("file1");
    var p2=await getFile("file2");
    var p3=await getFile("file3");
    log(p1);
    log(p2);
    log(p3)
}
helper();