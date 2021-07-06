function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    if (i == 1) {
      array.push("I am 1 strange loop.")
    }
    else {
      array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
    }
  }

  return array
}

function whileLoop(digit) {
  while(digit > 0) {
    console.log(--digit)
  }
  return "done"
}

function doWhileLoop(ig) {
  do {
    console.log("I run once regardless.")
  } while (incrementVariable() <= ig)
}

var i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}
