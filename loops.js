function forLoop(array){
  for (let i = 0; i < 25; i++){
    array.push(`I am ${i} strange loop${ i >= 2 ? 's.' : '.'}`)
  }
  return array
}


function whileLoop(num){
  while (num > 0){
    console.log(--num);
  }
  return 'done'
}



function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(num){
  i = 0;
  do {
    console.log("I run once regardless.")
  } while (incrementVariable() < num)
}
