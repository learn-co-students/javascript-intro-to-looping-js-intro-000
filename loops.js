var forLoop = function(array) {

  for (var i = 0; i < 25; i++) {
    array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  }
  return array;
}

var whileLoop = function(n) {
  var countdown = n;
  while (countdown > 0) {
    console.log(countdown--);
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

var doWhileLoop = function(array) {
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
}
