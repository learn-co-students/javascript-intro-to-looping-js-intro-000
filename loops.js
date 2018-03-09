function forLoop(arr){
  for(var i=0 ; i < 25 ; i++){
    arr.push(`I am ${i} strange loop`);
  }
  return arr;
}
function whileLoop(n){
  while( n > 0){
    console.log( n-- );
  }
  return "done";
}
function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(arr){
  do{
    arr.pop();
  }while(arr.length > 0 && maybeTrue());
  return arr;
}
