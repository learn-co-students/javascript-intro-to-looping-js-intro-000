function forLoop(array){

  for(let i = 0; i < 25; i++){
    array.push(`I am ${i} strange loops.`);
  }
return array;
}

function whileLoop(n){
  while (n > 0){
    console.log(--n)
  }
  return 'done';
}

function doWhileLoop(arr){
  function maybeTrue() {
  return Math.random() >= 0.5
}
  do {
    arr.pop()
  } while (arr.length > 0 || maybeTrue())

return arr;
}
