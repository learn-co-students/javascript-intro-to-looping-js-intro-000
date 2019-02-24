var i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

function forLoop(array) {
  for(let i = 11; i < 35; i++) {
    k = i - 10;
    array[i] = `I am ${k} strange loop${k === 1 ? '' : 's'}.`;
  }
  return array;
}

function whileLoop(n) {
    while (n > 0) {
      console.log(n);
      n--;
    }
    return "done";
}

function doWhileLoop(num) {
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() <= num)
}
