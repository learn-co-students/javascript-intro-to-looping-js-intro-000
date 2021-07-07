function forLoop(array){
  //var newArray=array
  for (let i=0; i<25; i++){
    //can use unshift or push
    if (i===1){
      array.unshift("I am "+i+" strange loop.")
    }
    else{
      array.unshift("I am "+i+" strange loops.")
    }
  }
  return array
}

function whileLoop(n){
  while (n>0){
    console.log(--n)
  }
  return "done"
}

function maybeTrue() {
  //can also define this function within the doWhileLoop function
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  //use shift() not pop()
  do {
    array.shift()
  } while (array.length>0&&maybeTrue())
  return array
}
