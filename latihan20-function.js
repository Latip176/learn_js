//function peratama
function add(n1,n2){
  return n1+n2;
}
console.log(add(5,6));

//function kedua
const jumlah = (n1,n2) => {
  return n1+n2;
}
console.log(jumlah(5,6));

//function ketiga
const nama = x => "nama saya: "+x;
console.log(nama("latif"));

//function keempat
const x = () => console.log("hy!");
x();

//kombinasi forEach function pertama
let arr = [1,2,3];
arr.forEach(function(el) {
  console.log(el*2);
});

//kombinasi forEach function ketiga
arr.forEach(v => {
  console.log(v*2);
});

//latihan kombinasi 1
const tampil = (arr) => {
  arr.forEach(v => {
    console.log(v*2);
  });
};
tampil(arr);

//latihan kombinasi 2
const tampil2 = (arr) => {
  for(let i of arr) {
    console.log(i);
  }
};
tampil2(arr);

//latihan kombinasi 3
let dict = {a:1,b:2,c:3};
const tampil3 = (arr) => {
  for(let v in arr) {
    console.log(v+". hayuuk");
  }
};
tampil3(dict);