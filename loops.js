var myArray = []


function forLoop (array){
  for (var i = 0; i < 25; i++){
    if (i === 1) {
      array.push("I am 1 strange loop.")
    }
    else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array;
}



var x = 10

function whileLoop(x) {
  while (x > 0) {
    console.log(--x)
  }
  return 'done'
}


var num = 10

function doWhileLoop(num){
  var i = 0
  function incrementVariable() {
    i = i + 1;
    return i;
  }
  do {
    console.log(`I run once regardless.`)
  } while (incrementVariable() < num);
}
