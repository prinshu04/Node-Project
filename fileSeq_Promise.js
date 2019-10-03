var ajax=require("./lib/fileDownload.js")
var tracker={};
function getFile(file){
    return new Promise(function(resolve,reject){
        ajax.fakeAjax(file,function(data){
            resolve("Incoming File "+file+" "+data);
        });
    });
}

var files=["file1","file2","file3"];
var p1=getFile("file1");
var p2=getFile("file2");
var p3=getFile("file3");

p1.then(function(p1Data){
    console.log(p1Data);
    p2.then(function(p2Data){
        console.log(p2Data);
        p3.then(function(p3Data){
            console.log(p3Data);
    })
});
});