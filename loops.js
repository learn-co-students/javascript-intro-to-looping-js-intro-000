function forLoopX(array) {
  let makeA = [];
  for (let i=0; i<25; i++){
    makeA[i] = `"I am ${i+1} strange loop${i === 0 ? '' : 's'}."`
  }

  return makeA;

}

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {

      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }

  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
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
