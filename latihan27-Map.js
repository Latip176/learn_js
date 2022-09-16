let data = new Map([[1,2,3],[4,5,5]]);
console.log(data.size);

let data2 = new Map();
data2.set('k1','v1').set('k2','v2');
console.log(data2);//v1

console.log(data2.has('k1')); //.has() untuk cek apakah ada tau tidak nili di dalam arraynya.

for(let kv of data2.entries()) {
  console.log(kv);
}