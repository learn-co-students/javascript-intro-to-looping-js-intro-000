function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    i === 1 ? array.push('I am 1 strange loop.') : array.push(`I am ${i} strange loops.`);
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
  return 'done';
}

function doWhileLoop(array) {
  var i = 0;

  function incrementVariable() {
    i++;
  }

  do {
    array.pop();
  } while (array.length > 0 && incrementVariable());

  return array;
}
