function forLoop(array) {
  for (i = 1; i <= 25; i++) {
    if (i === 1) {
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} stange loops.`)
    }
  }

  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n--)
  }

  return 'done'
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do  {
    newArray = array.slice(1)
  } while (maybeTrue() && array.length > 0)

  return newArray
}
