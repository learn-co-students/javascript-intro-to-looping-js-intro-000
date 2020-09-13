function forLoop(array){
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i < 2 ? '' : 's'}.`)
  }
  return array
}

function whileLoop(n){
  while (n >= 0) {
    if (n > 0) {
      console.log(n)
    } else if (n === 0) {
      return 'done'
    }
  n -= 1
  }
}

let i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(num){
  do {
    console.log("I run once regardless");
  } while (incrementVariable() <= num);
}
