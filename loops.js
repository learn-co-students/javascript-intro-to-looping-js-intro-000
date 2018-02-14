function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loops.`)
  }
  return array
}

function whileLoop(n) {
  var i = n;
  while (i > 0) {
    console.log(i)
    i--
  }

  return 'done'
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array = array.slice(1)
  } while (array.length > 0 && maybeTrue())

  return array
}
