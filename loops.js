
var forLoop = function (array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
       array.push("I am 1 strange loop.")
    } else {
       array.push(`"I am ${i} strange loop."`)
    }
  }
  return array
}

var whileLoop = function (n) {
while (n > 0) {
  console.log(--n)
}
return 'done'
}

var doWhileLoop = function (array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
var array = [];
  do {
    array.shift
  } while (array.length > 0 && maybeTrue());
  return array
}
