function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}


function whileLoop (n) {
  while (n> 0 ) {
    console.log("n");
    n--;
  }
  return "done";
}

function doWhileLoop (array) {
  do {
    console.log("n");
    array.pop();
  }
  while (array.lenth> 0 || maybeTrue === false)
  return array;
}

function forLoop (array) {
  var retArray=[...array];
  for (var i=0;i<25;i++) {

    var str = `I am ${i} strange loop${i === 0 || i> 1 ? 's' :''}\.`;
    retArray.push(str);
  }
  return retArray;
  }
