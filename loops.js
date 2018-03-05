function forLoop(array) {
  for(var i = 0; i < 25; i++) {
    array.push(`I am ${i + 1} strange loop${i === 0 ? '' : 's'}.`);
    
  }
  return array;
}

function whileLoop(number) {
  while (number > 0) {
    console.log(number--);
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array) {
  do {
    array.shift();
  }
  while (array.length > 0 && maybeTrue());
return array;
  
}
