function forLoop(array) {
  newArray = array.slice();
  for (let i = 0; i < 24; i++) {
    if (i === 0) {
      newArray.push("I am a strange loop.");
      newArray.push("I am 1 strange loop.");
    }
    else {
      newArray.push("I am " + (i + 1) + " strange loops.");
    }
  }
  console.log(newArray);
  return newArray;
}

function whileLoop(n) {
  let i = 0;
  while (n > i) {
    console.log(n);
    i++;
  }
  return 'done';
}

function doWhileLoop(num) {
  let i = 0;

  function incrementVariable() {
    i = i + 1;
    return i;
  }
  do {
    console.log("I run once regardless");
  } while (incrementVariable() < num);
}
