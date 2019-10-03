
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
   
     
  
  function downloadFile(url){
      return new Promise(function(resolve,reject){
          log("donwloading from "+url);
          url=url.split("/").pop();
          setTimeout(function(){
              resolve(url);
          },1000);
               
      });
  }
  
  function compressFile(filePath) {
      log("We are compressing: "+localpath+filePath)
      filePath=filePath.replace("logo", "logo-resized");
      return new Promise(function(resolve,reject){
              setTimeout(function(){
                  resolve(filePath);
              },2000);
      });
      
  }
  function uploadingFile(serverpath,filePath){
      log("Uploading to: "+serverpath);
      return new Promise(function(resolve,reject){
          setTimeout(function(){
              resolve(filePath);
          },2000);
      
      });
      
  }
  
  
  
  async function urls(){
      var d1=await downloadFile("http://google.com/logo.png");
      log("File saved to: "+localpath+d1);
      var c1=await compressFile(d1);
      log("File compressed to: "+localpath+c1);
      var u1=await uploadingFile(serverpath);
      log("File successfully uploaded to: "+serverpath+c1)
  }
  urls();