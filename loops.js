function forLoop(array){
  for(var i = 0; i < 25; i++){
    array.push("I am ${i} strange loops.")
  }
  return array;
}

function whileLoop(num){
  while(num > 0){
    console.log(num);
    num--;
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array){
  do{
    array.shift();
  } while(array.length > 0 && maybeTrue());
  return array;
}
