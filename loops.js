function forLoop(array) {
    for (let i = 0; i < 25; i++) {
        array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`)
    }
    return array
}

function whileLoop(num) {
    while (num > 0) {
        console.log(num)
        --num
    }
    return 'done'
}

function doWhileLoop(array) {
    // function incrementVariable() {
    //     i = i + 1;
    // }
    do {
        array.pop()
        // incrementVariable();
    } while (array.length > 0);
    return array
}
