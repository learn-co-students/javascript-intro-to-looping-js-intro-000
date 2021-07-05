function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  if (i == 1) {
    array.push("I am 1 strange loop.");
  } else {
    array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
  }
 }
 return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return "done"
}

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(num) {
  i = 0;
  do {
    console.log("I run once regardless.")
  } while (incrementVariable() < num)
}
