function forLoop(arr) {
  for (i = 0; i < 25; i++) {
    arr.push(`I am ${i} strange loops.`);
  }
  return arr;
}

function whileLoop(num) {
  while (num > 0) {
    console.log(num);
    num = num - 1;
  }
  return "done";
}

function doWhileLoop(arr) {
  function maybeTrue() {
  return Math.random() >= 0.5
}
  do {arr.pop();
  } while (maybeTrue() && arr.length > 0);
  return arr;
}
