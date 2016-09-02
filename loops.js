/* loops forLoop(array) adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
to an array 25 times: TypeError: Cannot read property 'length' of undefined -->
*/
function forLoop(array) {
      var i = 0
  for (i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop");
    }

    else {
      array.push(`"I am ${i} strange loops."`);
    }
  }
}
// <-- i < array.length

/* loops whileLoop(n) counts down from n to 0: ReferenceError: whileLoop is not
defined -->*/

// var n = whileLoop(100); -->

function whileLoop(n) {
  // var n = 100;
  let countdown = n;
  while (countdown > 0) {
    console.log(--countdown);
  }
}
// <-- var n = whileLoop(100);

/* loops doWhile(array) removes elements from `array` until `array` is empty or
until `maybe True()` returns `false`: ReferenceError: doWhileLoop is not defined
--> */
function doWhileLoop(array) {
  do {
    delete array.length > 0 && return array;
  } while (maybeTrue());
}
