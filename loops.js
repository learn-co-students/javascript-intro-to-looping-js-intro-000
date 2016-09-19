function forLoop(arr) {
  for (i=0;i<25;i++) {
    if (i===1) {
      arr.push(`I am 1 strange loop.`);
    } else {
      arr.push(`I am ${i} strange loops.`);
    }
  }
  return arr;
}

function whileLoop(n) {
  var counter=n;
  while(counter>0){
    console.log(counter--);
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(arr) {
  do {
    arr.pop();
  } while (arr.length>0 && maybeTrue());
  return arr;
}
