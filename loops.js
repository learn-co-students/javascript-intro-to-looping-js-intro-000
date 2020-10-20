function forLoop(array) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`)
     } else {
       array.push(`I am ${i} strange loops.`)
     }
  }
  return array;
}

function whileLoop(n) {
  let countdown = n;

    while (countdown > 0) {
      console.log(--countdown)
    }
    return "done";
  }


  function maybeTrue() {
     return Math.random() >= 0.5
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
