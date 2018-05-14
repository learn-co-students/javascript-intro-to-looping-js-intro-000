function forLoop(array) {
  for(i=0; i<25; i++) {
    if (i+1 == 1) {
      array.push(`I am ${i+1} strange loop.`);
    }
    else {
      array.push(`I am ${i+1} strange loops.`);
    }
  }
  return array;
}

function whileLoop(n) {
  while(n>0) {
    console.log(`${n}`);
    n--;
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do { array.pop();
  } while (maybeTrue() && array.length>0);
  return array;
}