function forLoop(array) {
    for ( let i = 0; i < 25; i++) {
      if (i === 1) {
        array.push(`I am 1 strange loop.`)
      } else {
        array.push(`I am ${i} strange loops.`)
      }
   }
   return array;
 }

function whileLoop(n) {
  while (n>0) {
    console.log(--n);
  }

  return "done"
}

function doWhileLoop(array){
  var x = 0;

  function incrementVariable() {
    x = x + 1;
  }

  do {
    array.pop();
  } while (array.length > 0 && incrementVariable());

  return array;
}
