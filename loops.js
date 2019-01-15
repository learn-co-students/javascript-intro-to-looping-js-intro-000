function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`I am 1 strange loop.`);
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(number) {
  while (number > 0 ) {
    console.log(--number);
  }
  return "done";
}

function doWhileLoop(array) {
  var i = 0;

  function incrementVariable() {
    i = i + 1;
  }

  do {
    // need to slice the first element that was incremented above
    array = array.slice(1);
    incrementVariable()
  } while (array.length > 0 && i < 5);

  return array;
}
