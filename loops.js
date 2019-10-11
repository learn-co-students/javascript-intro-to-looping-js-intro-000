
function forLoop(arr) {
  for (let i=0; i < 25; i++){
    let isOne = (i === 1);
    let val = `I am ${isOne ? "1" : i} strange loop${isOne ? "" : "s"}.`;
    arr.push(val);
  }
  return arr;
}

function whileLoop(n) {
  let ctr = n
  while (ctr > 0) {
    console.log(ctr--);
  }
  return 'done';
}



function doWhileLoop(n) {
  var i = 0;

  function incrementVariable() {
    i = i + 1;
    return i;
  }

  do {
    console.log("I run once regardless.")
  } while (incrementVariable() < n)
}
