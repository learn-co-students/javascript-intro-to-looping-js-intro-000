function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  array.push(`I am ${i} strange loop${i===1 ? '' : 's'}.`)
  }
	return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return 'done';
}

//my doWhileLoop doesn't need this code
//It doesn't seem to have any effect, &
//the test passes with or without it
//but the lab instructions say to use it
var i = 0;

function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length > 0 && incrementVariable())
  //Again, it doesn't matter if I incude the && incrementVariabl() or not.
  //The test passes either way.
  //Not sure why it was suggested to use it.
  return array;
}
