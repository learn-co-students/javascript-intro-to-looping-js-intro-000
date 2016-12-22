function forLoop (array) {for (var i=0; i<25;i++) array.push ("I am ${i} strange loops."); return array}
function whileLoop(n) {while (n>0) {console.log(n); n=n-1}; return "done"}
function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array) {do {array.pop()} while (array.length>=1&&maybeTrue());return array}
