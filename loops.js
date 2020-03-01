function forLoop(array){
  for (var i = 0; i < 25; i++){
    array.push(`I am ${1} strange loop${i === 0 ? '' : 's'}`)
  }
  return array
}
function whileLoop(n){
  while(n > 0){
    console.log(n);
    n--;
  }
  return "done"
}

function maybeTrue(){
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do{
    array.pop();
  } while (maybeTrue());
  return array;
}
