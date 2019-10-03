module.exports=function(obj,file)
{
    file=file.replace(/{%p_Name%}/g,obj.productName);
    file=file.replace(/{%from_where%}/g,obj.from);
    file=file.replace(/{%nutrients%}/g,obj.nutrients);
    file=file.replace(/{%quantity%}/g,obj.quantity);
    file=file.replace(/{%price%}/g,obj.price);
    file=file.replace(/{%icon%}/g,obj.image);
    file=file.replace(/{%cart%}/g,obj.price);
    file=file.replace(/{%detail%}/g,obj.description);
    file=file.replace(/{%ID%}/g,obj.id);
    if(obj["organic"]===false){
        file=file.replace(/{%NOT_ORGANIC%}/g,"not-organic");
    }
    return file;
}