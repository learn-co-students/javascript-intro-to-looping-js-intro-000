function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if(i===1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
return array
}

function whileLoop(countdown) {
  while (countdown > 0) {
  console.log(--countdown)
}
return 'done'
}

function dowhileLoop(array) {
  function maybeTrue() {
  return Math.random() >= 0.5
  }

do {
  array = array.slice(1)
} while (array.length > 0 && maybeTrue())

return array
}
