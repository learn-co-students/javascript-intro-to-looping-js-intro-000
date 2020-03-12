// Take an array as an argument. Start counting from 0, and,
// using a for loop, add a string to the array 25 times.
// string = "I am ${i} strange loop(s)."

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i <= 1 ? '' : 's'}.`)
  }
  return array
}

function whileLoop(number) {
  while (number-- > 0) {
    console.log(number)
  }
  return('done')
}

function doWhileLoop(integer) {
  do {
    console.log(`I run once regardless.`)
  } while (incrementVariable() <= integer)
}

let i = 0
function incrementVariable() {
  return ++i
}
