function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
    // i === 1 ? array.push("I am 1 strange loop.") : array.push(`I am ${i} strange loops.`);
    // if (i === 1) {
    //   array.push("I am 1 strange loop.");
    // } else {
    //   array.push(`I am ${i} strange loops.`);
    // }
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return 'done';
}

var i = 0;
function incrementVariable() {
  i = i + 1;
}
function doWhileLoop(array) {
  do {
    array.pop();
  //   console.log('array.length = ' + array.length + ' and i = ' + 1);
  //   array = array.slice(1);
  //   incrementVariable();
  // } while (array.length > 0 && i < 5);
  } while (array.length && incrementVariable());
  return array;
}
