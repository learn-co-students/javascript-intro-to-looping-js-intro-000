function forLoop(array) {

  for (var i = 0; i < 25; i++) {
    array.push("I am ${i} strange ");

    if (i===1) {
      array[i] += "loop.";
    }
    else {
      array[i] += "loops."
    }
  }
  return array;
}

function whileLoop(n) {
  while(n > 0){
    console.log(n);
    --n;
  }
  return "done";
}

function doWhileLoop(array) {
  do {
    array.splice(0,1)
  } while (array.length === 0 || !maybeTrue());

  return array;
}

function maybeTrue() {
  return Math.random() >= 0.5
}
