var forLoop = (array) => {
  for (let i = 0; i < 25; i++) {
    if (i == 1) {
      array.unshift("I am 1 strange loop.")
    }
    else array.unshift("I am ${i} strange loops.")
  }
  return array
}

var whileLoop = (n) => {
  while(n > 0) {
    console.log(n)
    n--
  }
  return "done"
}

var doWhileLoop = (array) => {
var maybeTrue = () => {
  return Math.random() >= 0.5
}
  do {
    array = array.slice(1)
  }  while (maybeTrue() && array.length > 0)
  return array
}
