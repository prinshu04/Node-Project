var ajax= require("./lib/fileDownload.js");
var files = ["file1", "file2", "file3"];
const log=console.log;
var checkObj={};

function getFile(file) {

    ajax.fakeAjax(file, function(data) {
  // what do we do here?
     checkObj[file]=data;
     var size = Object.keys(checkObj).length;
     if(size===files.length)
     {      
        var keys=Object.keys(checkObj);
          for(i=0;i<files.length;i++){
              for(j=0;j<=keys.length;j++){
                  if(files[i]===keys[j])
                  {
                    log("Incoming file "+keys[j]+" "+checkObj[keys[j]]);
                  }
                  
              }
    
            
         }
        
     }
    
  });
  }
 
  getFile("file1");
  getFile("file2");
  getFile("file3");


// log(checkObj);
// log(keys[2]);