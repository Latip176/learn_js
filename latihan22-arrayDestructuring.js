//array
let arr = ['1','2','3'];
let [satu,dua,tiga] = arr;

console.log(satu);

//use function
let a = () => { 
  return [1,2,3];
};
let [one,two,tree] = a();
console.log(one);

//use swapping
let j,k,l=6,m=8; //variabel
[j, k=5] = [2]; //changing j 

[l,m] = [m,l]; //changing l,m to m,l
console.log(j,k,l,m);