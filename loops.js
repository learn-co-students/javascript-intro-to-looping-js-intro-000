/*for (var i = 1; i < 100; i++) {
  console.log( "Hello World the " + i + " time" );
}
*/

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 0) {
      array.push('I\'m no stranger.') }
      else if (i === 1) {
        array.push('I am 1 strange loop.') }
    else {
      array.push(`I am ${i} strange loops.`)
      }
   }
   return array
}

function whileLoop(n) {
  while (n > 0) {
  console.log(--n);
}
return 'done'
}

//EVERYTHING ABOVE PASSES, BUT FAILS WHEN BELOW IS INCLUDED


function doWhileLoop(array) {
 function maybeTrue() {
  return Math.random() >= 0.5
}
do {
  array.pop()
} while (array.length > 0 && maybeTrue(true));
return array
}
