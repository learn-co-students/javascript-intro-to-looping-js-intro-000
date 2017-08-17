//SUPER TERSE ELEGANT VERSION
function forLoop(array) {
  for (var i = 1; i <= 25; i++) {
	 array.push(`I am ${i} strange loop${i === 1 ? '': 's'}.`);
  }
      return array
}


// WORDIER version
/* 
function forLoop(array) {
  for (var i = 0; i < 25; i++) {
  if (i === 1) {
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
      return array
}
*/

function whileLoop(n) {
  while (n > 0) {
    console.log(n)
    n--;
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop (array) {
  do {
    array.pop();
    maybeTrue();
  } while (array.length > 0 && maybeTrue())
  return array;
}
