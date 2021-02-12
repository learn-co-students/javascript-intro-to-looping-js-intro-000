
function forLoop(strin) {
  for(let i = 0; i<25; i +=1) {
    if (i==1) {strin.push(`I am ${i} strange loop.`)}
    else {strin.push(`I am ${i} strange loops.`)}
  }
  return strin
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n)
    n = n-1
  }
  return 'done'
}

let i = 0;


function doWhileLoop(num) {
  do {
    console.log("I run once regardless.");
    num = num - 1
  } while (num > 0 );
}
