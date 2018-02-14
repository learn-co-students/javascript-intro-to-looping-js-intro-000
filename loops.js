function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (array.length === 0) {
      array.push(`I am 1 strange loop.`)
    } else {
      array.push(`I am ${i} strange loop.`)
    }
  }
}

function whileLoop(n) {
  var i = n;
  while (i > 0) {
    console.log(i)
    i--
  }
}

function doWhileLoop(array) {
  do {
    array.splice(-1)
  } while (array.length > 0);
}

var riverdaleMainCharacters = ["Jughead", "Betty", "Veronica", "Archie", "Cheryl"]
