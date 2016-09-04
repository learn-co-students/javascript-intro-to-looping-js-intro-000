/* loops forLoop(array) adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
to an array 25 times: TypeError: Cannot read property 'length' of undefined -->
*/
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop");
    }

    else {
      array.push(`"I am ${i} strange loops."`);
    }

  }
  return array;
}

/* loops whileLoop(n) counts down from n to 0: ReferenceError: whileLoop is not
defined -->*/


function whileLoop(n) {
  while (n > 0) {
    n--;
    console.log(n);
  }
  return 'done';
}


/* loops doWhile(array) removes elements from `array` until `array` is empty or
until `maybe True()` returns `false`: ReferenceError: doWhileLoop is not defined
--> */


var maybeTrue = function(){
  return Math.random() >= 0.5
}


function doWhile(array) {
  do {
    //delete array.length > 0;
    array.pop(element);
  } while (maybeTrue);
  return array;
}
