let obj = {d1:5, d2:true}; //object
let {d1,d2} = obj; //nama dalam {} harus sama dengan key di object
console.log(d1); //5
console.log(d2); //true

let {a,b} = {a:'hayu',b:'modol'};
console.log(a); //hayu
console.log(b); //modol

//Destructuring value
let angka = {h:5, s:3};
let {h:lima, s:tiga} = angka;
console.log(lima); //5
console.log(tiga); //3

//Destructuring add data to object
let data = {o:5, p:3};
let {o = 7, r = 2} = data;
console.log(o);
