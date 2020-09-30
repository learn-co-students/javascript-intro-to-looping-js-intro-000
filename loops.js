function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 0 || i === 1 ? '' : 's'}.`)
  }
  return array;
}


function whileLoop(num) {
  while(num > 0) {
    console.log(--num)
  }
  return 'done'
}

let i = 0;
function incrementVariable() {
  return i++;
}

function doWhileLoop(n) {
  do {
    console.log('I run once regardless.')
  } while(incrementVariable() < n)
}
