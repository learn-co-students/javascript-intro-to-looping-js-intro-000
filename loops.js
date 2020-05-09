function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    if (i === 1 ) {
      arr.push('I am 1 strange loop.');
    } else {
      arr.push(`I am ${i} strange loops.`);
    }
  }
  return arr;
}

function whileLoop(num) {
  while (num > 0) {
    console.log(num);
    num--;
  }
  return 'done';
}

let i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(int){
  do {
    console.log("I run once regardless.")
  } while (incrementVariable() <= int);
}
