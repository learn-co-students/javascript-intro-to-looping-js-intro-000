
function forLoop(thing) {
    for (var i=0; i < 25; i++) {
      if (i===1) {
        thing.push("I am 1 strange loop.");
      }
      else {
        thing.push(`I am ${i} strange loops.`);
      }
    }
    return thing;
  }
/***TODO**: Create a function called `whileLoop` in `loops.js`.
The function should take a number as an argument. Using a `while` loop,
count down (using `console.log`) from the passed in number to 0.
Then return the string `'done'`. */
function whileLoop (n) {
  while (n >0) {
    console.log(n);
    n --;
  }
  return "done";
}
/*Define a function called `doWhileLoop` in `loops.js`. The function
should take an array as an argument. Use the `maybeTrue()` function
(you can copy it from this README) as the condition, and remove elements
 from the array until the array is empty or until `maybeTrue()` returns
 `false`. (Your condition might look something like `array.length > 0 &&
 maybeTrue()`.) Finally, return the array.*/



 function doWhileLoop(arr) {
     function maybeTrue() {
       return Math.random() >= 0.5
     }
     do {
       arr.pop();
     }
     while(maybeTrue()== true);
   return arr;
 }
