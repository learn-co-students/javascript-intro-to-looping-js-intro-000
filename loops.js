function forLoop(array){
  for(i = 0; i < 25; i++){
    item = i === 1 ? 'I am ${i} strange loop.' : `I am ${i} strange loops.`;
    array.push(item)
  }
  return array
}

function whileLoop(n){
  while (n > 0){
    console.log(--n)
  }
  return "done"
}



function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    console.log(array.pop())
  }  while (array.length > 0 && maybeTrue());
  return array
}
