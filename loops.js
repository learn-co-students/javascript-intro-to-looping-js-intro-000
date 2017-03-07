
var array = [];

function forLoop(array) {


  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push("I am ${i} strange loops.")
    }
  }
  return array;
}
console.log(forLoop(array));


function whileLoop(n) {
  var countdown = n
  while(countdown > 0) {
    console.log(countdown--)
  }
  return 'done';
}
whileLoop(15);


var array = [1,9,2,8,3,6,4,1,5];

function maybeTrue() {
  return Math.random() > 0.5
}

function doWhileLoop(array) {
do {
  array.pop()
} while (array.length > 0  && maybeTrue() === false);

return array;
}
doWhileLoop(array);
