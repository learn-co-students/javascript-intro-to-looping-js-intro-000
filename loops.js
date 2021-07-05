function forLoop (array){
  for(var i = 0; i < 25; i++){
    if(i === 1){
      array.push(`I am ${i} strange loop.`);
    }else{
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}
function whileLoop(number){
  while(number > 0){
    console.log(number);
     --number;
  }
  return "done";
}
function doWhileLoop(array){
  var i = 0;
  function incrementVariable(i){
    i=+1;
    return i;
}

  do{
    array.pop();
    incrementVariable(i);
  }while(array.length > 0 || incrementVariable() === false);
  
  return array;
}