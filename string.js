let name="Deepak";
for(let i=0;i<name.length;i++){
    console.log(name[i]+" ");
}

let name1=["Deepak","jitu",89];
mt=()=>console.log("i am arrow function");
for(let i=0;i<name1.length;i++){
    console.log(name1[i]+" ");
    if(name1[i]=="jitu"){
        add();
    }
    else{
        mt();
    }
}

function add(){
    console.log("I am invoking function");
}

let nums = [1,2,3];

nums.forEach(num=>{
    console.log(num);
});
console.log(9);