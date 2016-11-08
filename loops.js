function forLoop(array) {
  for (var i = 1; i < 26; i++) {
    array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
  }
  return array;
};

function whileLoop(number) {
  while (number > 0) {
    console.log(--number);
  }
  return "done";
};

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.shift();
  } while (array.length > 0 && maybeTrue());
  return array;
};
