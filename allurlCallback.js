 // #control Async behaviourof function  
   // Downloading file from: http://google.com/logo.png
    // File saved to: C:\Downloads\logo.png
    // We are compressing: C:\Downloads\logo.png
    // File compressed to: C:\Downloads\logo-resized.png
    // Uploading to: http://pep/uploads
    // File successfully uploaded to: http://pep/uploads/logo-resized.png
    // Task completed

  var localpath = "C:\\Downloads\\";
  var serverpath="http://pep/uploads";
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
     compressFile(savedPath,compressed);
     }
  
     function compressed(params) {
       log("File compressed to: "+params)  
       uploadingFile(serverpath,params);
     }

     function compressFile(filePath, compressed) {
     log("We are compressing: "+filePath)
     filePath=filePath.replace("logo", "logo-resized");
     //  log(filePath);    
        setTimeout(function (){
          compressed(filePath)
         } ,2000)
     }
      function uploadingFile(serverpath,params) {
          log("Uploading to: "+serverpath)
          let index=params.lastIndexOf("l");
          params=params.slice(index);
          setTimeout(function () {
              log("File successfully uploaded to: "+serverpath+"/"+params)
              log("TASK COMPLETED");
          },2000)
         //C:\Downloads\logo-resized.png
          
      }

downloadFile("http://google.com/logo.png",downloaded);