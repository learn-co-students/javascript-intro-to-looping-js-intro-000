function forLoop(array){
  for (let i = 0; i < 25; i++){
    if (i != 1){
      array.push(`I am ${i} strange loops.`)
    } else {
      array.push("I am 1 strange loop.")
    }
  }
  return array
}

function whileLoop(number){
  while (number > 0) {
    console.log(--number)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    array.pop()
    console.log(array)
  } while (array.length > 0 && maybeTrue())
  return array
}
