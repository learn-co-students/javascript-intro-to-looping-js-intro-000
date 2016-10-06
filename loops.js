function forLoop(array) {
  for(i=0; i<25; ++i)
    i == 1 ? array.push("I am 1 strange loop.") : array.push("I am ${i} strange loops.");
  return array;
}

function whileLoop(n) {
  while(0<n)
    console.log(n--);
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());

  return array;
}
