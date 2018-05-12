var array = new Array()
function forLoop(array){

  for (let i = 0; i < 25; i++) {
    array.push(`"I am ${i} strange loop${i===1 ? '' : 's'}."`)
  }

  return array
}

function whileLoop(i){
  while (i>0){
    console.log(i--)
  }
  return "done"
}

function doWhileLoop(array){
  do {
      array.pop()
  } while (array.length!=0 || maybeTrue());
  return array
}

function maybeTrue() {
  return Math.random() >= 0.5
}
