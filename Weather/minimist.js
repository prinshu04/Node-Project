var minimist=require("minimist");
console.log(process.argv.slice(2));
var modifiedargv=minimist(process.argv.slice(2));
console.log("modified arg");
console.log(modifiedargv);