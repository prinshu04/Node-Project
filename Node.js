var fs= require("fs");
// how to take input
console.log(process.argv);
var input=process.argv[2];
//mkdir 1) check if folder already exists 2) folder name missing or not?(check input)

if(input){
    var exists=fs.existsSync(input);
      if(exists){
          console.log("Folder already exists");
      }
      else{
        fs.mkdirSync(input);
        console.log("folder "+input+" is created");
      }
}
else{
    console.log("Please enter the folder name");
}