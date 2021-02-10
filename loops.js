//For loop goes Here
// -- is not working
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push('I am 1 strange loop.');
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array;
}


//While loop - takes num as a parameter and counts down from given number
// When done, returns 'done'
// -- is working

function whileLoop(num) {
  while(num > 0) {
    console.log(num);
    num--;
  }
  return 'done';
}

//Do While Loops - logs the statement at least once, then as long as the incremented variable is less than the given int, it will print
// -- is working

function doWhileLoop(int) {
  let i = 0;
  function incrementVariable() {
  i = i + 1;
  return i;
  }

  do {
    console.log('I run once regardless.');
  } while (incrementVariable() < int);
}
