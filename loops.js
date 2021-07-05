function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`I am ${i} strange loop.`)
    }
    else {
      array.push(`I am ${i} strange loops.`)
    }
}
return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return 'done'
}



function doWhileLoop(array) {
  do {
    console.log(array);
    function incrementVariable() {
      array.shift();
    }
  } while (array.length > 0 && incrementVariable())
  return array
}
