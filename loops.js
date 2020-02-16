// This is a for loop challenge.

function forLoop(array) {

  for (let i = 0; i < 25; i++) {

      if (i === 1){
        array.push(`I am ${i} strange loop.`);
      } else {
        array.push(`I am ${i} strange loops.`);
      }

  }
  return array;
}

var array = [];
forLoop(array);


// This is a while loop challenge

function whileLoop(num) {

	while (num > 0) {
		console.log(num--);
	}

	return "done";
}

whileLoop(10);


// This is a do-while loop


function doWhileLoop(number) {

  var i = 0;

  function incrementVariable() {
    i = i + 1;
    return i;
  }


	do {
		console.log("I run once regardless.");
	} while (incrementVariable() < number);

  return "done";
}

doWhileLoop(10);
