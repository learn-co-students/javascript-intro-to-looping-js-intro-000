function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if(i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(number) {
  while (number > 0) {
    console.log(number);
    number--;
  }
  return "done";
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (Math.random() >= 0.5);
  return array;
}
