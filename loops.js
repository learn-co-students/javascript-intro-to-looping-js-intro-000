function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am " + i + " strange loop.");
    } else {
      array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
    }
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  } return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop()
    console.log(array)
  } while (array.length > 0 && maybeTrue());
 return array
}
