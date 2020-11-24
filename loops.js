function forLoop(array){
  for(let i = 0; i < 25; i++){
    if( i > 1){
      array.push(`I am ${i} strange loops.`)
      }

    else{
      array.push(`I am ${i} strange loop.`)
      }
  }
  return array
}


function whileLoop(n){
  while(n > 0){
    console.log (n);
    n--
  }
  return "done"
}


let i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(num){
  do{
    console.log("I run once regardless.");
  } while (incrementVariable() <= num)
}
