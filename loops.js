function forLoop(arrayInput) {

  for (var i=0; i<25; i++) {
    if (i === 1) {
      arrayInput.push("I am 1 strange loop.");
    } else {
      arrayInput.push("I am ${i} strange loops.");
    }
  }
  return arrayInput;
}

function whileLoop(num) {
  while (num) {
    console.log(num--);
  }
  return "done";
}

function doWhileLoop(arrayInput) {
  do {
    // specs didn't say remove from front or back; did back
    
    // fails silently (returns undefined) if empty array, so execute even
    // if array initially empty, but test array at condition to stop on 
    // empty array.  
    arrayInput.pop(); 
  } while ((Math.random() >= 0.5) && (arrayInput.length));
  
  return arrayInput;
}