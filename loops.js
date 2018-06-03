var array = [];

function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      msg = "I am 1 strange loop.";
    } else {
      msg = `I am ${i} strange loops.`;
    }
    array.push(msg);
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return "done";
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5;
  }

  do {
    array.pop();
  } while (array.length >= 0 && maybeTrue());
  return array;
}