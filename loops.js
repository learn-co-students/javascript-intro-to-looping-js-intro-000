// add a string to an array 25 times with a for loop
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push('I am 1 strange loop.');
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

// counts down from the given number to 0, then returns 'done'
function whileLoop(number) {
  while (number > 0) {
    console.log(--number);
  }
  return 'done';
}

// logs a string at least one times
function doWhileLoop(integer) {
  let i = 0

  function incrementVariable() {
    return ++i;
  }

  do {
    console.log('I run once regardless.');
  } while (incrementVariable() < integer)


}
