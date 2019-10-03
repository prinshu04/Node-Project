const readline=require("readline");
const chalk=require("chalk");
const figlet=require("figlet");
const log=console.log;
const minimist=require("minimist");
const axios=require("axios");

log(chalk.blue(figlet.textSync("Recipe    Pool")));
var reader=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    prompt:"Recipe Blogs >>"
    
});
reader.prompt();

reader.on("line",function(data){
    getRecipe(data);
    
})
reader.on("close",function(){
    log(chalk.red("Thanks for using it"));
    // reader.prompt();
})

async function getRecipe(dish){
    var result=await axios.get("http://www.recipepuppy.com/api/?q="+dish);
    log(result["data"]); 
    reader.prompt();
}

