function  forLoop(arrayName){
  for (var  i=0; i < 25 ; i++){
    arrayName.push("I am ${i} strange loop${i===1 ? '': 's'}.");
  }
return arrayName;
}
function whileLoop(n){
  while (n > 0){
    console.log(--n);
  if (n ===0){
    return 'done'
        }
  }
}
function maybeTrue(arrayName){
  return arrayName.length > 0;
}
function doWhileLoop(arrayName){
  do{
    arrayName.pop()
  }while(arrayName.length> 0 && maybeTrue(arrayName));
  return arrayName;
}
