function forLoop(loopTheory){
/*  for (var i = 0; i < 25; i++){
    if (i = 1){
      loopTheory[i] = "I am 1 strange loop.";
    }
    else{
    loopTheory[i] = `I am ${i} strange loops.`;
    }
  }*/
  loopTheory[0] = "I am 0 strange loops."
  loopTheory[1] = "I am 1 strange loop."
  var i;
  for (i = 2; i < 25, i++){
    loopTheory[i] = `I am ${i} strange loops.`
  }


  return loopTheory;
}

function whileLoop(num) {
  while (num >= 0) {
  console.log(num);
  num--;
  }
}

/*function maybeTrue() {
return Math.random() >= 0.5
} */

function doWhileLoop(array) {
  var i = 0;
  var r;
do {
  array.slice(i);
  i++;
  r = Math.Random();
} while (r >= 0.5 && doItOnce.length > 0);
}
