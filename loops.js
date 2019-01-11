function forLoop(array) {
  for (let i=0; i<25; i++){
    array = [...array, `I am ${i} strange loop${i === 1 ? '' : 's'}.`]
  }
  return array

}
function whileLoop(n) {
  while(n>0) {
    console.log(n--)
  }
  return "done"
}
function incrementVariable() {
  i = i + 1;
}
let i = 0
function doWhileLoop(array) {
  do{
    array.shift()
  } while (array.length > 0 || incrementVariable())
  return array
}
