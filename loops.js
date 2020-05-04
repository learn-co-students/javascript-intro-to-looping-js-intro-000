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
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }
  return array;
}

// **TODO**: Create a function called `whileLoop` in `loops.js`. The function
// should take a number as an argument. Using a `while` loop, count down (using
// `console.log`) from the passed in number to 0. Then return the string `'done'`

function whileLoop(num) {
  while (num > 0) {
    console.log(num--);
  }
  return "done";
}

// **TODO**: Define a function called `doWhileLoop` in `loops.js`. The function
// should take an integer as an argument. Use the `incrementVariable()` function
// (you can copy it from this README) in the condition, and console log
// `"I run once regardless."` while `incrementVariable()` returns a number less
// than the parameter received. (Your condition might look something like
// `incrementVariable() < num`.) Remember that it should also console log when
// receiving 0 as a parameter because the do-while runs before the condition is
// checked.

function doWhileLoop(int) {
  function decrementVariable() {
    return int--
  }

  do {
    console.log("I run once regardless");
  } while (decrementVariable() > 1);
}
