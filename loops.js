function forLoop(array){
  for (var i = 0; i < 25; i++) {
    array.push(console.log(`"I am ${i} strange loop${i=== 0 ? '' : 's'}."`));
  }
  return array
}

function whileLoop(n){
  let countdown = n;
  while (countdown > 0) {
    console.log(--countdown)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.slice(1);
    return array.slice(1)
  }
  while (array.length > 0 && maybeTrue());
  return array
}
