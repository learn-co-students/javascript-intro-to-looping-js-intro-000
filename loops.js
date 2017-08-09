function forLoop(array){
  for (var i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loops.`)
}
return array
}


function whileLoop(n){
  var message = 'done'
  while (n > 0) {
    console.log(n)
    n--
  }
  return message
}

function doWhileLoop(array) {
  function maybeTrue() {
     return Math.random() >= 0.5
}
do {
  array.pop()
} while (array.length > 0 && maybeTrue());
return array
}
