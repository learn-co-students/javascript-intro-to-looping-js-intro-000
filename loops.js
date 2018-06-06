var forLoop = array => {

  for (let i = 0; i < 25; i++) {

    if (i === 1) {

      array = [...array, 'I am 1 strange loop.']

    } else {

      array = [...array, `I am ${i} strange loops.`]

    }

}
 return array

}

var whileLoop = n => {

  while (n > 0) {
    console.log(--n)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}


var doWhileLoop = array => {
  do {

    array.length = array.length - 1

  } while (array.length > 0 && maybeTrue())

  return array
}
