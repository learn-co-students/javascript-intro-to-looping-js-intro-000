function forLoop(array){
  for (let i=0; i<25; i++){
  array.push("I am ${i} strange loop${i === 0 ? '' : 's'}.")
  }
  return array;
}

function whileLoop(n){
let countdown = n;
  while (countdown > 0){
  console.log(--countdown)
  }
  return('done');
}

function doWhileLoop(array){
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
}
