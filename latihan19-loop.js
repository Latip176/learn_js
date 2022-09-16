//looping array
let arr = [1,2,3];
/* cara pertama */
for(let i=0; i < arr.length; i++) {
  console.log(arr[i]);
}
/* cara kedua */
for(let i of arr) {
  console.log(i);
}

//looping dictinory
let dict = {a:1, b:2, c:3};
for(let v in dict) {
  console.log(v);
}