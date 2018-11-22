function forLoop(array) {
for (var i = 0; i < 25; i++) {
  if (i === 1) {
    array.push("I am 1 strange loop.")
  } else {
    array.push(`I am ${i} strange loops.`)
  }
}
  return array
}

var n = 9

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return 'done'
}

var i = 0;

function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array) {
  do {
    array.shift();
  } while (array.length > 0 && incrementVariable());
  return array
}
