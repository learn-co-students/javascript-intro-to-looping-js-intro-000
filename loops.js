function forLoop(array){
  for (let i = 0; i < 25; i++) {
  if(i === 0) {
    array.unshift("I am 1 strange loop.")
  }
  else {
    array.unshift("I am ${i} strange loops.")
  }
}
  return array
}

function whileLoop(number) {
  let countdown = number;
  while (countdown > 0) {
    console.log(--countdown)
  }
  return 'done'
}

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }
do {
  array.pop()
}
while (array.length > 0 && maybeTrue())
return array
}
