
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} loop${i=== 1 ? '': 's'}.`);
  }
  return array;
}

function whileLoop(number){
  while (number>0){
  number -= 1
  console.log(number)
  }
  return 'done';
}
function maybeTrue() {
  return Math.random() >= 0.5;
}
function doWhileLoop(array){
  do {
    array.length -= 1;
  } while(array.length > 0 && maybeTrue());
  return array;
}