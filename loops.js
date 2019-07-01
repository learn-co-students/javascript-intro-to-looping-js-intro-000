function forLoop(arr){
  for (var i = 0; i < 25 ; i++) {
    if (i === 1 ){
      arr.push("I am 1 strange loop.")
    } else {
      arr.push(`I am ${i} strange loops.`)
    }
  } return arr
}

function whileLoop(int){
  while (int > 0 ){
    console.log(--int)
  } return 'done'
}


function doWhileLoop(int){
var i = 0;
  function incrementVariable() {
    i = i + 1;
    return i;
  }
  do {
    console.log("I run once regardless.")

  } while (incrementVariable() < int)
}
