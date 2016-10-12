
function forLoop(array) {
  var testArray = array
  for (var i = 0; i < 25; i++) {
      if (i === 1) {
      testArray.push('I am 1 strange loop.');
  } else {
      testArray.push(`I am ${i} strange loops.`);
  }
}
  return testArray
}

function whileLoop(n) {
  while (n>0) {
    console.log(n--)
  }
  return 'done'
}

function doWhileLoop(array) {
  var testArray = array
  function maybeTrue() {
  return Math.random() >= 0.5
  }
  do {
    testArray.pop()
} while (array.length > 0 && maybeTrue());
return testArray
}
