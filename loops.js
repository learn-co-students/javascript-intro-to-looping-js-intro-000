
function forLoop(array){
  for(var i = 0; i < 25; i++){
    var temp = "";
    temp = i === 1 ? "I am 1 strange loop." : `I am ${i} strange loops.`;
    array.push(temp);
  }
  return array;
}


function whileLoop(n){
  while(n > 0){
      console.log
      --n;

  }
  return "done";
}


function whileLoop(n){
    while(n > 0){
      console.log()
      --n
    }
    return "done";
}


function maybeTrue(){
  return Math.random() >= 0.5;
}


function doWhileLoop(array){
  do{
      array.pop()
  }while((maybeTrue()) && (array.lenght > 0));
  return array;
}
