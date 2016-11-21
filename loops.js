// Add a string to an array 25 times
function forLoop(array) {
    for (var i = 0; i < 25; i++){
        array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
    }
    return array;
}

// Count from n to 0
function whileLoop(n) {
    while (n > 0) {
        console.log(n);
    n--;
    }
    return 'done';
}

// Remove element from array until it's empty or maybeTrue() returns false
function doWhileLoop(array) {
    function maybeTrue() {
      return Math.random() >= 0.5
    }
    do {
        array.pop();
        console.log(array.length);
    } while (array.length > 0 || maybeTrue());
    return array;
}
