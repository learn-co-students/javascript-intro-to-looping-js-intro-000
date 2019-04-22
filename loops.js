function forLoop(array) {
  //var newArray = array;
  for (var i = 0; i<25; i++) {
    array = [...array,`I am ${i} strange loop${i === 1 ? '' : 's'}.`];
  }
  return array;
}

function whileLoop(n) {
  while (n>0) {
    console.log(n--);
    }
    return "done";
  }

function doWhileLoop(num) {
  do {
    num--;
    console.log("I run once regardless.");
  } while (num>0);
}
