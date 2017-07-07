
  var array = [];

function forLoop(array) {

  for (var i = 0; i < 25; i++) {
 i === 1 ?  array.push(`I am ${i} strange loop.`) :  array.push(`I am ${i} strange loops.`);
  }
return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return "done"
}

function doWhileLoop(array) {
  function maybeTrue() {
   array.pop();
    if (array.length > 0) {
      return array
    } else {
      return false
    }
  }
  do {
    console.log(array);
  } while(array.length > 0 && maybeTrue());
  return array
}
