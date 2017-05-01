function forLoop(array){
  var arr = array
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
    arr.push(`I am 1 strange loop.`)
    }
    else {
    arr.push(`I am ${i} strange loops.`)
    }
  }
return arr
}

function whileLoop(n){
  let countdown = n;
  while (countdown>0){
    console.log(--countdown)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue());

function doWhileLoop(array){
  var arr= array
  do {
  arr.splice(1,1);
} while (maybeTrue())
return arr
}
