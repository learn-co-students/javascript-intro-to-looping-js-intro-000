function forLoop(array){
  for (let i = 0; i<25; i++){
    if (i === 0) {
      array.push("I am 1 strange loop.")
    } else{
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

function whileLoop(n){
  while (n>0){
    console.log(n);
    n = n-1
  }
  return("done")
}

function doWhileLoop(array){
  do{
    array.splice(0,1)
  }
  while (array.length > 0 && maybeTrue());
  return array
}

function maybeTrue(){
  return Math.random() >= 0.5
}
