function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`)
    }
    return array
  }

function whileLoop(n) {
  while(n > 0) {
    console.log(n)
    n -= 1
  }
  return "done"
}

let i = 0

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(num) {
  do {
    console.log("I run once regardless.")
  } while (incrementVariable() <= num)
}
