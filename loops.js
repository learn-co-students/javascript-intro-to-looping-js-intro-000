function forLoop(arr) {
  for (var i = 0; i < 25; i += 1) {
    arr.push(`I am ${i} strange loop` + (i === 1) ? '.' : 's.');
  }
  return arr;
}

function whileLoop(n) {
  while (n--) {
    console.log(n);
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(arr) {
  do {
    arr.pop();
  } while (arr.length && maybeTrue());
  return arr;
}
