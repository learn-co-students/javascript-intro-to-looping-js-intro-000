function forLoop(array){
  for (let i = 0; i < 25; i++){
    if (i===1){
      array.push(`I am ${i} strange loop.`)
    }
    else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

function whileLoop(n){
  while (n !== 0){
    console.log(n)
    n -= 1
  }
  return "done"
}

function doWhileLoop(num){
  do {
    console.log("I run once regardless.")
    num -= 1
  } while (num > 0);
}
