function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      console.log("I am 1 strange loop.");
    } else {
    console.log("I am ${i} strange loops.");
  }
}



function whileLoop(n) {
  var n = 25;
  while (n > 0) {
  n = n - 1
}
return console.log("done");
}

function maybeTrue() {
  return Math.random() >= 0.5
}

do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue());

function doWhileLoop(array) {
