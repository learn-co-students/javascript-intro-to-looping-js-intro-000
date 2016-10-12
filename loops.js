var array = [];

function forLoop(array){
  for(var i = 0; i < 25; i++){
    if(i===1){array.push(`"I am 1 strange loop."`)}
    else{array.push(`"I am ${i} strange loops."`)}
  }
  return array;
}

function whileLoop(n){
  while(n > 0){console.log(--n);}
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    console.log('...counting cars somewhat randomly...');
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
}
/* Define a function called doWhileLoop in loops.js.
The function should take an array as an argument.
Use the maybeTrue() function (you can copy it from this README)
as the condition, and remove elements from the array
until the array is empty or until maybeTrue() returns false.
(Your condition might look something like
array.length > 0 && maybeTrue().) Finally, return the array. */
