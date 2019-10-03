// // global area
// a = 10;
// var b = 10;
// var a;
// // console.log(a);
// // global object
// console.log(global.a);
// // console.log(global.b);
// console.log(a);
// // console.log(b);

global.Variable = "This is a key global object";
function c() {
  // var myVar;
  console.log("Line no 14: " + myVar);
}
function b() {
  var myVar = 2;
  global.Variable = "Updated global object";
  console.log("Line no 18: " + myVar);
  c();
}

function a() {
  b();
}
console.log("Line no 25: " + myVar);
var myVar = 1;
console.log(global.Variable);
a();
console.log(global.Variable);
console.log("Line no 28: " + myVar);
