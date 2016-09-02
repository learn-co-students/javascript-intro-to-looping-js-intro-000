/*loops forLoop(array) adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
to an array 25 times:*/
function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop");
    }

    else {
      array.push(`"I am ${i} strange loops."`);
    }
  }
}

// i < array.length
