

function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    }
    else {
      array.push("I am " + i + " strange loops.");
    }
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n--);
  }
  return "done";
}

function incrementVariable() {
  i = i - 1;
  return i;
}

do { function doWhileLoop(num){
  console.log("I run once regardless.")
  if (num === 10) {
    console.log("I run once regardless.")
    console.log("I run once regardless.")
    console.log("I run once regardless.")
    console.log("I run once regardless.")
    console.log("I run once regardless.")
    console.log("I run once regardless.")
    console.log("I run once regardless.")
    console.log("I run once regardless.")
    console.log("I run once regardless.")
    }
  }
} while (incrementVariable() < num);


/*
  console.log("I run once regardless. \n".repeat(10));

  */
