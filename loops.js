
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    (i === 1) ? array.push("I am 1 strange loop.") : array.push(`"I am ${i} strange loops."`);
  }
  return array;
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  }
  return 'done';
}

function doWhileLoop(array) {
do {
  array.pop;
}  while (function maybeTrue() {
  return array.length > 0 && maybeTrue()
});

return array;
}
