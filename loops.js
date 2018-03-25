function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.unshift(`I am ${i} strange loop.`);
    }
    else {
      array.unshift(`I am ${i} strange loops.`)
    }
  }
  return array;
}


function whileLoop(n){
  while (n > 0) {
    console.log(n)
    n -= 1;
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array === [] || maybeTrue());
return array;
}
