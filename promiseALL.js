// Que Do all three operation with array of input?

//Promise.all=> 
var arr = [
  "http://google/logo.png",
  "http://google/banner.png",
  "http://google/promo.png"
];

function downloadFile(url) {
    console.log("Downloading file from  " + url);
    var path = "C:\\Downloads\\";
    var img = url.split("/").pop();
    var dimgPath = path + img;
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(dimgPath);
      }, 3000);
    });
  }
  function compressFile(dimgPath) {
    console.log("We are compressing: " + dimgPath);
    var ext = dimgPath.split(".").pop(); //.jpg
    var cPath = dimgPath.split(".").shift(); //
    // console.log(ext);
    // console.log(cPath);
    var cImg = cPath + "-resized." + ext;
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(cImg);
      }, 3000);
    });
  }

  function uploadFile(cImg) {
    var upath = "http://pep/uploads";
    //  C:\Downloads\logo-resized.png
    var toupload = cImg.split("\\").pop();
    var uploadedImg = upath + "/" + toupload;
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(uploadedImg);
      }, 3000);
    });
  }

var downloadPromise= Promise.all(arr.map(downloadFile));

 downloadPromise.
 then(function(dFiles){
     return Promise.all(dFiles.map(compressFile))
 }).then(function(cFiles){
     return  Promise.all(cFiles.map(uploadFile))
     
 }).then(function(uFiles){
     uFiles.map(function(ufile){
        console.log("Uploading to: "+ufile);
     })
 })