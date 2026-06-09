var x=10;
 console.log("Break Statement");
for(var i=0;i<x;i++){
    if(i==4){
        break;
    }
    console.log(i);

}

console.log("Continue");
for(var y=0;y<x;y++){
    if(y==4){
        continue;
    }
    console.log(y);
}