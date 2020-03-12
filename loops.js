function forLoop(array) {
  for (let i = 0; i  < 25; i ++) {
    i === 1 ? array.push(`I am ${i} strange loop.`) : i === 0 ?  array.push("") : array.push(`I am ${i} strange loops.`)
  }
  return array
}

function whileLoop(n) {
  while (n) {
    console.log(n)
    n--
  }
  return "done"
}


function doWhileLoop(num) {
  let i = 0;

  function incrementVariable() {
    i = i + 1;
    return i;
  }

  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < num);
}
