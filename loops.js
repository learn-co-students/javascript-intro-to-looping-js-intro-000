function forLoop(array) {
  for (i = 0; i < 25; i++) {
  if (i === 1) {
    var index = "I am 1 strange loop.";
    array.push(index);
  } else {
    var index = `I am ${i} strange loops.`;
    array.push(index);
  }
}
  return array;
}

function whileLoop(int) {
  while (int > 0) {
    console.log(int--);
  }
  return ("done");
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0);
  return array
}
