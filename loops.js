function forLoop(a) {
  for (var i = 0; i < 25; i++) {
    a.push("I am ${i} strange loop${i === 0 ? '' : 's'}.");
  }
  return a
}

function whileLoop (a) {
  while (a>0) {
    console.log(--a)
  }
  if (a === 0) {
    return "done"
  }
}

function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array) {
  do{
    array.pop()
  }while(array.length>0 && maybeTrue())

  return array
}
