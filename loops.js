function forLoop(array){
  for (let i = 0; i < 25; i++) {
  if ( i == 1){
    array.push("I am 1 strange loop.");
  }else{
    array.push("I am ${i} strange loops.");
  }
}
return array;
}

function whileLoop(n){
  while (n > 0){
    console.log(n);
    n-=1;
  }
  return "done";
}

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
  }

  do {
    array.pop();
  } while(array.length == 0 && maybeTrue())

  return array;
}
