function forLoop(arr){
  for(var i = 0; i<25; i++) {
    if(i === 1){
      arr.push(`I am ${i} strange loop.`)
    } else {
        arr.push(`I am ${i} strange loops.`)
    }
  }

  return arr;
}
function whileLoop(num) {
  while(num > 0) {
    console.log(num);
    num--;
  }
  return 'done';
}
function doWhileLoop(num) {
  let i = 0;

  function incrementVariable() {
    i = i + 1;

    return i;
  }

  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < num);
}
