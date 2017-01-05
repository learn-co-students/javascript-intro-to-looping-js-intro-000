function forLoop(array) {
  
  for (let i = 0; i < 25; i++) {
    if (i === 1)  {
      array.push("I am 1 strange loop.");    
      
      // Another way. Can give more control. 
      // array[array.length] = "I am 1 strange loop.";
    }
    else {
      array.push("I am " +i+ " strange loops.");
      
      // Another way. Can give more control.
      // array[array.length] = "I am " +i+ " strange loops.";     
    }    
  }
  return array;
}


function whileLoop(num) {
  
  while (num != 0) {
    console.log(num);
    --num;
  }
  return "done";
}


function doWhileLoop(array) {
  do {
    array.pop();
  } while ((array.length > 0) || (maybeTrue()));  
  return array;
}


function maybeTrue() {
  
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}