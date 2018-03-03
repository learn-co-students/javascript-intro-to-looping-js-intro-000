function forLoop(arr) {
  for (var i = 0; i < 25; i++) {
    arr.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  }
}

function whileLoop(n) {
  while (n >= 0) {
    n--;
  }
}

function doWhileLoop(arr) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    arr.pop();
  } while (arr.length > 0 || maybeTrue());
}
