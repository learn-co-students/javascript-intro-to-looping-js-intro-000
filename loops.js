function forLoop(array) {
    for (var i = 0; i < 25; i++) {
      var x = `I am ${i} strange loop${i < 2 ? '' : 's'}.`;
      array.push(x);
    }
    return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n--);
  }
  return 'done';
}

var i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(num) {
  do {
    console.log('I run once regardless.');
  } while (incrementVariable() < num + 1);
}
