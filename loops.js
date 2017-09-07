

// #1 ==========================
function forLoop(array){
  for(let i = 0; i < 25; i++){
    item = i === 1 ? `I am ${i} strange loop.`:`I am ${i} strange loops.`;
    array.push(item);
  }
return array;
}
// #2============================
function whileLoop(number) {
  while(number > 0) {
  console.log(number--);
  }
  return 'done'
}
// #3===========================
function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do{
    array.shift();
  }while(maybeTrue() || array.length > 0);
  return array;
}
