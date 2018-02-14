function forLoop(array) {
  for (let i = 1; i < 26; i++) {
    array.push(`I am ${i} strange loop.`)
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
