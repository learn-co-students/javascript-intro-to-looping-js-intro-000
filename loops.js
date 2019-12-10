// forLoop takes an array as an input, and adds strings with a for loop.

function forLoop(loopArray) {
  for (var i = 1; i <= 25; i++) {
    if i === 1 {
      loopArray.push("I am 1 strange loop.");
      return loopArray
    }
    else {
      loopArray.push(`I am ${i} strange loops.`);
      return loopArray
    }
  }
}
