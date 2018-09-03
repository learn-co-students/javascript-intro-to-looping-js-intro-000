function forLoop(array){
  for (let i = 0; i < 25; i++){
  if( i === 1) {array.push(`I am 1 strange loop.`)}
  else {array.push(`I am ${i} strange loops.`)}
    }
  return array;
}

function whileLoop(num){
  while (num > 0){
    console.log(--num);
  }
  return "done";
}

function doWhileLoop(array){
do {
   array.length -= 1;
 } while (array.length > 0)
 return array;
}
