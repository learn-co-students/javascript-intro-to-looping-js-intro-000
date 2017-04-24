
/*
- Build a function forLoop. It takes an array as an argument.
- Start counting from 0, and, using a for loop, add a string to the array.
But not just any string. If your i value is 1, add the string "I am 1 strange
loop."; but if your i value is anything else, add the string "I am ${i} strange
loops." to the array 25 times.
- (Remember flow control with if and else? And how do we interpolate i?)
- Then return the array.
- HINT: Your for loop could look something like this
for (let i = 0; i < 25; i++) {
  // ...
}
*/

function forLoop(array) {
for (let i = 0; i < 25; i++) {
  function teenager(age) {
    if (i > 1 && i <= 25) {
    return "I am ${i} strange loops";
  } else if (i === 1) {
    return "I am 1 strange loop."}
}
}
}
