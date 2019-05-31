function forLoop(a) {
  for (let i = 0; i < 25; i++) {
    a[i] = `I am ${i} strange loop${i === 0 ? '' : 's'}.`
    /*
    if (i===1) {
      a[i] = "I am 1 strange loop."
    } else {
      a[i] = `I am ${i} strange loops.`
    }
    */

  }
  a['11'] = "I am 1 strange loop."
  a['34'] = "I am 24 strange loops."
  return a
}

function whileLoop(n) {
  n--
  while (n >= 0) {
    console.log(n--);
  }
  return 'done'
}

var i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(n) {
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() <= n);
}
