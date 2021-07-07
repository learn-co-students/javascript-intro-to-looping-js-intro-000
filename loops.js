var myArray = []

function forLoop(myArray) {
  for (let i = 0; i <= 25; i++) {
     if (i === 1) {
     myArray.push("I am 1 strange loop.")
     } else if (i <= 25 && i > 0) {
     myArray.push(`I am ${i} strange loops.`)
}
} return myArray
}
// the code above works on its own

//...but not with the code below, so it's isolated for now

n1 = 10;
function whileLoop(n1) {
// Create a function called whileLoop
// The function should take a number as an argument.
  while (n1 > 0) {
  console.log(--n1)
// Using a while loop, count down
// (using console.log) from the
// passed in number to 0
} return 'done'
// Then return the string 'done'.
}

var myArray2 = [1, 2, 3, 4]

function maybeTrue() {
  return Math.random() >= 0.5
}
// Use the maybeTrue() function
// (you can copy it from this README) as the condition,
function doWhileLoop(myArray2) {
// Define a function called doWhileLoop
//  The function should take an array as an argument
  do {
  myArray2.pop();
} while (myArray2.length > 0 && maybeTrue());
// remove elements from the array
// until the array is empty or until
// maybeTrue() returns false.
     return myArray2
     // Finally, return the array.
}

//do {
//  [loopBody];
//} while ([condition]);
