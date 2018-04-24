function forLoop(array){
  for(let index = 0; index < 25; index++){
    if(index === 1){
      array.push(`"I am ${index} strange loop."`);
    }
    else{
      array.push(`I am ${index} strange loops.`);
    }
  }
  return array;
}

function whileLoop(n){
  while(n > 0){
    console.log(--n)
  }
  while(n===0){
    return 'done'
  }
}
function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do{
    array.pop();
  } while(array.length > 0 && maybeTrue());
  return array
}
