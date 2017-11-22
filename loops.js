function forLoop(array) {
for (let i = 0; i<25; i++) {
  array.push(`I am ${i} strange loop`); }
return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return 'done'
}

function doWhileLoop(array) {
  do {function maybeTrue() {
    return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
    }
    array.shift()
  } while(array.length > 0 && maybeTrue())
  return array
}
