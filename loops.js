//for loop
function forLoop(array){
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push( `I am 1 strange loop.`);
        }  else {
          array.push (`I am ${i} strange loops.`);
            }
          }
  return array
}
//while loop
function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n -= 1;
  }
  return "done";
}
//do while loop
function doWhileLoop(num) {
  var i = 0;

  function incrementVariable() {
  i++;
  return i;

  do {
    console.log("I run once regardless.")
  } while (incrementVariable() <= num);
}
