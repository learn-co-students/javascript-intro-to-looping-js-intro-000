'use strict';

function forLoop(arr) {
  for(i = 0; i < 25; i++) {
    arr.push(`I am ${i} strange loops.`);
  }
  return arr
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n -= 1;
  }
  return 'done';
}

function doWhileLoop(arr) {
  do {
    arr.pop();
  } while (!arr.length || maybeTrue())
}

function maybeTrue() {
  return Math.random() >= 0.5
}
