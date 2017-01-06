var forLoop = (array) => {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push('I am 1 strange loop.')
    }
    else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

var whileLoop = (number) => {
  while (number > 0) {
    console.log(--number);
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

var doWhileLoop = (array) => {
    do {
      array.pop()
    } while (array.length > 0 || maybeTrue());
    return array;
}

/*
//var mike = new Array();
var forLoop = (array) => {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push('I am 1 strange loop.')
    }
    else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}
//forLoop(mike)
*/
/*
var forLoop = (array) => {
  for (var i = 0; i < 25; i++) {
    console.log("Hi Mike")
  }
}

var mike = new Array();
var forLoop = (array) => {
  for (let i = 0; i < 25; i++) {
    if (i = 1) {
      array = [...array, 'I am 1 strange loop.']
    }
    else {
      array = [...array, 'I am ${i} strange loops.']
    }
  }
    return array;
}
forLoop(mike)

*/
