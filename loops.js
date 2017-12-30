

function forLoop(array) {
for ( i = 0; i < 25; i++) {
  if (i == 1) {
     array.push("I am 1 strange loop.");
  } else {
  array.push(`I am ${i} strange loop.`);
}
}
return array }

function whileLoop(n) {
while (n > 0) {
  n--;
  console.log(--whileLoop)

}
return "done"
}


  function doWhileLoop(array) {
  function maybeTrue() {
    Math.random() >= 0.5;
    return "false"
  }
    do {
       array.pop();
    } while (array.length > 0 && maybeTrue());
return array

  }
