
function forLoop(array) {
  for (var i = 0; i < array.length; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push("I am " + i + " strange loop.")
    }
  }

}
function whileLoop(n){
  while(n>0){
    console.log(--n)
  }
  return "done"
}
