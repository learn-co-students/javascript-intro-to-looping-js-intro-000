var myArray = [];

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      myArray.push("I am 1 strange loop.");
    }
    else {
      myArray.push("I am ${i} strange loops.");
    }
  }
  return myArray;
}


function whileLoop(num) {
  while (num > 0) {
    console.log(--num);
  }
  return console.log("done");
}

let i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(i) {
  do {
    console.log("I run once regardless");
  }
  while (incrementVariable() < i);
}
