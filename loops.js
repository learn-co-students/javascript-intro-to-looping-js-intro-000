function forLoop(array){
  for(var i =0;i<=25;i++){
    if(i===1){
      array.push(`I am 1 strange loop.`);
    }
    else if(i>1){
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array;
}

function whileLoop(num){
  while(num > 0){
    console.log(num);
    num--;
  }
  return 'done';
}

function doWhile(array){
  do{
    array.pop()
  }while(array.length>0 && maybeTrue());
}
