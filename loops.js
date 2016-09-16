function forLoop(array) {
  for (var i=0; i<25; i++) {
    array.push(`"I am ${i} strange loop${i===0 ? '' : 's'}."`);
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n.toString());
    n--;
  }
  return "done";
}

function doWhileLoop(array) {
  var result = [...array]
  do {
    result.pop();
  } while (result.length > 0 && maybeTrue())
  return result;
}

function maybeTrue() {
  return (Math.random() > 0.5);
}
