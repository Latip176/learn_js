let arr = [1,2,3];
/* indexOf mengetahui index dari array */

function constainAll(arr, ...nums) {
  for(let k of nums) {
    if(arr.indexOf(k)===-1) {
      return false;
    }
  }
  return true;
}
console.log(constainAll(arr,1,2,3));