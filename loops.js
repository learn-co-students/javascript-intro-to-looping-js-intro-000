var myArray = [];

function forLoop(myArray){
  for(var i = 0; i < 25; i++){
    if(i === 1){
      myArray.push(`I am 1 strange loop`);
    } else {
      myArray.push(`I am ${i} strange loop`);
    }
  }
  return myArray;
}

function whileLoop(n){
  while(n > 0){
    console.log(n);
    n--;
  }
  return "done";
}

whileLoop(10);

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array = array.slice(1)
  } while (array.length > 0 && maybeTrue())

  return array
}
