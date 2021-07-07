// forLoop takes an array as an input, and adds strings with a for loop.

function forLoop (loopArray) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      loopArray.push("I am 1 strange loop.");
    }
    else {
      loopArray.push(`I am ${i} strange loops.`);
    }
  }
  return loopArray
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number); // Decrements "number" by 1.
  }
  return "done"
}

function doWhileLoop(num) {
  // Pick up incrementVariable from lessons
  var i = 0;

  function incrementVariable() {
    i = i+1;
    return i
  }

  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < num);
}
