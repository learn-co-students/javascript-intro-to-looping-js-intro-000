


function forLoop(array){
  for (var i = 0; i < 25; i++){
  // let s = i === 1 ? "I am 1 strange loop." : `I am ${i} strange loops.`
    if (i === 1){
     array.push("I am 1 strange loop.");
    }
    else {
     array.push(`I am ${i} strange loops.`)
   }
  }
  return array;
}

function whileLoop(num) {
var countdown = num
  while (countdown > 0){
  console.log(--countdown)
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    array.pop();
}
 while (array.length > -1 && maybeTrue());

  return array;
}
