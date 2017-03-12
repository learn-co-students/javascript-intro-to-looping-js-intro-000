function forLoop(array) {
  for (let 1 = 0; i < 25; i++) {
    if (i === 1) {
      return array.unshift('I am 1 strange loop.');
    }
    else {
      return array.unshift(`I am ${i} strange loops.`);
    }
  }
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (maybeTrue());
}