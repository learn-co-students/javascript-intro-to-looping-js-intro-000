function forLoop(array) {
  for (var i = 1; i <= 25; i++) {
    array.push("I am " + i + " strange loop.")
  }
  return array;
}

function whileLoop(n) {
  for (var i = n; i > 0; i--) {
    console.log(i)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  while (array.length > 0 && maybeTrue()) {
    array.pop()
  }
  return array
}
