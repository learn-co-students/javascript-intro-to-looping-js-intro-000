function forLoop(array) {
  for(i=0;i<25;i++) {
    array.push(`I am ${i} strange loop${i===1||i===0?'':'s'}`);
  }
  return array;
}


function whileLoop(number) {
  while(number>0) {
    console.log(--number);
  }
  return "done";
}

function mayBeTrue() {
  return Math.random()>=0.5;
}

function doWhileLoop(array) {
  do{
    array.pop();
  }while(mayBeTrue()&&array.length>0);
  return array;
}
