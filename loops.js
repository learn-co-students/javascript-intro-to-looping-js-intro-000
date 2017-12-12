var forLoop = (array) => {
    for (let i = 0; i < 25; i++) {
        array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
    };
    return array
}

var whileLoop = n => {
     while (n > 0) {
         console.log(--n);
     }
     return 'done'
 }

var doWhileLoop = array => {
    function maybeTrue() {
      return Math.random() >= 0.5
    }

    do {
      array.pop()
    } while (array.length > 0 && maybeTrue());
    return array
}
