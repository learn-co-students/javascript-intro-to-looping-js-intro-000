function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
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
