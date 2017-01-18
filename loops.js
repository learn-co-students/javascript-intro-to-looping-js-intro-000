// For Loop syntax for ([initialization]; [condition]; [iteration]) {[loopBody]}

function forLoop(array){
  for (let i = 0; i < 25; i++){
    if (i === 1){
      array.push("I am 1 strange loop.")
    }
    else {
      array.push(`I am ${i} strange loops.`) //whenever you use interpolation(${}), you will use backticks  instead of quotes
    }
  }
  return array
}

//while loop syntax while ([condition]) {[loopBody]}

function whileLoop(n) {
  while (n > 0) {
  console.log(--n)
  }
  return 'done';
};

// Do While Loop Syntax do {[loopBody];} while ([condition]);

function doWhileLoop(array){
  function maybeTrue(){
    return Math.random() >= 0.5
  }
  do {
    array.pop();
  }
  while (
    array.length > 0 && maybeTrue()
  );
  return array
}
