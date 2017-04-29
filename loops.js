function forLoop(array) {
  let len = array.length

  for (let i=0; i<25; i++) {
    if (i===1) {
      array[i+len] = "I am 1 strange loop."
    }
    else {
      array[i+len] = `I am ${i} strange loops.`
    }
  }
  return array
}

function whileLoop(num){
  while (num>0){
    console.log(num);
    num--
  }
  return 'done'
}

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array.pop();
  } while (array.length >0 && maybeTrue())

  return array
}
