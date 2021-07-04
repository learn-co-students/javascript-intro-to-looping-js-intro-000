function forLoop(array){
  var length = array.length;
  for(let i = 0; i < 25; i++){
    if(i == 1){
      array[length + i] = "I am 1 strange loop."
    } else {
      array[length + i] = "I am " + i + " strange loops."
    }
  }
  return array;
}

function whileLoop(number){
  while(number > 0){
    console.log(number--)
  }
  return "done";
}

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
}
