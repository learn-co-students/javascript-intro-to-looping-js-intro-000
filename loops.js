function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    var addString = `I am ${i} strange loops.`
    array.push(addString)

  }
  return array
}

function whileLoop(n) {
  let counter = n;

  while (counter > 0) {
    console.log(counter)
    counter--
  }
  return 'done'

}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array.pop()
  } while (array.length > 0 && maybeTrue())
  return array

}
