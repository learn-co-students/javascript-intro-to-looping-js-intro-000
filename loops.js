function forLoop (myArray) {
  for (let i = 0; i < 25; i++) {
  if (i === 1) {
    myArray.push(`I am 1 strange loop.`)
} else { 
    myArray.push(`I am ${i} strange loops.`)
}
} return myArray
}
function whileLoop (aNum) {
  while (aNum > 0) {
    console.log(--aNum);
    if (aNum === 0) {
      return "done"
    }
  }
}

function incrementVariable() {
  i = i + 1;
  return i;
}

i = 0;

function doWhileLoop (aNum) {
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() <= aNum);
}