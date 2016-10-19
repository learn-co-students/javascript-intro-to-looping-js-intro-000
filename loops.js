function forLoop(strangeArray){
  for (let i = 0; i < 25; i++) {
    if (i == 1) {
    strangeArray.push("I am 1 strange loop.");
    }
    else {
      strangeArray.push(`I am ${i} strange loops.`);
    }
  }
return strangeArray;
}

function whileLoop(n) {
  while( n > 0) {
    console.log(--n)
  }
  return "done";
}


function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5;
  }
    do {
      array.shift();
    } while (array.length > 0 && maybeTrue());
    return array;
}
