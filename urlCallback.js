// Que 1function downloadFile(url, downloaded) {
    // We are downloading the file here
   
    // let's assume it takes 3 seconds to download
    // accepts url of image and callback which is called when downloading is done   }
//   Input:
  // url:http://google.com/logo.png
  
  // output:
  // Downloading file from: http://google.com/logo.png
  // File saved to: C:\Downloads\logo.png

  var localpath = "C:\\Downloads\\";
  var log= console.log;
 
    function downloadFile(url,fn) {
     log("donwloading from "+url);
     url=url.split("/").pop();
     setTimeout(function (){
         fn(url);
         
     },3000);
    }

    function downloaded(path) {
    var savedPath=localpath+path;
   log("File saved to: "+savedPath);
    
 }

downloadFile("http://google.com/logo.png",downloaded);