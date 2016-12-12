function forLoop (myArray) {
  for (let i=0; i<25; i++) {
    if (i === 0) {
      myArray.push (["I am 1 strange loop."])
    }
    else {
      myArray.push (["I am "+ (i+1) + "strange loops."])
    }
  }
  return myArray;
}

function whileLoop (myNum){
  while (myNum > 0) {
    console.log (myNum)
    myNum -= 1
    if (myNum === 0){
    return ("done");
    }
  }
}

function doWhileLoop (myArray) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    myArray.pop();
  } while (myArray.length > 0 && maybeTrue())
return myArray;
}
