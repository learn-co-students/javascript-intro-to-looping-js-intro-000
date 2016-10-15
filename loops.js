function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push("I am ${i} strange loop${i == 0 ? '' : 's'}.")
  }

  return array
}

function whileLoop(n) {
  var count = 0
  while (count < n) {
    console.log(n - count)
    count++
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 || maybeTrue === false)

  return array
}
