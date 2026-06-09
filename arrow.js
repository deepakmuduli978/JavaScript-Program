add =(x,y)=>{
    console.log("This is arrow function");
    return x+y;
    console.log("This is not execute");
}
let a=add(5,6);
console.log(a);

mul =(A,B)=>(A+B);
var C=mul(10,4);
console.log(C);