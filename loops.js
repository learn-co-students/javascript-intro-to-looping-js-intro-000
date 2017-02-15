function whileLoop (int) {
  while (int >= 0) {
    console.log(int)
    int -= 1
  }
}

whileLoop(5)

function maybeTrue () {
  return Math.random() >= 0.5
}

function doWhileLoop (arr) {
  do {
    arr.pop
 } while (arr.length > 0 && maybeTrue()) 
}

doWhileLoop([0, 1, 2])
