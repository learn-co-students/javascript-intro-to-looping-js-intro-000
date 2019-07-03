// for loop
function forLoop (array) {
  var temp = array.length;
  for (var i = 0 + temp; i < 25 + temp; i++) {
    array[i] = "I am ${i} strange loop${i === 0 ? '' : 's'}.";
  }
  return array;
}

// while loop
function whileLoop(n) {
  while (n >= 1) {
    console.log(--n);
  }
return 'done';
}

// do - while loop
function doWhileLoop (array) {
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
