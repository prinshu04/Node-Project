var cap={
    name:"Steve",
    lastName:"Rogers",
    10:"Age is 10",
    movies:["ABC","DEF","GHI"],
    sayHi:function(){
        console.log("Cap says hi");
    },
    address:{
        city:"New York",
        state:"Manhatten"
    },
    value:"I am key of this obj"
}
var print=console.log
print(cap.movies);
print(cap.movies[2]);
print(cap.address.city);
//loops
for(var value in cap){
    print("----with problem-----");//look notes 
    print(value+":"+cap.value);
    print("----without problem-----");
    print(value+":"+cap[value]);
}

// insertion deletion in objects
print("insertion deletion in objects")
