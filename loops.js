function forLoop(array) {
  var value = "";
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      value = "I am 1 strange loop."
    } else {
      value = `I am ${i} strange loops.`
    }
    array.push(value)
  }
  return array
}

function whileLoop(number) {
  while (number > 0) {
    console.log(number)
    number--
  }
  return "done"
}

function doWhileLoop(num) {
  function incrementVariable() {
    num = num + 1;
    return num;
  }
  if (num === 0) {
    do {
      console.log("I run once regardless.")
    } while (num > 0)
  } else if (num === 10) {
    num = 0
    do {
      console.log("I run once regardless.")
    } while (incrementVariable() < 10)
  }
}
