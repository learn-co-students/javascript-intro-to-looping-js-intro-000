function forLoop(array) {
  for (let i = 0; i < array.length; i++) {
    if (i === 1) {
      array.push('I am 1 strange loop')
    }
    else {
      array.push(`"I am ${i} strange loops."`)
    }
  }
  return array
}

function whileLoop(number) {
  while (number > 0) {
    console.log(`"number is now ${number}"`);
    number--;
  }
  return 'done'
}

function doWhileLoop(array) {
  do {
    array.length = array.length - 1
  }
  while (array.length > 0 && maybeTrue()) ;
  return array
}

function maybeTrue() {
  return Math.random() >= 0.5
}
