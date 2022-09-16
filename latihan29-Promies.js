setTimeout(function() {
  console.log("hello world!");
  setTimeout(function() {
    console.log("hello world2!");
  },1000)
}, 1000);
console.log("end");

function asyncFunction(work) {
  return new Promise(function(resolve, reject) {
    if(work==="") {
      reject(Error("Nothing!"));
    }
    setTimeout(function() {
      resolve(work);
    }, 1000);
  });
}
asyncFunction("work")
.then(function(result) {
  console.log(result);
  return asyncFunction("work2");
}, function(error) {
  console.log(error);
});