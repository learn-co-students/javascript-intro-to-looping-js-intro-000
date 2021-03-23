function forLoop (array) {
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }
  return array;
}

function whileLoop(number) {
  while(number > 0) {
    console.log(number);
    number--;
  }
  return "done";
}

let i = -1;
function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(num) {
  do {
    console.log("I run once regardless.")
  } while (incrementVariable() < num)
}
