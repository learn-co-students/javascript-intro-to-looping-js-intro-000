function forLoop (array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      var add = ""
    }
    else {
      var add = "s"
    }
    array.push("I am " + i + " strange loop" + add + ".")
  }
  return array
}

function whileLoop (n) {
  var  count = n;
  while (count > 0) {
    console.log(--count)
  }
  return 'done'
}

function doWhileLoop (num) {
  do {
    console.log ("I run once regardlesss.")
    num = num - 1
  } while (num > 0)
}
