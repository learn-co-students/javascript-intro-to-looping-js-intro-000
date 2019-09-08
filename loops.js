function forLoop(array) {
  for (var i = 0; i < 25; ++i) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}`)
  }
  return array;
}

function whileLoop(n) {
  do {
    console.log(--n);
  } while (n >= 1);
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5
}

// function doWhileLoop(array) {
//   do {
//     array.pop();
//     console.log(array.length);
//   } while (array.length >= 1);
// }

function doWhileLoop(array) {
  do {
    array.pop();
    console.log(array.length);
  }
  while (array.length > 0 || maybeTrue() === false);
  return array;
}
