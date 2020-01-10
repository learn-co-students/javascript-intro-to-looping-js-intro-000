function forLoop(array){
  for(let i = 0; i < 25; i++){
    if (i === 1){
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
  }
}
return array
}

function whileLoop(n){
  while(n>0){
    console.log(n--)
  }
  return "done"
}

var integer = 0

function incrementVariable() {
  integer = integer + 1;
  return integer;
}

function doWhileLoop(integer){
  do{
    console.log("I run once regardless.");
  } while (incrementVariable() <= integer);
}
