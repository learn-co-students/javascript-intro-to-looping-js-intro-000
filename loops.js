function forLoop(array){
  for(let i=0; i < 25; i++){
    if(i===1){
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array
};


function whileLoop(num){
  while(num > 0){
  console.log(--num)
  }
  return "done"
};


function doWhileLoop(arr){
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do{
    arr.pop()
  } while(maybeTrue());
  return arr
};
