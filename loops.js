function forLoop (array) {
  for (var i = 0; i < 25; i++){
    if (i === 1) {
        var myString = `I am ${i} strange loop.`;
    } else {
        var myString = `I am ${i} strange loops.`;
    }
    array.push(myString);
  }
  return array;
}

function whileLoop (n) {
  while (n > 0) {
  console.log(--n);
  }
  return 'done'
}


function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop();
    maybeTrue(); /* or entire MaybeTrue function could go here instead*/
  } while (maybeTrue() && array.length > 0);
  return array;
}
