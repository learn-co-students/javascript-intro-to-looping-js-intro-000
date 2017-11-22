function forLoop(array) {
  size = (array.length + 25)
  for (let i = 0; i < size; i++) {
    if (i === 1) {
      array[i] = `I am 1 strange loop.`;
    } else {
      array[i] = `I am ${i} strange loops.`;
    }
  }
  return array;
}

function whileLoop(number) {
  while (number > 0) {
    console.log(number);
    number--;
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(elementArray) {
  do {
    elementArray.shift();
  } while (elementArray.length > 0 && maybeTrue());

  return elementArray;
}
