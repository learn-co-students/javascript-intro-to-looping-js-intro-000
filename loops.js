
var dogs = [
  "cairn",
  "doxy",
  "german"
]

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if(i === 1) {
      array.push("I am 1 strange loop.");
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array
}

forLoop(dogs)

function whileLoop(number) {
   while (number > 0) {
     console.log(--number);
   }
   return "done"
}

whileLoop(45)

var cupcake = [
  "vanilla",
  "chocolate",
  "strawberries",
  "coffee",
  "vanillabean"
]

function maybeTrue() {
  return Math.random() >= 0.5 
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 || maybeTrue())
  return array
}

doWhileLoop(cupcake)