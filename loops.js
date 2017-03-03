function forLoop(array){
  for ( var i = 0; i < 25; i++){
  if(i === 1){
  array.push("I am" + i + "strange loop")
}else{
  array.push("I am" + i + "strange loops")
    }
  }
return array
}

function whileLoop(n){
  while(n>=1){
  console.log(n);
  n=n-1;
}
return "done"
}

function doWhileLoop(array){
  do{
    array.slice(0, array.length - 1)
  } while(array.length = 0 && maybeTrue())
return array
}
