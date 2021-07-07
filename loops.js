function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      arr.push(`I am ${i} strange loop.`);
    } else {
      arr.push(`I am ${i} strange loops.`);
    }
  }
  return arr;
}

function whileLoop(n) {
  let countdown = n;
  
  while (countdown > 0) {
    console.log(countdown);
    countdown--;
  }
  return 'done';
}

function incrementVariable() {
  let i = 0;
  i = i + 1;
}

function doWhileLoop(arr) {
  do {
    arr.pop(); 
  } while (arr.length > 0 && incrementVariable());
  return arr;
}