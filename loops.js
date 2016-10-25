/*for ([initialization]; [condition]; [iteration]) {
  [loopBody]
  Use a for loop when you know how many times you want the loop to run (for example, when you have an array of known size).
  The code below will print the string "Hello World!" 99 times
  // i is set equal to 1
// as long as i is less than 100 execute the code in the loopBody
// - which is print "Hello World"; increment i each time the code in loopBody is executed

for (var i = 1; i < 100; i++) {
  console.log( "Hello World the " + i + " time" );
}

// The above prints:
// Hello World the 1 time
// Hello World the 2 time
// Hello World the 3 time
}*/
function forLoop(array){
  for (var i=0; i<25; i++){
    array.push(`I am ${i} strange loops`)
  }
  return array
}

function whileLoop(number){
  while(number>0){
    console.log(number);
    number--;

  }return "done"
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array = array.slice(1)
  } while (array.length > 0 && maybeTrue())

  return array
}
