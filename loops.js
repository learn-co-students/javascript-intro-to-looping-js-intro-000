function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push(i === 1 ? "I am 1 strange loop." : "I am ${i} strange loops.")
  }
  return array;
}

function whileLoop(number) {
  while (number > 0) {
    console.log(number--);
  }
  return 'done';
}

function doWhileLoop(array) {

  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array.shift()
  } while (array.length > 0 && maybeTrue() === true);
  return array;
}
