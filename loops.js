function forLoop(array) {
  var lit1;
  for (let i=0; i<25; i++) {
    if (i === 1) {lit1 = "I am 1 strange loop."}
    else {lit1 = "I am " + i + " strange loops." } ;
    array.push(lit1) ;
  }
  return array
}

function whileLoop(countdown) {
    while (countdown > 0) {
      console.log(--countdown);
        }
  return `done`
}

function doWhileLoop(int) {
   var cnt = 0;
    do {
      console.log("I run once regardless.");
      cnt = cnt + 1;
    }
    while (cnt < int);
  return `done`
}
