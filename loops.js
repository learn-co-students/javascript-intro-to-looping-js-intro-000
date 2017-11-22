// Question 1: For Loop
function forLoop(array) {
  for (let i === 0; i < 25; i++) {
    if (i === 1) {console.log(`"I am 1 strange loop."`)}
    else {console.log(`"I am ${i} strange loops."`)}
  }
  return array
}

// Question 2: While Loop
function whileLoop(n){
  while (n > 0){
    console.log(n--)
  }
  return 'done'
}

// Question 3: DoWhile Loop
function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array) {
  do {array.shift()}
  while (array.length = 0 && maybeTrue() === false);
  return array
}
