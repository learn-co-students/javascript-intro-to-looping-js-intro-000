function forLoop(array) {
    for (let i = 0; i < 25; i++) {
          if (i === 1) {
                  array.push('I am 1 strange loop.');
          } else {
                  array.push(`I am ${i} strange loops.`);
          }
    }

    return array;
}

function whileLoop(number) {
  let countdown = number;

  while (countdown > 0) {
    console.log(--countdown)
  }
  return "done";
}

function doWhileLoop(array) {
        var i = 0;

  function incrementVariable() {
    i = i + 1
  }
  do {
    console.log('array.length = ' + array.length + ' and i = ' + i);
		array = array.slice(1);
		incrementVariable();
	} while (array.length > 0 && i < 5);

	return array;
}
