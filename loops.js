function forLoop(array){
  for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`)
     } else {
       array.push(`I am ${i} strange loops.`)
     }
  }
  return array;
};

function whileLoop(n){
  var countdown = n;
  while (countdown > 0){
    console.log(--countdown);
  }
  return "done";
};

function doWhileLoop(num){
  if (num === 0){
    console.log("I run once regardless.");
  }
  else{
    while(num > 0){
      console.log("I run once regardless.");
      num--;
    }
  }
};
