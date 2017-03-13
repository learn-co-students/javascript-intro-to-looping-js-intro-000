function forLoop(myArray){
  for (let i=0 ; i<25 ; i++) {
    if (i===1) {
      myArray.push("I am "+i+" strange loop.");
    } else {
      myArray.push("I am "+i+" strange loops.");
    }
  }
  return myArray;
};

function whileLoop(i){
  while (i>0) {
    console.log(i--);
  }
  return "done";
}

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    array.pop();
  } while (array.length > 0 || maybeTrue())
  return array;
}
