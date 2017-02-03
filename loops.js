var array = [];
function forLoop(array){
  for (let i = 0; i < 25; i++){

    if (i == 1){
      array[i] = "I am 1 strange loop.";

    } else {
      for (var j = 1, j<=25, j++) {
        array[i] = `I am ${i} strange loops.`;
      }      
    }
  }
  return array
}
function whileLoop(number){
  while(number > 0){
    console.log(number--)
  }
  return "done"
}
function maybeTrue(){
  return Math.random() >= 0.5
}
function doWhileLoop(array){
  do {
    array.length = array.length - 1;
  } while (array.length > 0 && maybeTrue());
  return array
}
