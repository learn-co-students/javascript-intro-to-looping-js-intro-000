var array = new Array();

function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`)
  }
  return array
}

function whileLoop(n) {
  while ( n > 0) {
    n--
    console.log(n)
    if ( n === 0) {
    return 'done'
    }
  }
  return n
}

function maybeTrue() {
  return Math.random() >= 0.5
}



function doWhileLoop(array) {
  do { array.pop();

  } while (array.length >= 0 && maybeTrue())

  return array;
}
