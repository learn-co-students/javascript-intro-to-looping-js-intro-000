function whileLoop(number){

  while(number > 0){
    console.log(--number);
  }
  return 'done'
}

function forLoop(array){
  for(let i = 0; i < 25; i++){
    if(i === 1){
      array.push("I am 1 strange loop.");
    }else{
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array;
}

function doWhileLoop(num) {
  do{
    console.log(num--);
  } while(num > 0)
}
