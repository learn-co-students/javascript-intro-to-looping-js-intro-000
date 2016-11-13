// step 1
function forLoop(array){
  for ( var i = 1;i <= 25; i++) {
      array.push(`"I am ${i} strange loop${i === 1 ? '' : 's'}."`)
    }
return array
}
// step 2
function whileLoop(n) {
  while (n > 0){
    console.log(--n)
  }
  return 'done'
}
// step 3
function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array.pop()
//    console.log('doo-bee-doo-bee-doo')
  } while (maybeTrue());
  return array
}
