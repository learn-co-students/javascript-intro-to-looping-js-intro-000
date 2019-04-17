
var array;
function forLoop(array){
  for (let i=0; i<25; i++){
    if (i==1) {array.push (`I am 1 strange loop.`)}
    else {array.push (`I am ${i} strange loops.`)}
  }
  return array;
}

var n
function whileLoop(n){
  while (n > 0){
      console.log(--n)
    }
  return 'done';
  }

function maybeTrue() {
  return Math.random() >= 0.5
}

var array
function doWhileLoop(array){
  do{
  console.log(array.pop())
  }
  while (array.length > 0 && maybeTrue());
  return array
}
