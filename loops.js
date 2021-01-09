function forLoop(array) {
  for (let i = 0; i < 25; i++) {

    if (i === 1) {
      array.push(`I am 1 strange loop.`);
    } else {
      array.push(`I am ${i} strange loops.`);
    }

  }
return array;
}

// TODO: Create a function called whileLoop in loops.js. The function should take a number as an argument.
// Using a while loop, count down (using console.log) from the passed in number to 0. Then return the string 'done'.

function whileLoop(number) {
  while (number > 0) {
    console.log(number);
    number--;
  }
    return "done";
  }

/* TODO: Define a function called doWhileLoop in loops.js. The function should take an integer as an argument.
Use the incrementVariable() function (you can copy it from this README) in the condition, and console log "I run once
regardless." while incrementVariable() returns a number less than the parameter received. (Your condition might look
something like incrementVariable() < num.)

Remember that it should also console log when receiving 0 as a parameter because the do-while runs before the
condition is checked. */

function doWhileLoop(num) {
  i = 0;
  function incrementVariable() {
    i = i + 1;
  return i;
  }


do {
  console.log("I run once regardless.");
} while (incrementVariable() < num);
}
