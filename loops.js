

function forLoop(anArray){
  var newArray = anArray;
  for(var i = 0; i < 25; i++){
    if(i === 1){
      newArray.push(`I am ${i} strange loop.`);
    }else {
      newArray.push(`I am ${i} strange loops.`);
    }
  }
  return newArray;
}

function whileLoop(n){
  var newN = n;
  while(newN != 0){
    console.log(newN);
    newN--;
  }
  return "done";
}



function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){

  var newArray = array;
  do {
    newArray.pop();
  } while (newArray.length > 0 && maybeTrue());

  return newArray;
}
