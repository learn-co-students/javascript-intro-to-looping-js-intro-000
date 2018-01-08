function forLoop(array) {
    // adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."` to an array 25 times
    for (var i=0; i < 25; i++ ) {
        array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
    }
    return array
}

function whileLoop(n) {
    var i = n
    while ( i > 0 ) {
        console.log(`${i}...`)
        i--
    }
    return 'done'
}

function maybeTrue() {
  // Returns a random number between 0 (inclusive) and 1 (exclusive)
  return Math.random() >= 0.5

}

function doWhileLoop(array) {
    // removes elements from `array` until `array` is empty or until `maybeTrue()` returns `false
    do {
        array.pop()
    } while ( array.lenght > 0 && maybeTrue())
    return array
}
