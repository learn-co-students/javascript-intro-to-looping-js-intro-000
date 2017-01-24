function forLoop(array) {
  for (var i = 1; i < 26; i++) {
        sRet = `"I am ${i} strange loop${i === 1 ? '' : 's'}."`
        array.push(sRet);
  }
  return array
}

function whileLoop(n) {
  while (n>0) {
    console.log(--n)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length = 0 && maybeTrue());
  return array
}
