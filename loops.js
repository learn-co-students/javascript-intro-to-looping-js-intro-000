


function forLoop(a) {
  for (var i = 0; i<25; ++i) {
    a.push(`I am ${i} strange loop${ i<2 ? '' : 's' }.`)
  }
  return a;
}

function whileLoop(n) {
  while (n--) {
    console.log(n);
  }
  return 'done';
}

function doWhileLoop(n) {
  var i = 0;
  do {
    console.log("I run once regardless.");
  } while(++i < n)
}
