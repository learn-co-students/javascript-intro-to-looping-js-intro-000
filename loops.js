var array = []
/*TODO: Define a function called doWhileLoop in loops.js. The function should take an integer as an argument.
 Use the incrementVariable() function (you can copy it from this README) in the condition, and console log "I run once regardless."
 while incrementVariable() returns a number less than the parameter received.
 (Your condition might look something like incrementVariable() < num.)
 Remember that it should also console log when receiving 0 as a parameter because the do-while runs before the condition is checked.*/
function forLoop (array) {
  for (let i = 0; i < 25; i++) {
      array.push (`I am ${i} strange loop${i===1  ? '' : 's'}.`);
  }
  return array
}

function whileLoop(n){

  while (n>0) {

    console.log(n--)
  }
  return('done')
}

function doWhileLoop(num){
  var D = 0
  function incrementVariable(){
    return ++D
  }
  do{
    console.log("I run once regardless.")
  }
  while(incrementVariable() < num)
}
