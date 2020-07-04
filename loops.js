/*for ([initialization]; [condition]; [iteration]) {
  [loopBody];
}*/
/*for (let num = 1; num < 6; num += 1) {
  console.log(num)
}*/

// lookathowtheybutcheredmyboy.jpg

function forLoop(array){
  for (let i = 0; i < 25; i++){ // the one time it should be a comma, it's a semicolon.
    /*if (i === 1){
      array[i] = "I am 1 strange loop.";
    }
    else{
      array[i] = `I am ${i} strange loops.`;
    }*/
    // above works, but isn't what the instructions ask.

    if (i === 1){
      array.push("I am 1 strange loop.");
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  //console.log("FOR LOOP COMPLETE");
  //console.log(array);
  return array;
  // apparently this one needed a return. who knew?
}

// why do these labs save sometimes interim and sometimes not

function whileLoop(number){
  while (number > -1){
    console.log(number);
    number--;
    if (number === 0){
      return "done";
    }
  }
}

var i = 0; // says copy and use this
function incrementVariable() { // why would i ever separate the timer from the function?
  i = i + 1;
  return i;
}

function doWhileLoop(integer){
  i = 0;
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < integer);
}
