  var array = {}
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

function whileLoop(countdown) {
  while (countdown > 0) {
    console.log(--countdown)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}
var array = {}
function doWhileLoop(array) {
  do {
    // loop body
    // removes elements from `array` until `array` is empty or
    // until `maybeTrue()` returns `false`:
    array.shift()
  } while (array.length > 0 || maybeTrue())
  return array
}
