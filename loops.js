function forLoop(array){

  for(let i=1; i<=25; i++){
    array.push("I am ${i} strange loop${i===1?'':'s'}.")
  }
  return array
}
function whileLoop(n){
  while(n){
    console.log(n)
    --n
  }
  return 'done'
}

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
  }

  do{
    array.pop()
  }while((array!==undefined || array.length >0) && maybeTrue())
  return array
}
