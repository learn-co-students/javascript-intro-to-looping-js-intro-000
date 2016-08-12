function forLoop(array) {
  for (var i = 0; i < 25 ; i++){
    i === 0 ? array.push("I am 1 strange loop.") : array.push(`I am + ${i} + strange loops.`)
  }
  return array;
};


function whileLoop(n){
  while (n > 0) {
    n--
console.log(n)
  }
  return 'done';
};

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  array.shift(1);
  do {
    console.log();
  } while (array.length > 0 && maybeTrue());
    return array;
};
