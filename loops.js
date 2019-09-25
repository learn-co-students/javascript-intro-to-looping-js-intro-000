function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    (i === 1) ? array.push('I am 1 strange loop.') : array.push(`I am ${i} strange loops.`);
  } return array;
};

function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  } return 'done';
};

var i = 0;
function incrementVariable() {
  i = i + 1;
  return i;
};

function doWhileLoop(num) {
  do {
    console.log('I run once regardless.');
  } while (incrementVariable() <= num)
};
