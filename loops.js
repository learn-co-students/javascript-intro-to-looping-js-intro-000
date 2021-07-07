function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    (i === 1) ? arr.push("I am 1 strange loop.") : arr.push(`I am ${i} strange loops.`); }
  return arr;
}
function whileLoop(n) {
  while (n > 0) {
    console.log(--n); }
  return 'done'; }

function doWhileLoop(arr) {
  function maybeTrue() {
    return Math.random() >= 0.5 }
  do { arr.splice(0, 1) }
  while (arr.length > 0 && maybeTrue());
  return arr;
}
