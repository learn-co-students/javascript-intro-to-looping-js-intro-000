/* for loop-

for ([initialization]; [condition]; [iteration]) {
  [loopBody];
}
*/

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  if (i === 1) {
    array.push('I am 1 strange loop.')
  } else {
    array.push(`I am ${i} strange loops.`)
  }
  }
  return array;
}

/* while loop--

while ([condition]) {
  [loopBody with iteration statement];
}
*/

function whileLoop(n) {
  while (n > 0) {
  console.log(n);
 n -= 1;
  }
  return 'done';
}

/* Do-While Loop 

do {
  [loopBody];
} while ([condition]);

*/
var i = 0
function incrementVariable() {
  i++;
  return i;
}

function doWhileLoop(num){
  do{
    console.log("I run once regardless.")
  } while (incrementVariable() <= num)
} 