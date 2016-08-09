function maybeTrue() {
  return Math.random() >= 0.5
}

function forLoop(array) {
  for (i = 1; i <= 25; i++) {
    if (i == 1) {
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} stange loops.`)
    }
  }
  return array
}

function whileLoop(n) {
  for (i = n; i > 0; i--) {
    console.log(i)
  }
  return 'done'
}

function doWhileLoop(array) {
  do  {
    array.pop()
  } while (maybeTrue() || array.length > 0)
  return array
}
