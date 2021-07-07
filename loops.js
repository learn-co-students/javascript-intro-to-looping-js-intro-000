function forLoop(array){
  for(var i = 0; i <25; i++){
    if (i === 1){
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
  }
}
return array
}

function whileLoop(n) {
  let e = n;

    while (e > 0) {
      console.log(--e)
    }
    return "done";
  }

  function doWhileLoop(array) {
    function maybeTrue() {
      return Math.random() >= 0.5
    }

    do {
      array.pop();
    } while (array.length > -1 && maybeTrue());
      return array;
  }
