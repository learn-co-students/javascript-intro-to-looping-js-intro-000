function forLoop(array){
  for (var i = 0; i < 25; i++){
    if (i === 1){
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  };
  return array;
};

function whileLoop(number){
  var counter = number;
  while (counter > 0){
    console.log(counter);
    --counter;
  }
  return "done";
};

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    array.length -= 1;
  } while (array.length > 0 && maybeTrue());
  return array;
};
