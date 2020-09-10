function forLoop(array) {
    for (let i = 0; i < 25; i++) {
        array.push(`I am ${i} strange ${i == 1 ? 'loop' : 'loops'}.`)
    }
    return array;
}

function whileLoop(n) {
  while(n > 0) {
    console.log(--n)
  }
  return 'done'
}

function doWhileLoop(num)  {
   if(num>9) {
      num = 9;
   }

   var i = 0;

  function incrementVariable() {
    i++
    return i;
  }
  do {
    console.log("I run once regardless.");
   }
  while(incrementVariable() <= num);
 }
