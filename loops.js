function forLoop(array1) {
  for (let i=0; i<25; i++){
    if (i==1) {
      array1.push ("I am 1 strange loop.");
    }
    else {
      array1.push (`"I am ${i} strange loops."`);
    }
  }

return array1;
}

function whileLoop (number) {
  while (number > 0) {
    console.log(number--);
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array1) {

  do {
    array1.pop();
  } while (array1.length > 0 || maybeTrue())
  return array1;
}