function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    if(i === 1) {
      arr.push("I am 1 strange loop.")
    } else {
      arr.push(`I am ${i} strange loops.`)
    }
  }
  return arr;
}

function whileLoop(number) {
  while(number > 0) {
    console.log(number);
    number--;
  }
  return 'done'
}

function doWhileLoop(integer) {
  var i = 0;

  function incrementVariable() {
    i = i + 1;
    return i;
  }
  
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < integer);
}