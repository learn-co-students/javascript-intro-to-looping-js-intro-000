function forLoop(array){
  for(var i = 0; i < 25; i++){
    if(i === 1){
      array.push(`I am ${i} strange loop.`)
    }else{
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

function whileLoop(num){
  var countdown = num
  while(countdown > 0){
    console.log(countdown);
    --countdown;
    }
    return "done"
}





function doWhileLoop(int){
  var i = 0;
  function incrementVariable() {
  i = i + 1;
  return i;
}
  
  do{
    console.log("I run once regardless.")
  } while (incrementVariable() < int)
}