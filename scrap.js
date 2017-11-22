for (let i = 1; i < 26; i++) {
  if (i===1) {
    console.log(`returning ${i}`) }
    else if (i===25) {
      console.log (`final. ${i}`) }
      else {
        console.log(`returning between 1 and 25`)
      }
  }

  var forLoop = (array) => {
    array = []
    for (let i=0; i<25; i++) {
      if (i===1) {
        array.push('I am 1 strange loop.')
      }
      else {
        array.push(`I am ${i} strange loops`)
      }
    }
  }

  doWhileLoop = (array) => {
    function maybeTrue() {
    return Math.random() >= 0.5
  }
    if (array = []) {
      return array
    }
    else do {
      array.pop
    }
    while (maybeTrue())
    return array
  }
