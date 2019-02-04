function forLoop(array) {
  for ( let i = 0; i < 25; i++) {
    if (i === 1) {
    array.push (`I am 1 strange loop.`)
  } else {
    array.push (`I am ${i} strange loops.`)
 }
}
return array;
}


function whileLoop(i){
 let countdown = i;
while (countdown > 0) {
  console.log(--countdown);
}
return 'done';
}

function doWhileLoop(i){

  function incrementVariable(){
    counter = counter + 1;
    return counter;
  }

  let counter = 0;


  // i (10) intervals
  // 0
  // 1
  // 2
  // 3
  // ...
  // 10


  do {
    console.log("I run once regardless.");

  } while (incrementVariable() < i);

  return i;
}
