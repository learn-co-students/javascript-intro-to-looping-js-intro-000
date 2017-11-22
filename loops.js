function forLoop(array) {
  for( var i = 0; i < 25; i++) {
    if( i == 1) {
      return "I am 1 strange loop."
    }
    else {
      return "I am " + ${i} + " strange loops."
    }
  }
}

function whileLoop(number){
  while(number > 0) {
    console.log(--number)
  }
  return "done"
}

fundtion doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do() {
    array.shift
  } while(array.length > 0 && maybeTrue());
}
