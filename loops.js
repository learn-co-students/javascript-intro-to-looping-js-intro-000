function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if(i !== 1) {
      array.push(`I am ${i} strange loops.`)
    } else if (i === 1) {
      array.push(`I am 1 strange loop.`)
    }
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n)
    n -= 1
  }
  return "done"
}

function doWhileLoop(num) {
  var counter = 0
function incrementVariable() {
  counter = counter + 1
  return counter
}
  do {
    console.log("I run once regardless.")
} while (incrementVariable() < num)
}
