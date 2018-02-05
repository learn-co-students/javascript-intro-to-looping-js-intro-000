function forLoop(array) {
  for (let i = 0; i <25; i++) {
    array.push(`"I am ${i} strange loop${i == 0 ?  "": 's'}."`)
  }
  return array
}

function whileLoop(n) {
  while (n>0) {
    console.log(n)
    n -= 1
  }
  return 'done'
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (maybeTrue() && array.length > 0);
  return array
}

function maybeTrue() {
  return Math.random() >= 0.5
}
