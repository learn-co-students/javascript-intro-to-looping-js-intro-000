// TODO: Build a function forLoop. It takes an array as an argument.
// Start counting from 0, and, using a for loop, add a string to the array
// 25 times. Your for loop could look something like this:
//
// for (let i = 0; i < 25; i++) {
//   // ...
// }
//
// We don't want just any string.
// If your i value is 1, add the string "I am 1 strange loop."
// If your i value is anything else, add the string "I am ${i} strange loops."
// Remember flow control with if and else? And how do we interpolate i?
// Once the loop has finished, return the array full of strings.

function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    console.log(`I am ${i} strange loop.`)
  }
}
