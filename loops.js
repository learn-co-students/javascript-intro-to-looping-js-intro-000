var myArray = [];
function forLoop(myArray){
  for (let i = 0; i < 25; i++){
    myArray.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}"`)
  }
return myArray;
}

function whileLoop(n){
  while (n > 0){
    console.log(n--);
  }
  return 'done';
}

thisArray = [1,2,3,4,5]
function doWhileLoop(thisArray){

  function maybeTrue(){
    return Math.random() >= 0.5;
  }

  do {
    thisArray.pop();
  } while (thisArray.length > 1 && maybeTrue());
  return thisArray;
}
