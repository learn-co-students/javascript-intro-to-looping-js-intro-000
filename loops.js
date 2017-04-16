function forLoop(array) {
  var i;
  for( i = 0 ; i < 25 ; i++) {
    if (i === 1) {
      array[array.length] = ("I am", i, "strange loop.");
    } else {
      array[array.length] = ("I am", i, "strange loops.");
    }
  }
  return array;
}

function whileLoop (number) {
  while (number > 0) {
    console.log(number);
    number--;
  }
  return "done"
}

function doWhileLoop(array) {   
  function maybeTrue() {
    return Math.random() >= 0.5;
  }
  do{
    array = array.slice(1);
  } while (maybeTrue() && array.length >= 0);
  return array;
}