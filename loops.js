
function forLoop(array) {
  for (var i=0; i<25; i++) {
    if (i===1) {
      array.push(`I am 1 strange loop.`);
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(numero) {
  while (numero > 0) {
    console.log(numero);
    numero--;
  }
  return "done";
}

function doWhileLoop(numero) {
  var i = 0;
  function incrementVariable() {
    i = i + 1;
    return i;
  }
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < numero);
}
