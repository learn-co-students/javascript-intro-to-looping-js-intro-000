//Problem 1
function forLoop(array) {
  for (var i = 0; i < 25; i++) {
  if (i === 1) {
  array.push("I am " + i + " strange loop.");
}else{
  array.push("I am "  + i + " strange loops.");
}
}
return array;
}

//Problem 2
function whileLoop(n) {
while (n > 0){
 console.log (--n);
 }
return "done";
}

//Problem 3

function doWhileLoop(array){
function maybeTrue() {
return Math.random() >= 0.5
}

do {
array.pop();
} while (array.length > 0 &&maybeTrue());
return array;

}
