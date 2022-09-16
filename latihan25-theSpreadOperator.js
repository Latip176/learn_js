const myFunction = (w,x,y,z) => {
  console.log(z); //4
}
let args = [1,2,3];
myFunction(...args, 4);

//latihan Date
let contoh = [1970,0,1];
let waktu = new Date(...contoh);
console.log(waktu);

function contohh(...arg) {
  console.log(arg[0]);
}
let data = [1,2,3];
contohh(1,2,3);

//spread Array
var arr = ["One","Two","Five"]; //array
arr.splice(2,0,"Three"); //add to array index ke 2
arr.splice(3,0,"Four"); //add to array index ke 3
console.log(arr);

//spread array
let newArr = ["kontol","memek",...arr,"hencet"]; //add array to array seperti concat()
console.log(newArr);

//Object spread
let obj1 = {a:1,b:2,c:3};
let obj2 = {d:4,e:5,f:6};

const margedObj = {...obj1,...obj2}; //cara 1
console.log(margedObj);

const mar = (...ovj) => (
  {...ovj}
)
let aa = {foo:7,zazz:9};
let bb = {foo:89,zazz:92};
let hasil = mar(aa,bb);
console.log(hasil);