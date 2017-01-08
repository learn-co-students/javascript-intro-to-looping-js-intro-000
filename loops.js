function forLoop(arr) {
  for(let i = 0; i < 25; i++){
    if(i == 1) {
      arr.unshift("I am 1 strange loop.")
    }
    else {
      arr.unshift(`I am ${i} strange loops.`)
    }
  }
  return arr;
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(arr) {
  do {
    arr.shift()
  } while ( arr.length > 0 || maybeTrue() );
  return arr
}
