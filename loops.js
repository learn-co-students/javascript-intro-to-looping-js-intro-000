function forLoop(arr) {
  for(var i=1;i<=25;i++) {
    arr.push(`I am ${i} strange loop.`);
  }
  return arr;
}

function whileLoop(n) {
  var i=0;
  while(n>=i) {
    console.log(n);
    n--;
  }
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(arr) {
  do{
    return arr;
  }while(maybeTrue(arr.length > 0 && maybeTrue()));
}
