

function forLoop(array){
  for (let i = 0; i < 25; i++) {
      array.push(`I am ${i} strange loop${i === 0 || i === 1 ? '' : 's'}.`);
  }
  return array;
}


function whileLoop(num) {
  while (num > 0) {
    console.log(num);
    num -= 1;
  }
  return "done"
}

function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array) {
  do { array.pop();
  } while (array.length > 0);
  return array;
}
