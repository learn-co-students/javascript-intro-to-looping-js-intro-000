function forLoop(array) {
  for (let i = 0; i<25; i++) {
    if (i === 1 || i === 0) {
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

function whileLoop(number) {
  while (number>0) {
    console.log(--number)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (maybeTrue() || array === []);
  return array
}
