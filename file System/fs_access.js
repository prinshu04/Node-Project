const fs=require("fs");
const file=("./plan.json")

fs.accessSync(file,fs.constants.F_OK)