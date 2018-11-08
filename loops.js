var j = 0
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i===1){
      array.push('I am 1 strange loop.')
    }else {
      array.push(`I am ${i} strange loops.`)
    }
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
  function incrementVariable(){
    j = j + 1
  }

  do {
    array.pop()
    incrementVariable()
  }while (j < array.length && array.length > 0)
  return array
}
