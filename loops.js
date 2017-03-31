//heuristic

function forLoop(array1){
  
  for (let i = 0; i < 25; i++) {
  // ...
  if( i === 1){
    array1.push("I am 1 strange loop.")
  }
  else{
    array1.push(`I am ${i} strange loop.`)
  }
}
return array1
}

function whileLoop(num){
  while (num > 0) {
  console.log(--num)
}
return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(arr){
  do {
  arr.pop()
}while (arr.length > 0 && maybeTrue())
return arr
}