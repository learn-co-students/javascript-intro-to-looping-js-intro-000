function forLoop(array) {
  for (var i = 1; i <= 25; i++) {
    var plural = i === 0 ? '' : 's'
    array.push(`I am ${i} strange loop${plural}.`)
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n--)
  }
  return "done"
}



function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
  }

  do {
    array.pop()
  } while(array.length > 0 || maybeTrue())

  return array
}
