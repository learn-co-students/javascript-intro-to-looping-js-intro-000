
function forLoop(array) {
  for (let i=0; i<25; i++) {
    i === 1 ? array.push(`I am ${i} strange loop.`) : array.push(`I am ${i} strange loops.`);
  }
  return array;
}

function whileLoop(myInt) {
  while (myInt > 0) {
    --myInt;
    console.log(myInt);
  }
  return "done";
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 || Math.random() >= 0.5);

  return array;
}
