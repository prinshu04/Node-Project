var fs= require("fs")
var writer=fs.createWriteStream("big.txt");
for(var i=0;i<1000000;i++){
    writer.write("Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eius nostrum veritatis natus dolorum cum!");
}