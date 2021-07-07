function forLoop(myArray) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      myArray.push("I am 1 strange loop.");
    } else {
      myArray.push("I am ${i} strange loops.");
    }
  }
  return myArray;
}


function whileLoop(n) {
  while(n>0) {
  console.log(n--);
  }
  if (n===0) {
    return "done";
  }

}

function doWhileLoop(myArray) {

  do {
    myArray.shift();
  } while (maybeTrue()  && myArray.length > 0);
  return myArray;
}

function maybeTrue() {
  return Math.random() >= 0.5
}
