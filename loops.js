
function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    let str = i === 1 ? '' : 's'
    arr.push(`I am ${i} strange loop${str}.`)
  }
  console.log(arr)
  return arr
}

function whileLoop(num) {
  while (num > 0) {
    console.log('counting down ', num--)
  }
  return 'done'
}

function doWhileLoop(arr) {
  var i = 0

  function incrementVariable() {
    i = i + 1;
  }

  do {
    arr.splice(i,1)
  } while( arr.length > 0 && incrementVariable()) 
  return arr
}
