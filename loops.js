function forLoop (array) {
  for (let i = 0; i < 25; i++) {
    if (i == 1) {
      array.push ( " i am " + i + "loop")
    }
    else{
      array.push (" i am " + i + "loops")
    }
  }
  return array
}


function whileLoop(number){

  while (number > 0) {
     console.log( --number)
  }
return "done"
}

function maybeTrue() {
return Math.random() >= 0.5
}


function doWhileLoop(array) {
  do {
    array.shift()
  }
  while (array.length > 0 && maybeTrue());
return array
}
