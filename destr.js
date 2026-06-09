let num=[1,3,4];
console.log(num);
let [va]=num;
console.log(va);
let [...va1]=num;
console.log(va1);
let mm=num;
console.log(mm);
let vr=[...num]
num.push(6);

console.log(num);
console.log(va1);
console.log(mm);
console.log(vr);