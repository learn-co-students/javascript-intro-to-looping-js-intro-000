// let loop = [];
/*
function forLoop(myArray) {
  for (let i = 0; i < 25; i++) {
    if (i === 0) {
      myArray[i] = 'I am 1 strange loop.';
    } else {
      myArray[i] = `I am ${i+1} strange loops.`;
    };
  };
  return myArray;
};
*/

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 0 || i === 1 ? '':'s'}.`);
    // array[i] = "I am 1 strange loop.";
  };
  return array;
};

console.log(forLoop([]));

// console.log(forLoop(loop));

function whileLoop(num) {
  while(num > 0) {
    console.log(--num);
  };
  return 'done';
};

// console.log(whileLoop(20));
function doWhileLoop(num) {
  let i = 0;
  function incrementVariable() {
    i++;
    return i;
  };
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < num);
};

// console.log(doWhileLoop(5));
