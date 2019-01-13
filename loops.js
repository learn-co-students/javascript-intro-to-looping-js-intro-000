// add a string to the array 25 times.
// If i = 1, add the string "I am 1 strange loop."
// if else, add the string "I am ${i} strange loops."
//
// Notes:
// 1) Maybe the i==0 must not added to the array
//    if added, maybe it needs an other string, for ex: 'I am a nobody loop' :)
// 2) This is also ideal for using the ternary operator
function forLoop(arr) {
  for (let i=0; i<25; i++) {
    // this is the correct implementation
    // arr.push(`I am ${i+1} strange loop${i+1>1?'s':''}.`);
    
    // this is what the description asks
    if (i === 1) {
      arr.push('I am 1 strange loop.');
    }
    else {
      arr.push(`I am ${i} strange loops.`);
    }
  }
  return arr;
}

// The function should take a number as an argument.
// Using a while loop, count down (using console.log) from the passed in number to 0.
// Then return the string 'done'.
//
// Notes:
// 1) The description asks to count-down from the given number to 0
//    this means inclusive both start and end!
//    the test case does not accept this as correct.
//    it needs either to change the description of the lab or the test.
// 2) The test does not check the actual log message to be the number...
function whileLoop(num) {
  while (num > 0) {
    console.log(--num);
  }
  return 'done';
}

// The function should take an array as an argument.
// Use the incrementVariable() function as the condition, and remove elements
// from the array until the array is empty or until incrementVariable() returns false
//
// Notes:
// 1) Must return the array back (this is missing from the description)
//    If not we get: TypeError: Cannot read property '__spy' of undefined
// 2) Description ask us to use the incrementVariable() which does not return a value!
//    also we need to copy the var i line...
//    Propably we must use the maybeTrue() function
function doWhileLoop(arr) {
  var i = 0;
  function incrementVariable() {
    i = i + 1;
  }
  
  function maybeTrue() {
    return Math.random() >= 0.5; // Returns a random number between 0 (inclusive) and 1 (exclusive)
  }

  do {
      arr.shift();
  } while (maybeTrue() && arr.length>0);
  return arr;
}

// console.log(forLoop([]));
// whileLoop(10);
// var arr1 = [1,2,3,4,5,6,7,8];
// doWhileLoop(arr1);
// console.log(arr1);