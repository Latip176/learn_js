let data = new Set([1,2,3,4,5,6,7]);
console.log(data.size); //.size untuk cek berapa jumlah nilai di dalam array atau set. layaknya len() di python.

let data2 = new Set([1,2,3]);
data2.add(4).add(5,3).add(6);

for(let kv of data2.entries()) {
  console.log(kv);
}

console.log("====");
let tes = [1,2,3];
let sum = 0;
tes.filter(n => n%2==0).map(n => sum += n);
/*
  .filter() untuk kondisi
  .map() untuk operator
*/
console.log(sum);