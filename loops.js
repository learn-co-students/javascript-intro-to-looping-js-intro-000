
function forLoop(array){
  for(i=0;i<25;i++){
if(i==1){
  array.push("I am 1 strange loop.")
}
  else {
    array.push("I am `${i}` strange loops.")
}

  }
  return array
}

function whileLoop(number){
  while(number>0){
    console.log(--number)
  }
    return "done"
  }


function doWhile(array){
  function maybeTrue() {
    return Math.random() >= 0.5
}
}
  do{
 array.shift()
 return array
  }
  while(array.length <= 0 || maybeTrue())
