//Part 1
function forLoop(array){
  for (var i = 0; i < 25; i++){
    if (i === 1){
      array = [...array, "I am 1 strange loop."];
    }
    if (i === 0 || i > 1){
      array = [...array, `I am ${i} strange loops.`];
    }
    // console.log(array)
    // console.log(i)
  }
  return array
}

//Part 2
function whileLoop(n){
  while (n > 0){
    console.log(n);
    n--;
  }
  return "done"
}

//Part 3
//given from README
function maybeTrue() {
  return Math.random() >= 0.5
}
do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue());

//Clem's do/while
function doWhileLoop(array){
  do {
    array.shift();
  } while (array.length > 0 && maybeTrue());
  return array
}
