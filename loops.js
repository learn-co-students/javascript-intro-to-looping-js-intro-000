function forLoop(arr){
  for (let i = 0 ; i < 25 ; i++){
    if (i == 0){
      arr.unshift(`I am ${i} strange loop.`)
    } else if (i==1){
      arr.push(`I am ${i} strange loop.`)
    } else {
      arr.push(`I am ${i} strange loops.`)
    }
  }
  return arr
}

function whileLoop(n){
  while (n>0){
    console.log(--n)
  }
  return "done"
}


function doWhileLoop(arr){
  do {
    arr.pop()
  } while (arr.length > 0);
  return arr
}
