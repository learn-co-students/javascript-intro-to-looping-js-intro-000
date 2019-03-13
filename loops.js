// For-Loop Exercise
arrTest = [];

var forLoop = function(arr) {
  // No need re-define variable 'arr' inside of this function.
  for (i = 0; i < 25; i++) {
    if (i === 1) {
      arr.push("I am 1 strange loop.") // Pushes string to index 1.
    } else if (i !== 1) {
      arr.push(`I am ${i} strange loops.`) // Pushes string to index i.
    };
  };
  console.log(arr)
  return arr;
};
forLoop(arrTest);


// While Loop Exercise
var whileLoop = function(num) {
  // countdown begins from next number and not original;
  while (num > 0) {
    console.log(--num); // increments subtraction from original number.
  };
  return "done"; // signals that the function is done.
};
whileLoop(150);


// Do-While Exercise
let x = 0; // Must be defined outside of the 'incrementVariable' function or else it will cause an error
let incrementVariable = function() {
  x = x + 1;
  return x;
};

var doWhileLoop = function(num) {
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() <= num);
};
// Cannot show function as called afterwards for some reason because of test.
