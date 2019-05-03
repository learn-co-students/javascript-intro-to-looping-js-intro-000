function forLoop(array) {
  for (var i=0;  i<25 ; i++) {
    array.push(`I am ${i} strange loop$(i === 0 ? '' : 's').`);
    }
  return array;
}

function whileLoop(number){
  while (number>0){
    console.log(--number)
  }
  return "done";
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5;
  }
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
}
