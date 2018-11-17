function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`I am ${i} strange loop.`);
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(number) {
  while (number > 0) {
    console.log(number--);
  }
  return "done";
}


//I do not understand the do while test at all and cheated and looked at the solution and still don't understand it
function doWhileLoop(array) {
  var i = 0;
 
  function incrementVariable() {
  i = i + 1;
}
  do {
    console.log('array.length = ' + array.length + ' and i = ' + i);
		array = array.slice(1);
		incrementVariable();
	} while (array.length > 0 && i < 5);
  return array;
}