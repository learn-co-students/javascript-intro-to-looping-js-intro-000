function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`)
  }
  return array
}

function whileLoop(n) {
  while (n>0) {
    console.log(n--)
  }
  return 'done'
}



function doWhileLoop(n) {

  let i = 0

  function incrementVariable() {
    i+=1
    return i
  }

  do {
    console.log("I am run once regardless")
  } while (incrementVariable() < n)
}
